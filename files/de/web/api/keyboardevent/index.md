---
title: KeyboardEvent
slug: Web/API/KeyboardEvent
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("UI Events")}}

**`KeyboardEvent`** Objekte beschreiben eine Benutzerinteraktion mit der Tastatur; jedes Ereignis beschreibt eine einzelne Interaktion zwischen dem Benutzer und einer Taste (oder einer Kombination einer Taste mit Modifikatortasten) auf der Tastatur. Der Ereignistyp ([`keydown`](/de/docs/Web/API/Element/keydown_event), [`keypress`](/de/docs/Web/API/Element/keypress_event) oder [`keyup`](/de/docs/Web/API/Element/keyup_event)) identifiziert, welche Art von Tastaturaktivität aufgetreten ist.

> [!NOTE]
> `KeyboardEvent`-Ereignisse geben nur an, welche Interaktion der Benutzer auf niedriger Ebene mit einer Taste auf der Tastatur hatte, ohne dieser Interaktion eine kontextuelle Bedeutung zu verleihen. Wenn Sie mit der Eingabe von Text umgehen müssen, verwenden Sie stattdessen das [`input`](/de/docs/Web/API/Element/input_event) Ereignis. Tastaturereignisse werden möglicherweise nicht ausgelöst, wenn der Benutzer alternative Mittel zur Texteingabe verwendet, wie beispielsweise ein Handschriftsystem auf einem Tablet oder Grafiktablet.

{{InheritanceDiagram}}

## Konstruktor

