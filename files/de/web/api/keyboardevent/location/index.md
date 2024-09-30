---
title: "KeyboardEvent: location Eigenschaft"
short-title: location
slug: Web/API/KeyboardEvent/location
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("UI Events")}}

Die schreibgeschützte Eigenschaft **`KeyboardEvent.location`** gibt ein
`unsigned long` zurück, das den Ort der Taste auf der Tastatur oder einem anderen
Eingabegerät darstellt.

Mögliche Werte sind:

<table class="standard-table">
  <thead>
    <tr>
      <th>Konstante</th>
      <th>Wert</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>DOM_KEY_LOCATION_STANDARD</code></td>
      <td>0</td>
      <td>
        Die Taste hat nur eine Version oder kann nicht zwischen der linken
        und rechten Version unterschieden werden und wurde nicht auf dem Nummernblock
        oder einer Taste, die als Teil des Nummernblocks betrachtet wird, gedrückt.
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_LEFT</code></td>
      <td>1</td>
      <td>
        Die Taste war die linke Version der Taste; zum Beispiel wurde die linke
        <kbd>Control</kbd>-Taste auf einer Standard-Tastatur mit 101 Tasten in den USA gedrückt.
        Dieser Wert wird nur für Tasten verwendet, die mehr als eine mögliche Position
        auf der Tastatur haben.
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_RIGHT</code></td>
      <td>2</td>
      <td>
        Die Taste war die rechte Version der Taste; zum Beispiel wird die
        rechte <kbd>Control</kbd>-Taste auf einer Standard-Tastatur mit 101 Tasten in den USA
        gedrückt. Dieser Wert wird nur für Tasten verwendet, die mehr als eine mögliche
        Position auf der Tastatur haben.
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_NUMPAD</code></td>
      <td>3</td>
      <td>
        <p>
          Die Taste war auf dem Nummernblock oder hat einen virtuellen Tastencode, der
          dem Nummernblock entspricht.
        </p>
        <div class="note">
          <p>
            <strong>Hinweis:</strong> Wenn <kbd>NumLock</kbd> aktiviert ist, gibt Firefox
            immer <code>DOM_KEY_LOCATION_NUMPAD</code> für die Tasten auf dem Nummernblock zurück. Anderenfalls, wenn <kbd>NumLock</kbd> deaktiviert ist und die Tastatur tatsächlich einen Nummernblock hat, gibt Firefox ebenfalls immer <code>DOM_KEY_LOCATION_NUMPAD</code> zurück. Auf der anderen Seite, wenn die Tastatur keinen Nummernblock hat, wie zum Beispiel bei einem Notebook, werden einige Tasten nur dann zum Nummernblock, wenn NumLock aktiviert ist. Wenn solche Tasten Ereignisse auslösen, hängt der location-Attributwert von der Taste ab. Das heißt, es darf nicht <code>DOM_KEY_LOCATION_NUMPAD</code> sein.
          </p>
        </div>
        <div class="note">
          <p>
            <strong>Hinweis:</strong> Die Tastenereignisse der <kbd>NumLock</kbd>-Taste zeigen
            sowohl in Firefox als auch in Internet Explorer <code>DOM_KEY_LOCATION_STANDARD</code> an.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code>DOM_KEY_LOCATION_MOBILE</code>
        {{Non-standard_inline()}} {{deprecated_inline}}
      </td>
      <td>4</td>
      <td>
        <p>
          Die Taste war auf einem mobilen Gerät; dies kann entweder auf einem physischen
          Tastenfeld oder einer virtuellen Tastatur sein.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>DOM_KEY_LOCATION_JOYSTICK</code> {{Non-standard_inline()}}
        {{deprecated_inline}}
      </td>
      <td>5</td>
      <td>
        <p>
          Die Taste war eine Taste auf einem Gamecontroller oder einem Joystick auf einem mobilen
          Gerät.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Wert

Eine Zahl.

## Beispiele

```js
function keyEvent(event) {
  console.log(`Location of key pressed: ${event.location}`);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)
