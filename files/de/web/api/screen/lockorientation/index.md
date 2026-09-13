---
title: "Bildschrim: Methode lockOrientation()"
short-title: lockOrientation()
slug: Web/API/Screen/lockOrientation
l10n:
  sourceCommit: 3143a6094e7b87cf1a96b61f9551fb4d95049777
---

{{APIRef("Screen Orientation API")}}{{non-standard_header}}

Die **`lockOrientation()`**-Methode des [`Screen`](/de/docs/Web/API/Screen)-Interfaces sperrt den Bildschirm in eine bestimmte Ausrichtung.

> [!WARNING]
> Diese Funktion ist veraltet und sollte vermieden werden. Verwenden Sie stattdessen die [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock)-Methode.

> [!NOTE]
> Diese Methode funktioniert nur für installierte Web-Apps oder für Webseiten
> im [Vollbildmodus](/de/docs/Web/API/Fullscreen_API).

## Syntax

```js-nolint
lockOrientation(orientation)
```

### Parameter

- `orientation`
  - : Die Ausrichtung, in der der Bildschirm gesperrt werden soll. Dies ist entweder ein String oder ein Array von Strings. Das Übergeben mehrerer Strings ermöglicht es, den Bildschirm nur in den ausgewählten Ausrichtungen zu drehen.

    Die folgenden Strings repräsentieren die möglichen Orientierungsanforderungen, die Sie angeben können:
    - `portrait-primary`
      - : Sie repräsentiert die Ausrichtung des Bildschirms, wenn er sich im primären Hochformat befindet. Ein Bildschirm gilt als im primären Hochformat, wenn das Gerät in seiner normalen Position gehalten wird und diese Position im Hochformat ist, oder wenn die normale Position des Geräts im Querformat ist und das Gerät um 90° im Uhrzeigersinn gedreht wird. Die normale Position ist geräteabhängig.

    - `portrait-secondary`
      - : Sie repräsentiert die Ausrichtung des Bildschirms, wenn er sich im sekundären Hochformat befindet. Ein Bildschirm gilt als im sekundären Hochformat, wenn das Gerät um 180° von seiner normalen Position im Hochformat gehalten wird, oder wenn die normale Position des Geräts im Querformat ist und das Gerät um 90° gegen den Uhrzeigersinn gedreht wird. Die normale Position ist geräteabhängig.
    - `landscape-primary`
      - : Sie repräsentiert die Ausrichtung des Bildschirms, wenn er sich im primären Querformat befindet. Ein Bildschirm gilt als im primären Querformat, wenn das Gerät in seiner normalen Position gehalten wird und diese Position im Querformat ist, oder wenn die normale Position des Geräts im Hochformat ist und das Gerät um 90° im Uhrzeigersinn gedreht wird. Die normale Position ist geräteabhängig.
    - `landscape-secondary`
      - : Sie repräsentiert die Ausrichtung des Bildschirms, wenn er sich im sekundären Querformat befindet. Ein Bildschirm gilt als im sekundären Querformat, wenn das Gerät um 180° von seiner normalen Position im Querformat gehalten wird, oder wenn die normale Position des Geräts im Hochformat ist und das Gerät um 90° gegen den Uhrzeigersinn gedreht wird. Die normale Position ist geräteabhängig.
    - `portrait`
      - : Sie repräsentiert sowohl `portrait-primary` als auch `portrait-secondary`.
    - `landscape`
      - : Sie repräsentiert sowohl `landscape-primary` als auch `landscape-secondary`.
    - `default`
      - : Sie repräsentiert entweder `portrait-primary` und `landscape-primary`, abhängig von der natürlichen Ausrichtung der Geräte. Zum Beispiel, wenn die Panelauflösung 1280\*800 ist, wird `default` es im Querformat setzen, wenn die Auflösung 800\*1280 ist, wird `default` es ins Hochformat setzen.

> [!NOTE]
> Es ist möglich, mehrere Sperren gleichzeitig einzurichten. Wenn die Sperre nur für eine Ausrichtung eingestellt ist, ändert sich die Bildschirmorientierung nie, bis die Ausrichtungssperre aufgehoben wird. Ansonsten ändert sich die Bildschirmorientierung von einer Ausrichtung zur anderen, solange die Orientierungen zu denjenigen gehören, zu denen das Gerät gesperrt wurde.

### Rückgabewert

Gibt `true` zurück, wenn die Ausrichtung gesperrt werden durfte, oder `false`, wenn die Ausrichtungssperre verweigert wurde. Beachten Sie, dass der Rückgabewert nicht angibt, dass die Bildschirmorientierung tatsächlich gesperrt ist; es kann eine Verzögerung geben.

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

Diese Funktion ist Teil keiner Spezifikation. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Verwenden Sie stattdessen [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Screen.orientation`](/de/docs/Web/API/Screen/orientation)
- [`Screen.unlockOrientation()`](/de/docs/Web/API/Screen/unlockOrientation)
- [`orientationchange`](/de/docs/Web/API/Screen/orientationchange_event) Event
- [Verwaltung der Bildschirmorientierung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
