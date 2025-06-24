---
title: KeyboardEvent
slug: Web/API/KeyboardEvent
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("UI Events")}}

**`KeyboardEvent`**-Objekte beschreiben eine Benutzerinteraktion mit der Tastatur; jedes Event beschreibt eine einzelne Interaktion zwischen dem Benutzer und einer Taste (oder einer Kombination aus einer Taste mit Modifikatortasten) auf der Tastatur. Der Event-Typ ([`keydown`](/de/docs/Web/API/Element/keydown_event), [`keypress`](/de/docs/Web/API/Element/keypress_event) oder [`keyup`](/de/docs/Web/API/Element/keyup_event)) identifiziert, welche Art von Tastaturaktivität stattgefunden hat.

> [!NOTE] > `KeyboardEvent`-Ereignisse zeigen nur an, welche Interaktion der Benutzer auf einer Taste der Tastatur auf niedriger Ebene hatte, ohne dass dieser Interaktion eine kontextuelle Bedeutung zugewiesen wird. Wenn Sie Text eingeben müssen, verwenden Sie stattdessen das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis. Tastaturereignisse werden möglicherweise nicht ausgelöst, wenn der Benutzer eine alternative Methode zur Texteingabe verwendet, wie z.B. ein Handschreibsystem auf einem Tablet oder Grafiktablett.

{{InheritanceDiagram}}

## Konstruktor

- [`KeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/KeyboardEvent)
  - : Erstellt ein neues `KeyboardEvent`-Objekt.

## Konstanten

Das `KeyboardEvent`-Interface definiert die folgenden Konstanten.

### Tastaturlokationen

Die folgenden Konstanten identifizieren, von welchem Teil der Tastatur das Tastenereignis stammt. Sie werden als `KeyboardEvent.DOM_KEY_LOCATION_STANDARD` usw. aufgerufen.

<table class="standard-table">
  <caption>
    Identifier für Tastaturlokationen
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
          Die vom Ereignis beschriebene Taste wird nicht als in einem bestimmten Bereich der Tastatur befindlich identifiziert; sie befindet sich nicht auf dem numerischen Tastenfeld (es sei denn, es handelt sich um die NumLock-Taste), und für Tasten, die auf der linken und rechten Seite der Tastatur dupliziert sind, ist die Taste, aus welchen Gründen auch immer, nicht mit dieser Lokation zu assoziieren.
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
          Die Taste kann an mehreren Stellen auf der Tastatur vorhanden sein und befindet sich in diesem Fall auf der linken Seite der Tastatur.
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
          Die Taste kann an mehreren Stellen auf der Tastatur vorhanden sein und befindet sich in diesem Fall auf der rechten Seite der Tastatur.
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
          Die Taste befindet sich auf dem numerischen Tastenfeld, oder ist eine virtuelle Taste, die mit dem numerischen Tastenfeld verbunden ist, wenn es mehr als eine Stelle gibt, von der die Taste ausgehen könnte. Die NumLock-Taste gehört nicht zu dieser Gruppe und wird immer mit der Lokation <code>DOM_KEY_LOCATION_STANDARD</code> kodiert.
        </p>
        <p>
          Beispiele sind die Ziffern auf dem numerischen Tastenfeld, die Eingabetaste des Tastenfelds und der Dezimalpunkt auf dem Tastenfeld.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften seiner Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`KeyboardEvent.altKey`](/de/docs/Web/API/KeyboardEvent/altKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Alt</kbd> (<kbd>Option</kbd> oder <kbd>⌥</kbd> auf macOS) Taste aktiv war, als das Tastenereignis generiert wurde.

- [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) {{ReadOnlyInline}}

  - : Gibt einen String mit dem Codewert der physischen Taste zurück, die durch das Ereignis dargestellt wird.

    > [!WARNING]
    > Dies ignoriert das Tastaturlayout des Benutzers, sodass, wenn der Benutzer die Taste an der "Y"-Position in einem QWERTY-Tastaturlayout (nahe der Mitte der Zeile oberhalb der Grundzeile) drückt, immer "KeyY" zurückgegeben wird, selbst wenn der Benutzer eine QWERTZ-Tastatur hat (was bedeuten würde, dass der Benutzer ein "Z" erwartet und alle anderen Eigenschaften ein "Z" anzeigen würden) oder ein Dvorak-Tastaturlayout (wo der Benutzer ein "F" erwarten würde). Wenn Sie die richtigen Tastendrücke dem Benutzer anzeigen möchten, können Sie [`Keyboard.getLayoutMap()`](/de/docs/Web/API/Keyboard/getLayoutMap) verwenden.

- [`KeyboardEvent.ctrlKey`](/de/docs/Web/API/KeyboardEvent/ctrlKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Ctrl</kbd>-Taste aktiv war, als das Tastenereignis generiert wurde.

- [`KeyboardEvent.isComposing`](/de/docs/Web/API/KeyboardEvent/isComposing) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn das Ereignis zwischen `compositionstart` und `compositionend` ausgelöst wird.
- [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Tastenwert der durch das Ereignis dargestellten Taste repräsentiert.
- [`KeyboardEvent.location`](/de/docs/Web/API/KeyboardEvent/location) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Ort der Taste auf der Tastatur oder einem anderen Eingabegerät darstellt. Eine Liste der Konstanten zur Identifizierung der Lokationen ist oben in [Tastaturlokationen](#tastaturlokationen) gezeigt.
- [`KeyboardEvent.metaKey`](/de/docs/Web/API/KeyboardEvent/metaKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Meta</kbd>-Taste (auf Mac-Tastaturen die <kbd>⌘ Command</kbd>-Taste; auf Windows-Tastaturen die Windows-Taste (<kbd>⊞</kbd>)) aktiv war, als das Tastenereignis generiert wurde.

- [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die Taste so gehalten wird, dass sie automatisch wiederholt wird.
- [`KeyboardEvent.shiftKey`](/de/docs/Web/API/KeyboardEvent/shiftKey) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Shift</kbd>-Taste aktiv war, als das Tastenereignis generiert wurde.

### Veraltete Eigenschaften

- [`KeyboardEvent.charCode`](/de/docs/Web/API/KeyboardEvent/charCode) {{Deprecated_inline}} {{ReadOnlyInline}}

  - : Gibt eine Zahl zurück, die die Unicode-Referenznummer der Taste repräsentiert; diese Eigenschaft wird nur vom `keypress`-Ereignis verwendet. Für Tasten, deren `char`-Eigenschaft mehrere Zeichen enthält, ist dies der Unicode-Wert des ersten Zeichens in dieser Eigenschaft. In Firefox 26 gibt dies Codes für druckbare Zeichen zurück.

- [`KeyboardEvent.keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) {{deprecated_inline}} {{ReadOnlyInline}}

  - : Gibt eine Zahl zurück, die einen system- und implementierungsabhängigen numerischen Code darstellt, der den unmodifizierten Wert der gedrückten Taste identifiziert.