- [`KeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/KeyboardEvent)
  - : Erstellt ein neues `KeyboardEvent`-Objekt.

## Konstanten

Das `KeyboardEvent`-Interface definiert die folgenden Konstanten.

### Tastaturpositionen

Die folgenden Konstanten identifizieren, aus welchem Teil der Tastatur das Tastenereignis stammt. Sie werden als `KeyboardEvent.DOM_KEY_LOCATION_STANDARD` usw. aufgerufen.

<table class="standard-table">
  <caption>
    Kennungen der Tastaturposition
  </caption>
  <thead>
    <tr>
      <th scope="col">Konstante</th>
      <th scope="col">Wert</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>DOM_KEY_LOCATION_STANDARD</code></td>
      <td>0x00</td>
      <td>
        <p>
          Die durch das Ereignis beschriebene Taste wird nicht als an einem bestimmten Bereich der Tastatur befindlich identifiziert; sie befindet sich nicht auf dem numerischen Tastenfeld (es sei denn, es handelt sich um die NumLock-Taste), und für Tasten, die sowohl auf der linken als auch auf der rechten Seite der Tastatur vorhanden sind, ist die Taste aus irgendeinem Grund nicht mit dieser Position zu assoziieren.
        </p>
        <p>
          Beispiele sind alphanumerische Tasten auf der Standard-PC-101-US-Tastatur, die NumLock-Taste und die Leertaste.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_LEFT</code></td>
      <td>0x01</td>
      <td>
        <p>
          Die Taste ist eine, die möglicherweise an mehreren Stellen auf der Tastatur vorhanden ist und sich in diesem Fall auf der linken Seite der Tastatur befindet.
        </p>
        <p>
          Beispiele sind die linke Steuerungstaste, die linke Befehlstaste auf einer Macintosh-Tastatur oder die linke Umschalttaste.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_RIGHT</code></td>
      <td>0x02</td>
      <td>
        <p>
          Die Taste ist eine, die möglicherweise an mehreren Positionen auf der Tastatur vorhanden ist und sich in diesem Fall auf der rechten Seite der Tastatur befindet.
        </p>
        <p>
          Beispiele sind die rechte Umschalttaste und die rechte Alt-Taste (Option auf einer Mac-Tastatur).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_NUMPAD</code></td>
      <td>0x03</td>
      <td>
        <p>
          Die Taste befindet sich auf dem numerischen Tastenfeld oder ist eine virtuelle Taste, die mit dem numerischen Tastenfeld assoziiert ist, wenn es mehr als eine Stelle gibt, von der die Taste stammen könnte. Die NumLock-Taste gehört nicht zu dieser Gruppe und ist immer mit der Position <code>DOM_KEY_LOCATION_STANDARD</code> codiert.
        </p>
        <p>
          Beispiele sind die Ziffern auf dem numerischen Tastenfeld, die Eingabetaste des Tastenfeldes und der Dezimalpunkt auf dem Tastenfeld.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften seiner Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`KeyboardEvent.altKey`](/de/docs/Web/API/KeyboardEvent/altKey) {{ReadOnlyInline}}
  - : Gibt einen Booleschen Wert zurück, der `true` ist, wenn die <kbd>Alt</kbd> (<kbd>Option</kbd> oder <kbd>⌥</kbd> auf macOS) Taste aktiv war, als das Tastenereignis generiert wurde.

- [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) {{ReadOnlyInline}}
  - : Gibt einen String mit dem Codewert der physikalischen Taste zurück, die durch das Ereignis dargestellt wird.

    > [!WARNING]
    > Dies ignoriert das Tastaturlayout des Benutzers, so dass, wenn der Benutzer die Taste an der Position "Y" in einem QWERTY-Tastaturlayout drückt (nahe der Mitte der Zeile über der Home-Reihe), dies immer "KeyY" zurückgibt, selbst wenn der Benutzer eine QWERTZ-Tastatur hat (was bedeuten würde, dass der Benutzer ein "Z" erwartet und alle anderen Eigenschaften ein "Z" anzeigen würden) oder ein Dvorak-Tastaturlayout (wobei der Benutzer ein "F" erwartet). Wenn Sie dem Benutzer die korrekten Tastenanschläge anzeigen möchten, können Sie [`Keyboard.getLayoutMap()`](/de/docs/Web/API/Keyboard/getLayoutMap) verwenden.

- [`KeyboardEvent.ctrlKey`](/de/docs/Web/API/KeyboardEvent/ctrlKey) {{ReadOnlyInline}}
  - : Gibt einen Booleschen Wert zurück, der `true` ist, wenn die <kbd>Ctrl</kbd> Taste aktiv war, als das Tastenereignis generiert wurde.

- [`KeyboardEvent.isComposing`](/de/docs/Web/API/KeyboardEvent/isComposing) {{ReadOnlyInline}}
  - : Gibt einen Booleschen Wert zurück, der `true` ist, wenn das Ereignis zwischen `compositionstart` und `compositionend` ausgelöst wird.

- [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Tastenwert der durch das Ereignis dargestellten Taste repräsentiert.

- [`KeyboardEvent.location`](/de/docs/Web/API/KeyboardEvent/location) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Position der Taste auf der Tastatur oder einem anderen Eingabegerät darstellt. Eine Liste der Konstanten, die die Positionen identifizieren, ist oben unter [Tastaturpositionen](#tastaturpositionen) aufgeführt.

- [`KeyboardEvent.metaKey`](/de/docs/Web/API/KeyboardEvent/metaKey) {{ReadOnlyInline}}
  - : Gibt einen Booleschen Wert zurück, der `true` ist, wenn die <kbd>Meta</kbd> Taste (auf Mac-Tastaturen, die <kbd>⌘ Command</kbd> Taste; auf Windows-Tastaturen, die Windows-Taste (<kbd>⊞</kbd>)) aktiv war, als das Tastenereignis generiert wurde.

- [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) {{ReadOnlyInline}}
  - : Gibt einen Booleschen Wert zurück, der `true` ist, wenn die Taste so gehalten wird, dass sie automatisch wiederholt wird.

- [`KeyboardEvent.shiftKey`](/de/docs/Web/API/KeyboardEvent/shiftKey) {{ReadOnlyInline}}
  - : Gibt einen Booleschen Wert zurück, der `true` ist, wenn die <kbd>Shift</kbd> Taste aktiv war, als das Tastenereignis generiert wurde.

### Veraltete Eigenschaften

- [`KeyboardEvent.charCode`](/de/docs/Web/API/KeyboardEvent/charCode) {{Deprecated_inline}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Unicode-Referenznummer der Taste darstellt; diese Eigenschaft wird nur vom `keypress` Ereignis verwendet. Für Tasten, deren `char`-Eigenschaft mehrere Zeichen enthält, ist dies der Unicode-Wert des ersten Zeichens in dieser Eigenschaft. In Firefox 26 gibt dies Codes für druckbare Zeichen zurück.

- [`KeyboardEvent.keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) {{deprecated_inline}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die einen system- und implementierungsabhängigen numerischen Code darstellt, der den unmodifizierten Wert der gedrückten Taste identifiziert.

- [`KeyboardEvent.keyIdentifier`](/de/docs/Web/API/KeyboardEvent/keyIdentifier) {{Non-standard_inline}} {{deprecated_inline}} {{ReadOnlyInline}}
  - : Diese Eigenschaft ist nicht standardisiert und wurde zugunsten von [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) veraltet. Sie war Teil einer alten Version von DOM Level 3 Events.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden seiner Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent/getModifierState)
  - : Gibt einen Booleschen Wert zurück, der anzeigt, ob eine Modifikator-Taste wie <kbd>Alt</kbd>, <kbd>Shift</kbd>, <kbd>Ctrl</kbd> oder <kbd>Meta</kbd> gedrückt war, als das Ereignis erstellt wurde.

