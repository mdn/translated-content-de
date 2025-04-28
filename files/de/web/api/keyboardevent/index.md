---
title: KeyboardEvent
slug: Web/API/KeyboardEvent
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{APIRef("UI Events")}}

**`KeyboardEvent`** Objekte beschreiben eine Benutzerinteraktion mit der Tastatur; jedes Ereignis beschreibt eine einzelne Interaktion zwischen dem Benutzer und einer Taste (oder einer Kombination einer Taste mit Modifikatortasten) auf der Tastatur. Der Ereignistyp ([`keydown`](/de/docs/Web/API/Element/keydown_event), [`keypress`](/de/docs/Web/API/Element/keypress_event) oder [`keyup`](/de/docs/Web/API/Element/keyup_event)) identifiziert, welche Art von Tastaturaktivität aufgetreten ist.

> **Note:** `KeyboardEvent`-Ereignisse zeigen nur an, welche Interaktion der Benutzer mit einer Taste auf der Tastatur auf niedriger Ebene hatte, ohne kontextuelle Bedeutung dieser Interaktion bereitzustellen. Wenn Sie Text eingaben behandeln müssen, verwenden Sie stattdessen das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis. Tastaturereignisse werden möglicherweise nicht ausgelöst, wenn der Benutzer eine alternative Methode zur Eingabe von Text verwendet, wie z.B. ein Handschrifterkennungssystem auf einem Tablet oder Grafik-Tablet.

{{InheritanceDiagram}}

## Konstruktor

- [`KeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/KeyboardEvent)
  - : Erstellt ein neues `KeyboardEvent`-Objekt.

## Konstanten

Das `KeyboardEvent`-Interface definiert die folgenden Konstanten.

### Tastaturanordnungen

Die folgenden Konstanten identifizieren, von welchem Teil der Tastatur das Tastenereignis stammt. Sie werden als `KeyboardEvent.DOM_KEY_LOCATION_STANDARD` usw. abgerufen.

<table class="standard-table">
  <caption>
    Tastaturstandort-Identifikatoren
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
          Die Taste, die durch das Ereignis beschrieben wird, ist nicht als in einem bestimmten Bereich der Tastatur lokalisiert identifiziert; sie befindet sich nicht auf dem Nummernblock (es sei denn, es ist die NumLock-Taste), und für Tasten, die auf der linken und rechten Seite der Tastatur dupliziert sind, ist die Taste aus irgendeinem Grund nicht mit diesem Standort zu assoziieren.
        </p>
        <p>
          Beispiele umfassen alphanumerische Tasten auf der Standard-PC-101-US-Tastatur, die NumLock-Taste und die Leertaste.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_LEFT</code></td>
      <td>0x01</td>
      <td>
        <p>
          Die Taste kann an mehreren Standorten auf der Tastatur existieren und befindet sich in diesem Fall auf der linken Seite der Tastatur.
        </p>
        <p>
          Beispiele umfassen die linke Steuerungstaste, die linke Befehlstaste auf einer Macintosh-Tastatur oder die linke Umschalttaste.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_RIGHT</code></td>
      <td>0x02</td>
      <td>
        <p>
          Die Taste kann an mehreren Positionen auf der Tastatur existieren und befindet sich in diesem Fall auf der rechten Seite der Tastatur.
        </p>
        <p>
          Beispiele umfassen die rechte Umschalttaste und die rechte Alt-Taste (Option auf einer Mac-Tastatur).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_NUMPAD</code></td>
      <td>0x03</td>
      <td>
        <p>
          Die Taste befindet sich auf dem Nummernblock oder ist eine virtuelle Taste, die mit dem Nummernblock assoziiert ist, wenn es mehr als eine Stelle gibt, von der die Taste stammen könnte. Die NumLock-Taste fällt nicht in diese Gruppe und wird immer mit der Lokation <code>DOM_KEY_LOCATION_STANDARD</code> kodiert.
        </p>
        <p>
          Beispiele beinhalten die Ziffern auf dem Nummernblock, die Enter-Taste des Nummernblocks und den Dezimalpunkt auf dem Nummernblock.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Instanzeigenschaften

_Dieses Interface erbt auch Eigenschaften seiner Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`KeyboardEvent.altKey`](/de/docs/Web/API/KeyboardEvent/altKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Alt</kbd>-Taste (<kbd>Option</kbd> oder <kbd>⌥</kbd> auf macOS) aktiv war, als das Tastenereignis generiert wurde.

- [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) {{ReadOnlyInline}}

  - : Gibt eine Zeichenkette mit dem Codewert der physischen Taste zurück, die durch das Ereignis dargestellt wird.

    > [!WARNING]
    > Dies ignoriert das Tastatur-Layout des Benutzers, sodass wenn der Benutzer die Taste an der "Y"-Position in einem QWERTY-Tastaturlayout drückt (nahe der Mitte der Reihe über der Home-Row), dies immer "KeyY" zurückgibt, selbst wenn der Benutzer eine QWERTZ-Tastatur hat (was bedeuten würde, dass der Benutzer ein "Z" erwartet und alle anderen Eigenschaften ein "Z" anzeigen würden) oder ein Dvorak-Tastaturlayout (wo der Benutzer ein "F" erwarten würde). Wenn Sie die richtigen Tastenanschläge für den Benutzer anzeigen möchten, können Sie [`Keyboard.getLayoutMap()`](/de/docs/Web/API/Keyboard/getLayoutMap) verwenden.

- [`KeyboardEvent.ctrlKey`](/de/docs/Web/API/KeyboardEvent/ctrlKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Ctrl</kbd>-Taste aktiv war, als das Tastenereignis generiert wurde.

- [`KeyboardEvent.isComposing`](/de/docs/Web/API/KeyboardEvent/isComposing) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn das Ereignis zwischen `compositionstart` und `compositionend` ausgelöst wird.
- [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die den Tastenwert der Taste darstellt, die durch das Ereignis repräsentiert wird.
- [`KeyboardEvent.location`](/de/docs/Web/API/KeyboardEvent/location) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Position der Taste auf der Tastatur oder einem anderen Eingabegerät darstellt. Eine Liste der Konstanten, die die Positionen identifizieren, wird oben im Abschnitt [Tastaturanordnungen](#tastaturanordnungen) angezeigt.
- [`KeyboardEvent.metaKey`](/de/docs/Web/API/KeyboardEvent/metaKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Meta</kbd>-Taste (auf Mac-Tastaturen die <kbd>⌘ Command</kbd>-Taste; auf Windows-Tastaturen die Windows-Taste (<kbd>⊞</kbd>)) aktiv war, als das Tastenereignis generiert wurde.

- [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die Taste gedrückt gehalten wird, sodass sie automatisch wiederholt wird.
- [`KeyboardEvent.shiftKey`](/de/docs/Web/API/KeyboardEvent/shiftKey) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Shift</kbd>-Taste aktiv war, als das Tastenereignis generiert wurde.

### Veraltete Eigenschaften

- [`KeyboardEvent.charCode`](/de/docs/Web/API/KeyboardEvent/charCode) {{Deprecated_inline}} {{ReadOnlyInline}}

  - : Gibt eine Zahl zurück, die die Unicode-Referenznummer der Taste repräsentiert; diese Eigenschaft wird nur durch das `keypress`-Ereignis verwendet. Für Tasten, deren `char`-Eigenschaft mehrere Zeichen enthält, ist dies der Unicode-Wert des ersten Zeichens in dieser Eigenschaft. In Firefox 26 gibt dies die Codes für druckbare Zeichen zurück.

- [`KeyboardEvent.keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) {{deprecated_inline}} {{ReadOnlyInline}}

  - : Gibt eine Zahl zurück, die einen system- und implementierungsabhängigen numerischen Code darstellt, der den unveränderten Wert der gedrückten Taste identifiziert.

