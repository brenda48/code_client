import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-even-odd',
  templateUrl: './even-odd.component.html',
  styleUrls: ['./even-odd.component.scss'],
})
export class EvenOddComponent implements OnInit {
  public EvenOddImputPipe: number;
  public EvenOddImputServer: number;
  public EvenOddRes: 'Pair' | 'Impair' = 'Pair';

  constructor(private _API: ApiService, private _SNACK_BAR: MatSnackBar) {
    this.EvenOddImputPipe = 0;
    this.EvenOddImputServer = 0;
  }

  ngOnInit() {
  }

  check_value() {
    if (this.EvenOddImputServer !== null ) {
      this._API.get_even_odd(this.EvenOddImputServer).subscribe(
        res => {
          this.EvenOddRes = res;
        },
        err => {
          this._on_update_error('Le chiffre/nombre saisie n\'est pas bon');
        }
      );
    }

  }

  private _on_update_error(res: string) {
    this._SNACK_BAR.open(res, 'Ok', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

}