### Veraltete Methoden

- [`KeyboardEvent.initKeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/initKeyboardEvent) {{deprecated_inline}}
  - : Initialisiert ein `KeyboardEvent`-Objekt. Dies ist jetzt veraltet. Stattdessen sollte der [`KeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/KeyboardEvent) Konstruktor verwendet werden.

## Ereignisse

Die folgenden Ereignisse basieren auf dem `KeyboardEvent` Typ. In der untenstehenden Liste verlinkt jedes Ereignis auf die Dokumentation für den `Element`-Handler für das Ereignis, der generell für alle Empfänger gilt, einschließlich [`Element`](/de/docs/Web/API/Element), [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window).

- [`keydown`](/de/docs/Web/API/Element/keydown_event)
  - : Eine Taste wurde gedrückt.
- [`keyup`](/de/docs/Web/API/Element/keyup_event)
  - : Eine Taste wurde losgelassen.

### Veraltete Ereignisse

- [`keypress`](/de/docs/Web/API/Element/keypress_event) {{deprecated_inline}}
  - : Eine Taste, die normalerweise einen Zeichenwert erzeugt, wurde gedrückt. Dieses Ereignis war stark geräteabhängig und ist veraltet. Sie sollten es nicht verwenden.

## Nutzungshinweise

Es gibt drei Arten von Tastaturereignissen: [`keydown`](/de/docs/Web/API/Element/keydown_event), [`keypress`](/de/docs/Web/API/Element/keypress_event) und [`keyup`](/de/docs/Web/API/Element/keyup_event). Für die meisten Tasten löst Gecko eine Sequenz von Tastenereignissen wie folgt aus:

1. Wenn die Taste zunächst gedrückt wird, wird das `keydown`-Ereignis gesendet.
2. Wenn die Taste keine Modifikatortaste ist, wird das `keypress`-Ereignis gesendet.
3. Wenn der Benutzer die Taste loslässt, wird das `keyup`-Ereignis gesendet.

### Sonderfälle

Einige Tasten schalten den Status einer Anzeigelampe um; dazu gehören Tasten wie Feststelltaste, NumLock und ScrollLock. Unter Windows und Linux lösen diese Tasten nur die `keydown`- und `keyup`-Ereignisse aus.

> [!NOTE]
> Unter Linux löste Firefox 12 und früher auch das `keypress`-Ereignis für diese Tasten aus.