- [`KeyboardEvent.keyIdentifier`](/de/docs/Web/API/KeyboardEvent/keyIdentifier) {{Non-standard_inline}} {{deprecated_inline}} {{ReadOnlyInline}}
  - : Diese Eigenschaft ist nicht standardisiert und wurde zugunsten von [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) veraltet. Sie war Teil einer alten Version der DOM Level 3 Events.

## Instanzmethoden

_Dieses Interface erbt auch Methoden seiner Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent/getModifierState)
  - : Gibt einen booleschen Wert zurück, der angibt, ob eine Modifikatortaste wie <kbd>Alt</kbd>, <kbd>Shift</kbd>, <kbd>Ctrl</kbd> oder <kbd>Meta</kbd> gedrückt war, als das Ereignis erstellt wurde.

### Veraltete Methoden

- [`KeyboardEvent.initKeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/initKeyboardEvent) {{deprecated_inline}}
  - : Initialisiert ein `KeyboardEvent`-Objekt. Diese Methode ist jetzt veraltet. Sie sollten stattdessen den [`KeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/KeyboardEvent)-Konstruktor verwenden.

## Ereignisse

Die folgenden Ereignisse basieren auf dem `KeyboardEvent`-Typ. In der Liste unten verlinkt jedes Ereignis auf die Dokumentation für den `Element`-Handler des Ereignisses, der allgemein für alle Empfänger gilt, einschließlich [`Element`](/de/docs/Web/API/Element), [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window).

- [`keydown`](/de/docs/Web/API/Element/keydown_event)
  - : Eine Taste wurde gedrückt.
- [`keyup`](/de/docs/Web/API/Element/keyup_event)
  - : Eine Taste wurde losgelassen.

### Veraltete Ereignisse

- [`keypress`](/de/docs/Web/API/Element/keypress_event) {{deprecated_inline}}
  - : Eine Taste, die normalerweise einen Zeichenwert erzeugt, wurde gedrückt. Dieses Ereignis war stark geräteabhängig und ist veraltet. Sie sollten es nicht verwenden.

