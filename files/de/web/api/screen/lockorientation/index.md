---
title: "Screen: lockOrientation() Methode"
short-title: lockOrientation()
slug: Web/API/Screen/lockOrientation
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Screen Orientation API")}}{{non-standard_header}}

Die **`lockOrientation()`** Methode des [`Screen`](/de/docs/Web/API/Screen)-Interfaces sperrt den Bildschirm in eine bestimmte Ausrichtung.

> [!WARNING]
> Diese Funktion ist veraltet und sollte vermieden werden. Verwenden Sie stattdessen die [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) Methode.

> [!NOTE]
> Diese Methode funktioniert nur für installierte Web-Apps oder für Webseiten im [Vollbildmodus](/de/docs/Web/API/Fullscreen_API).

## Syntax

```js-nolint
lockOrientation(orientation)
```

### Parameter

- `orientation`
  - : Die Ausrichtung, in die der Bildschirm gesperrt werden soll. Dies ist entweder ein String oder ein Array von Strings. Mehrere Strings zu übergeben bedeutet, dass der Bildschirm sich nur in den ausgewählten Ausrichtungen drehen kann.

    Die folgenden Strings repräsentieren die möglichen Anforderungen an die Ausrichtung, die Sie spezifizieren können:
    - `portrait-primary`
      - : Repräsentiert die Ausrichtung des Bildschirms im primären Porträtmodus. Ein Bildschirm wird als im primären Porträtmodus befindlich angesehen, wenn das Gerät in seiner normalen Position gehalten wird und diese Position im Porträt liegt, oder wenn die normale Position des Geräts im Querformat ist und das Gerät um 90° im Uhrzeigersinn gedreht gehalten wird. Die normale Position ist geräteabhängig.

    - `portrait-secondary`
      - : Repräsentiert die Ausrichtung des Bildschirms im sekundären Porträtmodus. Ein Bildschirm wird als im sekundären Porträtmodus befindlich angesehen, wenn das Gerät um 180° von seiner normalen Position gehalten wird und diese Position im Porträtmodus liegt, oder wenn die normale Position des Geräts im Querformat ist und das Gerät um 90° gegen den Uhrzeigersinn gedreht gehalten wird. Die normale Position ist geräteabhängig.
    - `landscape-primary`
      - : Repräsentiert die Ausrichtung des Bildschirms im primären Querformatmodus. Ein Bildschirm wird als im primären Querformatmodus befindlich angesehen, wenn das Gerät in seiner normalen Position gehalten wird und diese Position im Querformat liegt, oder wenn die normale Position des Geräts im Porträt ist und das Gerät um 90° im Uhrzeigersinn gedreht gehalten wird. Die normale Position ist geräteabhängig.
    - `landscape-secondary`
      - : Repräsentiert die Ausrichtung des Bildschirms im sekundären Querformatmodus. Ein Bildschirm wird als im sekundären Querformatmodus befindlich angesehen, wenn das Gerät um 180° von seiner normalen Position gehalten wird und diese Position im Querformat liegt, oder wenn die normale Position des Geräts im Porträt ist und das Gerät um 90° gegen den Uhrzeigersinn gedreht gehalten wird. Die normale Position ist geräteabhängig.
    - `portrait`
      - : Repräsentiert sowohl `portrait-primary` als auch
        `portrait-secondary`.
    - `landscape`
      - : Repräsentiert sowohl `landscape-primary` als auch
        `landscape-secondary`.
    - `default`
      - : Repräsentiert entweder `portrait-primary` oder
        `landscape-primary`, abhängig von der natürlichen Ausrichtung des Geräts. Wenn die Auflösung des Bildschirms zum Beispiel 1280\*800 ist, führt `default` zur Querformatdarstellung, wenn die Auflösung 800\*1280 beträgt, führt `default` zur Porträtdarstellung.

> [!NOTE]
> Es ist möglich, mehrere Sperren gleichzeitig einzustellen. Wenn die Sperre nur für eine Ausrichtung gesetzt ist, ändert sich die Bildschirmausrichtung nie, bis die Bildschirmausrichtung entsperrt wird. Andernfalls ändert sich die Bildschirmausrichtung von einer Ausrichtung zur anderen, solange die Ausrichtungen zu denjenigen gehören, auf die das Gerät gesperrt ist.

### Rückgabewert

Gibt `true` zurück, wenn die Ausrichtung zum Sperren autorisiert wurde, oder `false`, wenn die Ausrichtungssperre verweigert wurde. Beachten Sie, dass der Rückgabewert nicht angibt, dass die Bildschirmausrichtung tatsächlich gesperrt ist: Es kann eine Verzögerung geben.

## Beispiele

### Verwendung mit einem String-Argument

```js
screen.lockOrientationUniversal =
  screen.lockOrientation ||
  screen.mozLockOrientation ||
  screen.msLockOrientation;

if (screen.lockOrientationUniversal("landscape-primary")) {
  // Orientation was locked
} else {
  // Orientation lock failed
}
```

### Verwendung mit einem `Array`-Argument

```js
screen.lockOrientationUniversal =
  screen.lockOrientation ||
  screen.mozLockOrientation ||
  screen.msLockOrientation;

if (
  screen.lockOrientationUniversal(["landscape-primary", "landscape-secondary"])
) {
  // Orientation was locked
} else {
  // Orientation lock failed
}
```

## Spezifikationen

Diese Funktion ist nicht Teil einer Spezifikation. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Verwenden Sie stattdessen [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Screen.orientation`](/de/docs/Web/API/Screen/orientation)
- [`Screen.unlockOrientation()`](/de/docs/Web/API/Screen/unlockOrientation)
- [`orientationchange`](/de/docs/Web/API/Screen/orientationchange_event) Ereignis
- [Verwaltung der Bildschirmausrichtung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
