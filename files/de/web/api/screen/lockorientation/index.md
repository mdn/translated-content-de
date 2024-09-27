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
> Diese Funktion ist veraltet und sollte vermieden werden. Verwenden Sie stattdessen die [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock)-Methode.

> [!NOTE]
> Diese Methode funktioniert nur für installierte Web-Apps oder für Webseiten im [Vollbildmodus](/de/docs/Web/API/Fullscreen_API).

## Syntax

```js-nolint
lockOrientation(orientation)
```

### Parameter

- `orientation`

  - : Die Ausrichtung, in der der Bildschirm gesperrt werden soll. Dies ist entweder ein String oder ein Array von Strings. Durch das Übergeben mehrerer Strings kann der Bildschirm nur in den ausgewählten Ausrichtungen gedreht werden.

    Die folgenden Strings repräsentieren die möglichen Ausrichtungsanforderungen, die Sie angeben können:

    - `portrait-primary`

      - : Repräsentiert die Ausrichtung des Bildschirms im primären Porträtmodus. Ein Bildschirm befindet sich im primären Porträtmodus, wenn das Gerät in seiner normalen Position gehalten wird und diese Position im Hochformat ist, oder wenn die normale Position des Geräts im Querformat und das Gerät um 90° im Uhrzeigersinn gedreht wird. Die normale Position hängt vom Gerät ab.

    - `portrait-secondary`
      - : Repräsentiert die Ausrichtung des Bildschirms im sekundären Porträtmodus. Ein Bildschirm befindet sich im sekundären Porträtmodus, wenn das Gerät 180° von seiner normalen Position gehalten wird und diese Position im Hochformat ist, oder wenn die normale Position des Geräts im Querformat ist und das Gerät um 90° gegen den Uhrzeigersinn gedreht wird. Die normale Position hängt vom Gerät ab.
    - `landscape-primary`
      - : Repräsentiert die Ausrichtung des Bildschirms im primären Querformatmodus. Ein Bildschirm befindet sich im primären Querformatmodus, wenn das Gerät in seiner normalen Position gehalten wird und diese Position im Querformat ist, oder wenn die normale Position des Geräts im Hochformat ist und das Gerät um 90° im Uhrzeigersinn gedreht wird. Die normale Position hängt vom Gerät ab.
    - `landscape-secondary`
      - : Repräsentiert die Ausrichtung des Bildschirms im sekundären Querformatmodus. Ein Bildschirm befindet sich im sekundären Querformatmodus, wenn das Gerät 180° von seiner normalen Position gehalten wird und diese Position im Querformat ist, oder wenn die normale Position des Geräts im Hochformat ist und das Gerät um 90° gegen den Uhrzeigersinn gedreht wird. Die normale Position hängt vom Gerät ab.
    - `portrait`
      - : Repräsentiert sowohl `portrait-primary` als auch
        `portrait-secondary`.
    - `landscape`
      - : Repräsentiert sowohl `landscape-primary` als auch
        `landscape-secondary`.
    - `default`
      - : Repräsentiert entweder `portrait-primary` oder `landscape-primary`, abhängig von der natürlichen Ausrichtung der Geräte. Zum Beispiel, wenn die Auflösung des Panels 1280\*800 ist, wird `default` es im Querformat machen, wenn die Auflösung 800\*1280 ist, wird `default` es im Hochformat machen.

> [!NOTE]
> Es ist möglich, mehrere Sperren gleichzeitig festzulegen. Wenn die Sperre nur für eine Ausrichtung gesetzt ist, ändert sich die Bildschirmorientierung niemals, bis die Bildschirmorientierung entsperrt ist. Andernfalls ändert sich die Bildschirmorientierung von einer zur anderen, solange die Ausrichtungen zu den Ausrichtungen gehören, auf die das Gerät gesperrt ist.

### Rückgabewert

Gibt `true` zurück, wenn die Ausrichtung gesperrt werden durfte, oder
`false`, wenn das Sperren der Ausrichtung abgelehnt wurde. Beachten Sie, dass der Rückgabewert
nicht darauf hinweist, dass die Bildschirmorientierung tatsächlich gesperrt ist: Es kann eine Verzögerung geben.

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
- [`orientationchange`](/de/docs/Web/API/Screen/orientationchange_event) Ereignis
- [Verwalten der Bildschirmorientierung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