## Nutzungshinweise

Es gibt drei Arten von Tastaturereignissen: [`keydown`](/de/docs/Web/API/Element/keydown_event), [`keypress`](/de/docs/Web/API/Element/keypress_event) und [`keyup`](/de/docs/Web/API/Element/keyup_event). Für die meisten Tasten sendet Gecko eine Sequenz von Tastenereignissen wie folgt:

1. Wenn die Taste zuerst gedrückt wird, wird das `keydown`-Ereignis gesendet.
2. Wenn die Taste keine Modifikatortaste ist, wird das `keypress`-Ereignis gesendet.
3. Wenn der Benutzer die Taste loslässt, wird das `keyup`-Ereignis gesendet.

### Sonderfälle

Einige Tasten schalten den Zustand einer Anzeigelampe um; dazu gehören Tasten wie Feststelltaste, Num-Taste und Bildlaufsperre. Unter Windows und Linux lösen diese Tasten nur die `keydown`- und `keyup`-Ereignisse aus.

> [!NOTE]
> Unter Linux löste Firefox 12 und früher auch das `keypress`-Ereignis für diese Tasten aus.

Jedoch verursacht eine Einschränkung des macOS-Ereignismodells, dass die Feststelltaste nur das `keydown`-Ereignis auslöst. Die Num-Taste wurde auf einigen älteren Laptop-Modellen (Modelle von 2007 und früher) unterstützt, aber seitdem hat macOS keine Unterstützung für die Num-Taste, selbst auf externen Tastaturen. Auf älteren MacBooks mit einer Num-Taste erzeugt diese Taste keine Tastenereignisse. Gecko unterstützt die Bildlaufsperre-Taste, wenn eine externe Tastatur angeschlossen ist, die eine F14-Taste hat. In bestimmten älteren Versionen von Firefox erzeugte diese Taste ein `keypress`-Ereignis; dieses inkonsistente Verhalten war [Firefox-Bug 602812](https://bugzil.la/602812).

### Automatische Wiederholverarbeitung

Wenn eine Taste gedrückt und gehalten wird, beginnt sie, sich automatisch zu wiederholen. Dies führt dazu, dass eine Ereignissequenz ähnlich der folgenden ausgelöst wird:

1. `keydown`
2. `keypress`
3. `keydown`
4. `keypress`
5. <\<wiederholend, bis der Benutzer die Taste loslässt>>
6. `keyup`

Dies ist, was die DOM-Level-3-Spezifikation besagt, dass passieren sollte. Es gibt jedoch einige Einschränkungen, wie unten beschrieben.

#### Automatische Wiederholung in einigen GTK-Umgebungen wie Ubuntu 9.4

In einigen auf GTK basierenden Umgebungen löst die automatische Wiederholung ein natives `key-up`-Ereignis automatisch während der automatischen Wiederholung aus, und es gibt keine Möglichkeit für Gecko, den Unterschied zwischen einer wiederholten Serie von Tastendrücken und einer automatischen Wiederholung zu erkennen. Auf diesen Plattformen erzeugt dann eine automatisch wiederholte Taste die folgende Ereignissequenz:

1. `keydown`
2. `keypress`
3. `keyup`
4. `keydown`
5. `keypress`
6. `keyup`
7. <\<wiederholend, bis der Benutzer die Taste loslässt>>
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

Die Spezifikation der `KeyboardEvent`-Schnittstelle durchlief zahlreiche Entwurfsversionen, zunächst unter DOM Events Level 2, wo sie fallengelassen wurde, da kein Konsens erzielt wurde, dann unter DOM Events Level 3. Dies führte zur Implementierung nicht standardisierter Initialisierungsmethoden, der frühen DOM Events Level 2-Version, `KeyboardEvent.initKeyEvent()` durch Gecko-Browser und der frühen DOM Events Level 3-Version, [`KeyboardEvent.initKeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/initKeyboardEvent) durch andere. Beide wurden durch die moderne Verwendung eines Konstruktors, [`KeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/KeyboardEvent), ersetzt.

## Browser-Kompatibilität

{{Compat}}

### Kompatibilitätsnotizen

- Ab Firefox 65 wird das `keypress`-Ereignis nicht mehr für [nicht druckbare Tasten](/de/docs/Web/API/KeyboardEvent/keyCode#non-printable_keys_function_keys) ([Firefox-Bug 968056](https://bugzil.la/968056)) ausgelöst, mit Ausnahme der <kbd>Enter</kbd>-Taste und der Tastenkombinationen <kbd>Shift</kbd> + <kbd>Enter</kbd> und <kbd>Ctrl</kbd> + <kbd>Enter</kbd> (diese wurden zur Wahrung der Browser-Kompatibilität beibehalten).

## Siehe auch

- [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code).
- [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key).
- [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent/getModifierState)
