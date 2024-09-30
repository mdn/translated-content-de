---
title: "Screen: lockOrientation() Methode"
short-title: lockOrientation()
slug: Web/API/Screen/lockOrientation
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Screen Orientation API")}}{{Deprecated_Header}}

Die **`lockOrientation()`**-Methode des [`Screen`](/de/docs/Web/API/Screen)-Interfaces sperrt den Bildschirm in eine bestimmte Ausrichtung.

> [!WARNING]
> Dieses Feature ist veraltet und sollte vermieden werden. Verwenden Sie stattdessen die [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock)-Methode.

> [!NOTE]
> Diese Methode funktioniert nur für installierte Web-Apps oder für Webseiten im [Vollbildmodus](/de/docs/Web/API/Fullscreen_API).

## Syntax

```js-nolint
lockOrientation(orientation)
```

### Parameter

- `orientation`

  - : Die Ausrichtung, in der der Bildschirm gesperrt werden soll. Dies ist entweder ein String oder ein Array von Strings. Durch Übergeben mehrerer Strings kann der Bildschirm nur in den ausgewählten Ausrichtungen gedreht werden.

    Die folgenden Strings stellen die möglichen Ausrichtungsanforderungen dar, die Sie angeben können:

    - `portrait-primary`

      - : Sie repräsentiert die Ausrichtung des Bildschirms, wenn er sich im primären Hochformatmodus befindet. Ein Bildschirm wird als im primären Hochformatmodus betrachtet, wenn das Gerät in seiner normalen Position gehalten wird und diese Position im Hochformat ist, oder wenn die normale Position des Geräts im Querformat ist und das Gerät um 90° im Uhrzeigersinn gedreht wird. Die normale Position ist geräteabhängig.

    - `portrait-secondary`
      - : Sie repräsentiert die Ausrichtung des Bildschirms, wenn er sich im sekundären Hochformatmodus befindet. Ein Bildschirm wird als im sekundären Hochformatmodus betrachtet, wenn das Gerät um 180° von seiner normalen Position gehalten wird und diese Position im Hochformat ist, oder wenn die normale Position des Geräts im Querformat ist und das Gerät um 90° gegen den Uhrzeigersinn gedreht wird. Die normale Position ist geräteabhängig.
    - `landscape-primary`
      - : Sie repräsentiert die Ausrichtung des Bildschirms, wenn er sich im primären Querformatmodus befindet. Ein Bildschirm wird als im primären Querformatmodus betrachtet, wenn das Gerät in seiner normalen Position gehalten wird und diese Position im Querformat ist, oder wenn die normale Position des Geräts im Hochformat ist und das Gerät um 90° im Uhrzeigersinn gedreht wird. Die normale Position ist geräteabhängig.
    - `landscape-secondary`
      - : Sie repräsentiert die Ausrichtung des Bildschirms, wenn er sich im sekundären Querformatmodus befindet. Ein Bildschirm wird als im sekundären Querformatmodus betrachtet, wenn das Gerät um 180° von seiner normalen Position gehalten wird und diese Position im Querformat ist, oder wenn die normale Position des Geräts im Hochformat ist und das Gerät um 90° gegen den Uhrzeigersinn gedreht wird. Die normale Position ist geräteabhängig.
    - `portrait`
      - : Sie repräsentiert sowohl `portrait-primary` als auch `portrait-secondary`.
    - `landscape`
      - : Sie repräsentiert sowohl `landscape-primary` als auch `landscape-secondary`.
    - `default`
      - : Sie repräsentiert entweder `portrait-primary` und `landscape-primary`, je nach natürlicher Ausrichtung der Geräte. Zum Beispiel, wenn die Panel-Auflösung 1280\*800 ist, wird `default` sie als Querformat festlegen, wenn die Auflösung 800\*1280 ist, wird `default` sie auf Hochformat festlegen.

> [!NOTE]
> Es ist möglich, mehrere Sperren gleichzeitig festzulegen. Wenn die Sperre nur für eine Ausrichtung festgelegt ist, wird sich die Bildschirmorientierung nie ändern, bis die Bildschirmausrichtung entsperrt wird. Andernfalls ändert sich die Bildschirmausrichtung von einer Orientierung zur anderen, solange die Orientierungen zu denjenigen gehören, auf die das Gerät gesperrt wurde.

### Rückgabewert

Liefert `true`, wenn die Ausrichtung gesperrt werden durfte, oder `false`, wenn die Ausrichtungssperre verweigert wurde. Beachten Sie, dass der Rückgabewert nicht anzeigt, dass die Bildschirmausrichtung tatsächlich gesperrt ist: Es kann zu einer Verzögerung kommen.

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

Dieses Feature ist kein Teil einer Spezifikation. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

Verwenden Sie stattdessen [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Screen.orientation`](/de/docs/Web/API/Screen/orientation)
- [`Screen.unlockOrientation()`](/de/docs/Web/API/Screen/unlockOrientation)
- [`orientationchange`](/de/docs/Web/API/Screen/orientationchange_event) Ereignis
- [Verwaltung der Bildschirmausrichtung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
