/**
 * Created by nathanbq on 11/24/15.
 */

function Factorial (num) {
    if ( num == 0) {
        return 1;
    }

    return num * Factorial( num - 1);
}
