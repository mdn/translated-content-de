---
title: "Screen: lockOrientation() Methode"
short-title: lockOrientation()
slug: Web/API/Screen/lockOrientation
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("Screen Orientation API")}}{{Deprecated_Header}}{{non-standard_header}}

Die **`lockOrientation()`** Methode der [`Screen`](/de/docs/Web/API/Screen) Schnittstelle sperrt den Bildschirm in eine bestimmte Ausrichtung.

> [!WARNING]
> Diese Funktion ist veraltet und sollte vermieden werden. Verwenden Sie stattdessen die Methode [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock).

> [!NOTE]
> Diese Methode funktioniert nur für installierte Web-Apps oder für Webseiten im [Vollbildmodus](/de/docs/Web/API/Fullscreen_API).

## Syntax

```js-nolint
lockOrientation(orientation)
```

### Parameter

- `orientation`
  - : Die Ausrichtung, in der der Bildschirm gesperrt werden soll. Dies ist entweder ein String oder ein Array von Strings. Wenn mehrere Strings übergeben werden, kann sich der Bildschirm nur in den ausgewählten Ausrichtungen drehen.

    Die folgenden Strings repräsentieren die möglichen Orientierungsanforderungen, die Sie angeben können:
    - `portrait-primary`
      - : Repräsentiert die Ausrichtung des Bildschirms, wenn er sich im primären Hochformatmodus befindet.
        Ein Bildschirm wird als im primären Hochformatmodus betrachtet, wenn das Gerät in seiner normalen Position gehalten wird und diese Position im Hochformat ist oder wenn die normale Position des Geräts im Querformat ist und das Gerät um 90° im Uhrzeigersinn gedreht wird. Die normale Position ist geräteabhängig.

    - `portrait-secondary`
      - : Repräsentiert die Ausrichtung des Bildschirms, wenn er sich im sekundären Hochformatmodus befindet.
        Ein Bildschirm wird als im sekundären Hochformatmodus betrachtet, wenn das Gerät um 180° von seiner normalen Position gehalten wird und diese Position im Hochformat ist oder wenn die normale Position des Geräts im Querformat ist und das Gerät um 90° gegen den Uhrzeigersinn gedreht wird. Die normale Position ist geräteabhängig.
    - `landscape-primary`
      - : Repräsentiert die Ausrichtung des Bildschirms, wenn er sich im primären Querformatmodus befindet.
        Ein Bildschirm wird als im primären Querformatmodus betrachtet, wenn das Gerät in seiner normalen Position gehalten wird und diese Position im Querformat ist oder wenn die normale Position des Geräts im Hochformat ist und das Gerät um 90° im Uhrzeigersinn gedreht wird. Die normale Position ist geräteabhängig.
    - `landscape-secondary`
      - : Repräsentiert die Ausrichtung des Bildschirms, wenn er sich im sekundären Querformatmodus befindet.
        Ein Bildschirm wird als im sekundären Querformatmodus betrachtet, wenn das Gerät um 180° von seiner normalen Position gehalten wird und diese Position im Querformat ist oder wenn die normale Position des Geräts im Hochformat ist und das Gerät um 90° gegen den Uhrzeigersinn gedreht wird. Die normale Position ist geräteabhängig.
    - `portrait`
      - : Repräsentiert sowohl `portrait-primary` als auch `portrait-secondary`.
    - `landscape`
      - : Repräsentiert sowohl `landscape-primary` als auch `landscape-secondary`.
    - `default`
      - : Repräsentiert entweder `portrait-primary` oder `landscape-primary`, abhängig von der natürlichen Ausrichtung der Geräte. Zum Beispiel, wenn die Panelauflösung 1280\*800 ist, wird `default` es im Querformat darstellen, wenn die Auflösung 800\*1280 ist, wird `default` es im Hochformat darstellen.

> [!NOTE]
> Es ist möglich, mehrere Sperren gleichzeitig zu setzen. Wenn die Sperre nur für eine Ausrichtung gesetzt ist, wird sich die Bildschirmausrichtung niemals ändern, bis die Bildschirmsperre aufgehoben wird. Andernfalls wird sich die Bildschirmausrichtung ändern, solange die Ausrichtungen den Ausrichtungen entsprechen, auf die das Gerät gesperrt ist.

### Rückgabewert

Gibt `true` zurück, wenn die Ausrichtung berechtigt war, gesperrt zu werden, oder `false`, wenn die Ausrichtungssperre verweigert wurde. Beachten Sie, dass der Rückgabewert nicht anzeigt, dass die Bildschirmausrichtung tatsächlich gesperrt ist: Es könnte eine Verzögerung geben.

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