- [`KeyboardEvent.keyIdentifier`](/de/docs/Web/API/KeyboardEvent/keyIdentifier) {{Non-standard_inline}} {{deprecated_inline}} {{ReadOnlyInline}}
  - : Diese Eigenschaft ist nicht standardisiert und wurde zugunsten von [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) veraltet. Sie war Teil einer alten Version von DOM Level 3 Events.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden seiner Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent/getModifierState)
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob eine Modifikatortaste wie <kbd>Alt</kbd>, <kbd>Shift</kbd>, <kbd>Ctrl</kbd> oder <kbd>Meta</kbd> gedrückt war, als das Ereignis erstellt wurde.

### Veraltete Methoden

- [`KeyboardEvent.initKeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/initKeyboardEvent) {{deprecated_inline}}
  - : Initialisiert ein `KeyboardEvent`-Objekt. Dies ist jetzt veraltet. Stattdessen sollten Sie den [`KeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/KeyboardEvent)-Konstruktor verwenden.

## Ereignisse

Die folgenden Ereignisse basieren auf dem `KeyboardEvent`-Typ. In der untenstehenden Liste verlinkt jedes Ereignis auf die Dokumentation des `Element`-Handlers für das Ereignis, der im Allgemeinen für alle Empfänger gilt, einschließlich [`Element`](/de/docs/Web/API/Element), [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window).

- [`keydown`](/de/docs/Web/API/Element/keydown_event)
  - : Eine Taste wurde gedrückt.
- [`keyup`](/de/docs/Web/API/Element/keyup_event)
  - : Eine Taste wurde losgelassen.

### Veraltete Ereignisse

- [`keypress`](/de/docs/Web/API/Element/keypress_event) {{deprecated_inline}}
  - : Eine Taste, die normalerweise einen Zeichenwert erzeugt, wurde gedrückt. Dieses Ereignis war stark geräteabhängig und ist veraltet. Sie sollten es nicht verwenden.

## Nutzungshinweise

Es gibt drei Arten von Tastaturereignissen: [`keydown`](/de/docs/Web/API/Element/keydown_event), [`keypress`](/de/docs/Web/API/Element/keypress_event) und [`keyup`](/de/docs/Web/API/Element/keyup_event). Für die meisten Tasten sendet Gecko eine Sequenz von Tastenereignissen wie diese:

1. Wenn die Taste erstmals gedrückt wird, wird das `keydown`-Ereignis gesendet.
2. Wenn es sich nicht um eine Modifikatortaste handelt, wird das `keypress`-Ereignis gesendet.
3. Wenn der Benutzer die Taste loslässt, wird das `keyup`-Ereignis gesendet.

