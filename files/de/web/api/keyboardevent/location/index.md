---
title: "KeyboardEvent: location-Eigenschaft"
short-title: location
slug: Web/API/KeyboardEvent/location
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("UI Events")}}

Die Schreibgeschützte **`KeyboardEvent.location`**-Eigenschaft gibt einen
`unsigned long` zurück, der die Position der Taste auf der Tastatur oder einem anderen
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
        und rechten Version der Taste unterschieden werden und wurde nicht auf dem numerischen Tastenfeld
        oder einer Taste, die als Teil des Tastenfeldes angesehen wird, gedrückt.
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_LEFT</code></td>
      <td>1</td>
      <td>
        Die Taste war die linke Version der Taste; beispielsweise wurde die linke
        <kbd>Control</kbd>-Taste auf einer standardmäßigen 101-Tasten-US-Tastatur gedrückt.
        Dieser Wert wird nur für Tasten verwendet, die mehr als einen möglichen
        Standort auf der Tastatur haben.
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_RIGHT</code></td>
      <td>2</td>
      <td>
        Die Taste war die rechte Version der Taste; beispielsweise wird die
        rechte <kbd>Control</kbd>-Taste auf einer standardmäßigen 101-Tasten-US-Tastatur gedrückt.
        Dieser Wert wird nur für Tasten verwendet, die mehr als einen möglichen
        Standort auf der Tastatur haben.
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_NUMPAD</code></td>
      <td>3</td>
      <td>
        <p>
          Die Taste befand sich auf dem numerischen Tastenfeld oder hat einen
          virtuellen Tastencode, der dem numerischen Tastenfeld entspricht.
        </p>
        <div class="note">
          <p>
            <strong>Hinweis:</strong> Wenn <kbd>NumLock</kbd> aktiviert ist,
            gibt Firefox immer <code>DOM_KEY_LOCATION_NUMPAD</code> für die Tasten auf dem numerischen Feld zurück.
            Andernfalls, wenn <kbd>NumLock</kbd> deaktiviert ist und die Tastatur tatsächlich ein numerisches Tastenfeld hat,
            gibt Firefox ebenfalls immer <code>DOM_KEY_LOCATION_NUMPAD</code> zurück.
            Andererseits, wenn die Tastatur kein Tastenfeld hat, wie zum Beispiel bei einem Notebook,
            werden einige Tasten nur dann zum Numpad, wenn NumLock aktiviert ist.
            Wenn solche Tasten Ereignisse auslösen, hängt der Wert des location-Attributs von der Taste ab. Das heißt, es darf
            nicht <code>DOM_KEY_LOCATION_NUMPAD</code> sein.
          </p>
        </div>
        <div class="note">
          <p>
            <strong>Hinweis:</strong> Die Key-Events der <kbd>NumLock</kbd>-Taste zeigen sowohl in Firefox als auch im Internet Explorer
            <code>DOM_KEY_LOCATION_STANDARD</code> an.
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
          Die Taste befand sich auf einem mobilen Gerät; dies kann auf entweder einem physischen
          Tastenfeld oder einer virtuellen Tastatur geschehen.
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
          Die Taste war ein Knopf auf einem Game-Controller oder einem Joystick auf einem mobilen
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
