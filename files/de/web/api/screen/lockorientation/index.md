---
title: "Bildschirm: lockOrientation()-Methode"
short-title: lockOrientation()
slug: Web/API/Screen/lockOrientation
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Screen Orientation API")}}{{Deprecated_Header}}

Die **`lockOrientation()`**-Methode der [`Screen`](/de/docs/Web/API/Screen)-Schnittstelle sperrt den Bildschirm in eine angegebene Ausrichtung.

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

    Die folgenden Strings repräsentieren die möglichen Ausrichtungsvorgaben, die Sie angeben können:
    - `portrait-primary`
      - : Es repräsentiert die Ausrichtung des Bildschirms im primären Hochformatmodus. Ein Bildschirm befindet sich im primären Hochformatmodus, wenn das Gerät in seiner normalen Position gehalten wird und diese Position im Hochformat ist, oder wenn die normale Position des Geräts im Querformat ist und das Gerät um 90° im Uhrzeigersinn gedreht gehalten wird. Die normale Position ist geräteabhängig.

    - `portrait-secondary`
      - : Es repräsentiert die Ausrichtung des Bildschirms im sekundären Hochformatmodus. Ein Bildschirm befindet sich im sekundären Hochformatmodus, wenn das Gerät um 180° von seiner normalen Position gedreht wird und diese Position im Hochformat ist, oder wenn die normale Position des Geräts im Querformat ist und das Gerät gegen den Uhrzeigersinn um 90° gedreht gehalten wird. Die normale Position ist geräteabhängig.
    - `landscape-primary`
      - : Es repräsentiert die Ausrichtung des Bildschirms im primären Querformatmodus. Ein Bildschirm befindet sich im primären Querformatmodus, wenn das Gerät in seiner normalen Position gehalten wird und diese Position im Querformat ist, oder wenn die normale Position des Geräts im Hochformat ist und das Gerät um 90° im Uhrzeigersinn gedreht gehalten wird. Die normale Position ist geräteabhängig.
    - `landscape-secondary`
      - : Es repräsentiert die Ausrichtung des Bildschirms im sekundären Querformatmodus. Ein Bildschirm befindet sich im sekundären Querformatmodus, wenn das Gerät um 180° von seiner normalen Position gedreht wird und diese Position im Querformat ist, oder wenn die normale Position des Geräts im Hochformat ist und das Gerät gegen den Uhrzeigersinn um 90° gedreht gehalten wird. Die normale Position ist geräteabhängig.
    - `portrait`
      - : Es repräsentiert sowohl `portrait-primary` als auch `portrait-secondary`.
    - `landscape`
      - : Es repräsentiert sowohl `landscape-primary` als auch `landscape-secondary`.
    - `default`
      - : Es repräsentiert entweder `portrait-primary` oder `landscape-primary`, abhängig von der natürlichen Ausrichtung der Geräte. Zum Beispiel, wenn die Panel-Auflösung 1280\*800 ist, wird `default` es im Querformat einstellen, wenn die Auflösung 800\*1280 ist, wird `default` es im Hochformat einstellen.

> [!NOTE]
> Es ist möglich, mehrere Sperren gleichzeitig zu setzen. Wenn die Sperre nur für eine Ausrichtung gesetzt ist, wird sich die Bildschirmorientierung niemals ändern, bis die Bildschirmorientierung entsperrt wird. Andernfalls wird die Bildschirmorientierung von einer Ausrichtung zur anderen wechseln, solange sich die Ausrichtungen unter denen befinden, die das Gerät gesperrt wurden.

### Rückgabewert

Gibt `true` zurück, wenn die Ausrichtung zur Sperrung autorisiert wurde, oder `false`, wenn die Ausrichtungssperre verweigert wurde. Beachten Sie, dass der Rückgabewert nicht anzeigt, dass die Bildschirmorientierung tatsächlich gesperrt ist: Es kann eine Verzögerung geben.

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

Verwenden Sie stattdessen die [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Screen.orientation`](/de/docs/Web/API/Screen/orientation)
- [`Screen.unlockOrientation()`](/de/docs/Web/API/Screen/unlockOrientation)
- [`orientationchange`](/de/docs/Web/API/Screen/orientationchange_event)-Ereignis
- [Verwaltung der Bildschirmorientierung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