### Sonderfälle

Einige Tasten schalten den Status eines Anzeigelichts um; dazu gehören Tasten wie Feststelltaste, NumLock und ScrollLock. Unter Windows und Linux senden diese Tasten nur die `keydown`- und `keyup`-Ereignisse.

> [!NOTE]
> Unter Linux sendeten Firefox 12 und frühere Versionen auch das `keypress`-Ereignis für diese Tasten.

Eine Einschränkung des macOS-Ereignismodells bewirkt jedoch, dass Feststelltaste nur das `keydown`-Ereignis sendet. NumLock wurde auf einigen älteren Laptop-Modellen (2007 und älter) unterstützt, aber seitdem wird NumLock auf macOS auch nicht auf externen Tastaturen unterstützt. Auf älteren MacBooks mit einer NumLock-Taste erzeugt diese Taste keine Tastenereignisse. Gecko unterstützt die ScrollLock-Taste, wenn eine externe Tastatur mit einer F14-Taste angeschlossen ist. In bestimmten älteren Versionen von Firefox erzeugte diese Taste ein `keypress`-Ereignis; dieses inkonsistente Verhalten war [Firefox-Bug 602812](https://bugzil.la/602812).

### Behandlung von Auto-Repeat

Wenn eine Taste gedrückt und gehalten wird, beginnt sie sich automatisch zu wiederholen. Dies führt zu einer Sequenz von Ereignissen, die wie folgt gesendet werden:

1. `keydown`
2. `keypress`
3. `keydown`
4. `keypress`
5. <\<wiederholt sich, bis der Benutzer die Taste loslässt>>
6. `keyup`

Dies ist das, was die Spezifikation von DOM Level 3 verlangt. Es gibt jedoch einige Vorbehalte, wie unten beschrieben.

#### Auto-Repeat in einigen GTK-Umgebungen wie Ubuntu 9.4

In einigen GTK-basierten Umgebungen sendet Auto-Repeat ein nativen `keyup`-Ereignis automatisch während Auto-Repeat, und es gibt für Gecko keine Möglichkeit, den Unterschied zwischen einer wiederholten Reihe von Tastenanschlägen und einem Auto-Repeat zu wissen. Auf diesen Plattformen erzeugt dann eine Auto-Repeat-Taste die folgende Ereignissequenz:

1. `keydown`
2. `keypress`
3. `keyup`
4. `keydown`
5. `keypress`
6. `keyup`
7. <\<wiederholt sich, bis der Benutzer die Taste loslässt>>
8. `keyup`

In diesen Umgebungen gibt es leider keine Möglichkeit für Web-Inhalte, den Unterschied zwischen automatisch wiederholten Tasten und Tasten, die einfach nur wiederholt gedrückt werden, zu erkennen.

## Beispiel

```js
document.addEventListener(
  "keydown",
  (event) => {
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
  },
  false,
);

document.addEventListener(
  "keyup",
  (event) => {
    const keyName = event.key;

    // As the user releases the Ctrl key, the key is no longer active,
    // so event.ctrlKey is false.
    if (keyName === "Control") {
      alert("Control key was released");
    }
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

Die Spezifikation des `KeyboardEvent`-Interfaces hat zahlreiche Entwurfs-Versionen durchlaufen, zuerst unter DOM Events Level 2, wo sie fallengelassen wurde, da kein Konsens erzielt wurde, dann unter DOM Events Level 3. Dies führte zur Implementation nicht standardisierter Initialisierungsmethoden, der frühen DOM Events Level 2-Version, `KeyboardEvent.initKeyEvent()` durch Gecko-Browser und der frühen DOM Events Level 3-Version, [`KeyboardEvent.initKeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/initKeyboardEvent) durch andere. Beide wurden von der modernen Nutzung eines Konstruktors abgelöst: [`KeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/KeyboardEvent).

## Browser-Kompatibilität

{{Compat}}

### Kompatibilitätsnotizen

- Ab Firefox 65 wird das `keypress`-Ereignis nicht mehr für [nicht druckbare Tasten](/de/docs/Web/API/KeyboardEvent/keyCode#non-printable_keys_function_keys) ([Firefox-Bug 968056](https://bugzil.la/968056)) ausgelöst, außer für die <kbd>Enter</kbd>-Taste und die <kbd>Shift</kbd> + <kbd>Enter</kbd> und <kbd>Ctrl</kbd> + <kbd>Enter</kbd>-Kombinationen (diese blieben aus Gründen der plattformübergreifenden Kompatibilität erhalten).

## Siehe auch

- [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code).
- [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key).
- [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent/getModifierState)
