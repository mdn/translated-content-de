---
title: "Screen: lockOrientation()-Methode"
short-title: lockOrientation()
slug: Web/API/Screen/lockOrientation
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Screen Orientation API")}}{{Deprecated_Header}}

Die **`lockOrientation()`**-Methode der {{DOMxRef("Screen")}}-Schnittstelle sperrt den Bildschirm in eine angegebene Ausrichtung.

> [!WARNING]
> Diese Funktion ist veraltet und sollte vermieden werden. Verwenden Sie stattdessen die Methode {{DOMxRef("ScreenOrientation.lock()")}}.

> [!NOTE]
> Diese Methode funktioniert nur für installierte Webanwendungen oder für Webseiten im [Vollbildmodus](/de/docs/Web/API/Fullscreen_API).

## Syntax

```js-nolint
lockOrientation(orientation)
```

### Parameter

- `orientation`

  - : Die Ausrichtung, in die der Bildschirm gesperrt werden soll. Dies ist entweder ein String oder ein Array von Strings. Das Übergeben mehrerer Strings erlaubt es dem Bildschirm, sich nur in den ausgewählten Ausrichtungen zu drehen.

    Die folgenden Strings repräsentieren die möglichen Anforderung an Ausrichtungen, die Sie angeben können:

    - `portrait-primary`

      - : Dies repräsentiert die Ausrichtung des Bildschirms, wenn er sich im primären Hochformatmodus befindet. Ein Bildschirm befindet sich im primären Hochformatmodus, wenn das Gerät in seiner normalen Position gehalten wird und diese Position im Hochformat ist oder wenn die normale Position des Geräts im Querformat ist und das Gerät um 90° im Uhrzeigersinn gedreht wird. Die normale Position ist geräteabhängig.

    - `portrait-secondary`
      - : Dies repräsentiert die Ausrichtung des Bildschirms, wenn er sich im sekundären Hochformatmodus befindet. Ein Bildschirm befindet sich im sekundären Hochformatmodus, wenn das Gerät um 180° von seiner normalen Position gehalten wird und diese Position im Hochformat ist oder wenn die normale Position des Geräts im Querformat ist und das Gerät um 90° gegen den Uhrzeigersinn gedreht wird. Die normale Position ist geräteabhängig.
    - `landscape-primary`
      - : Dies repräsentiert die Ausrichtung des Bildschirms, wenn er sich im primären Querformatmodus befindet. Ein Bildschirm befindet sich im primären Querformatmodus, wenn das Gerät in seiner normalen Position gehalten wird und diese Position im Querformat ist oder wenn die normale Position des Geräts im Hochformat ist und das Gerät um 90° im Uhrzeigersinn gedreht wird. Die normale Position ist geräteabhängig.
    - `landscape-secondary`
      - : Dies repräsentiert die Ausrichtung des Bildschirms, wenn er sich im sekundären Querformatmodus befindet. Ein Bildschirm befindet sich im sekundären Querformatmodus, wenn das Gerät um 180° von seiner normalen Position gehalten wird und diese Position im Querformat ist oder wenn die normale Position des Geräts im Hochformat ist und das Gerät um 90° gegen den Uhrzeigersinn gedreht wird. Die normale Position ist geräteabhängig.
    - `portrait`
      - : Dies repräsentiert sowohl `portrait-primary` als auch `portrait-secondary`.
    - `landscape`
      - : Dies repräsentiert sowohl `landscape-primary` als auch `landscape-secondary`.
    - `default`
      - : Dies repräsentiert entweder `portrait-primary` oder `landscape-primary`, abhängig von der natürlichen Ausrichtung der Geräte. Zum Beispiel, wenn die Bildschirmauflösung 1280\*800 ist, wird `default` es in Querformat setzen, wenn die Auflösung 800\*1280 ist, wird `default` es in Hochformat setzen.

> [!NOTE]
> Es ist möglich, mehrere Sperren gleichzeitig festzulegen. Wenn also die Sperre nur für eine Ausrichtung festgelegt ist, ändert sich die Bildschirmausrichtung nicht, bis die Bildschirmsperre aufgehoben wird. Andernfalls ändert sich die Bildschirmausrichtung von einer Ausrichtung zur anderen, solange die Ausrichtungen zu denjenigen gehören, auf die das Gerät gesperrt wurde.

### Rückgabewert

Gibt `true` zurück, wenn die Ausrichtung gesperrt werden durfte oder `false`, wenn die Sperrung der Ausrichtung abgelehnt wurde. Beachten Sie, dass der Rückgabewert nicht anzeigt, dass die Bildschirmausrichtung tatsächlich gesperrt ist: Es kann zu Verzögerungen kommen.

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

Dieses Feature ist Teil keiner Spezifikation. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

Verwenden Sie stattdessen {{domxref("ScreenOrientation.lock()")}}.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("Screen.orientation")}}
- {{DOMxRef("Screen.unlockOrientation()")}}
- {{DOMxRef("Screen.orientationchange_event", "orientationchange")}} Event
- [Verwalten der Bildschirmausrichtung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