Ein Modellbeschränkung des macOS-Ereignismodells führt jedoch dazu, dass Caps Lock nur das `keydown`-Ereignis auslöst. NumLock wurde auf einigen älteren Laptop-Modellen (Modelle von 2007 und älter) unterstützt, aber seitdem hat macOS den NumLock auch auf externen Tastaturen nicht mehr unterstützt. Auf älteren MacBooks mit einer NumLock-Taste generiert diese Taste keine Tastenereignisse. Gecko unterstützt die ScrollLock-Taste, wenn eine externe Tastatur mit einer F14-Taste angeschlossen ist. In bestimmten älteren Versionen von Firefox generierte diese Taste ein `keypress`-Ereignis; dieses inkonsistente Verhalten war [Firefox-Bug 602812](https://bugzil.la/602812).

### Umgang mit automatischer Wiederholung

Wenn eine Taste gedrückt gehalten wird, beginnt sie, sich automatisch zu wiederholen. Dies führt zu einer Sequenz von Ereignissen wie der folgenden:

1. `keydown`
2. `keypress`
3. `keydown`
4. `keypress`
5. <\<wiederholt sich, bis der Benutzer die Taste loslässt>>
6. `keyup`

Dies ist, was die DOM Level 3-Spezifikation besagt, dass passieren sollte. Es gibt jedoch einige Vorbehalte, wie unten beschrieben.

#### Automatische Wiederholung in einigen GTK-Umgebungen wie Ubuntu 9.4

In einigen auf GTK basierenden Umgebungen löst die automatische Wiederholung während der automatischen Wiederholung ein natives Tastenausgabeereignis automatisch aus, und es gibt keine Möglichkeit für Gecko, den Unterschied zwischen einer wiederholt gedrückten Tastenfolge und einer automatischen Wiederholung zu erkennen. Auf diesen Plattformen generiert dann eine automatisch wiederholte Taste die folgende Ereignissequenz:

1. `keydown`
2. `keypress`
3. `keyup`
4. `keydown`
5. `keypress`
6. `keyup`
7. <\<wiederholt sich, bis der Benutzer die Taste loslässt>>
8. `keyup`

In diesen Umgebungen gibt es leider keine Möglichkeit, dass Webinhalte den Unterschied zwischen automatisch wiederholten Tasten und Tasten, die nur wiederholt gedrückt werden, erkennen können.

## Beispiel

```js
document.addEventListener("keydown", (event) => {
  const keyName = event.key;

  if (keyName === "Control") {
    // do not alert when only Control key is pressed.
    return;
  }

  if (event.ctrlKey) {
    // Even though event.key is not 'Control' (e.g., 'a' is pressed),
    // event.ctrlKey may be true if Ctrl key is pressed at the same time.
    alert(`Combination of ctrlKey + ${keyName}`);
  } else {
    alert(`Key pressed ${keyName}`);
  }
});

document.addEventListener("keyup", (event) => {
  const keyName = event.key;

  // As the user releases the Ctrl key, the key is no longer active,
  // so event.ctrlKey is false.
  if (keyName === "Control") {
    alert("Control key was released");
  }
});
```

## Spezifikationen

{{Specifications}}

Die Spezifikation des `KeyboardEvent`-Interfaces durchlief zahlreiche Entwurfsversionen, zuerst unter DOM Events Level 2, wo es fallen gelassen wurde, da kein Konsens erzielt wurde, dann unter DOM Events Level 3. Dies führte zur Implementierung nicht standardisierter Initialisierungsmethoden, der frühen DOM Events Level 2-Version `KeyboardEvent.initKeyEvent()` durch Gecko-Browser und der frühen DOM Events Level 3-Version [`KeyboardEvent.initKeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/initKeyboardEvent) durch andere. Beide wurden durch die moderne Verwendung eines Konstruktors ersetzt: [`KeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/KeyboardEvent).

## Browser-Kompatibilität

{{Compat}}

### Kompatibilitätsnotizen

- Ab Firefox 65 wird das `keypress`-Ereignis nicht mehr für [nicht druckbare Tasten](/de/docs/Web/API/KeyboardEvent/keyCode#non-printable_keys_function_keys) ausgelöst ([Firefox-Bug 968056](https://bugzil.la/968056)), außer für die <kbd>Enter</kbd>-Taste und die <kbd>Shift</kbd> + <kbd>Enter</kbd>- und <kbd>Ctrl</kbd> + <kbd>Enter</kbd>-Tastenkombinationen (diese wurden aus Gründen der Browser-Kompatibilität beibehalten).

## Siehe auch

- [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code).
- [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key).
- [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent/getModifierState)
