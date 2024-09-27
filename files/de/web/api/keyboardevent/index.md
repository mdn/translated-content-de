---
title: KeyboardEvent
slug: Web/API/KeyboardEvent
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("UI Events")}}

**`KeyboardEvent`**-Objekte beschreiben eine Benutzerinteraktion mit der Tastatur; jedes Event beschreibt eine einzelne Interaktion zwischen dem Benutzer und einer Taste (oder einer Kombination aus einer Taste mit Modifikatortasten) auf der Tastatur. Der Ereignistyp ([`keydown`](/de/docs/Web/API/Element/keydown_event), [`keypress`](/de/docs/Web/API/Element/keypress_event) oder [`keyup`](/de/docs/Web/API/Element/keyup_event)) gibt an, welche Art von Tastaturaktivität stattgefunden hat.

> **Note:** `KeyboardEvent`-Ereignisse zeigen nur an, welche Interaktion der Benutzer auf niedriger Ebene mit einer Taste auf der Tastatur hatte, ohne kontextuelle Bedeutung für diese Interaktion bereitzustellen. Wenn Sie Texteingaben verarbeiten müssen, sollten Sie stattdessen das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis verwenden. Tastaturereignisse werden möglicherweise nicht ausgelöst, wenn der Benutzer alternative Mittel zur Texteingabe verwendet, wie ein Handschriftensystem auf einem Tablet oder Grafiktablett.

{{InheritanceDiagram}}

## Konstruktor

- [`KeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/KeyboardEvent)
  - : Erstellt ein neues `KeyboardEvent`-Objekt.

## Konstanten

Das `KeyboardEvent`-Interface definiert die folgenden Konstanten.

### Keyboard-Lokationen

Die folgenden Konstanten identifizieren, von welchem Teil der Tastatur das Tastenereignis stammt. Sie werden beispielsweise als `KeyboardEvent.DOM_KEY_LOCATION_STANDARD` aufgerufen.

<table class="standard-table">
  <caption>
    Identifikatoren für Tastaturlokationen
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
          Die durch das Event beschriebene Taste ist nicht einer bestimmten Position auf der Tastatur zugeordnet; sie befindet sich nicht auf dem Ziffernblock (es sei denn, es ist die NumLock-Taste) und für Tasten, die sowohl auf der linken als auch auf der rechten Seite der Tastatur vorhanden sind, wird die Taste aus welchem Grund auch immer nicht mit dieser Position assoziiert.
        </p>
        <p>
          Beispiele sind alphanumerische Tasten auf der standardmäßigen PC 101 US-Tastatur, die NumLock-Taste und die Leertaste.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_LEFT</code></td>
      <td>0x01</td>
      <td>
        <p>
          Die Taste befindet sich an einem möglichen von mehreren Orten auf der Tastatur und in diesem Fall auf der linken Seite der Tastatur.
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
          Die Taste befindet sich an einem möglichen von mehreren Orten auf der Tastatur und in diesem Fall auf der rechten Seite der Tastatur.
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
          Die Taste befindet sich auf dem Ziffernblock oder ist eine virtuelle Taste, die mit dem Ziffernblock assoziiert ist, wenn es mehr als einen Ursprungsort für die Taste geben könnte. Die NumLock-Taste fällt nicht in diese Gruppe und wird immer mit der Position <code>DOM_KEY_LOCATION_STANDARD</code> kodiert.
        </p>
        <p>
          Beispiele sind die Ziffern auf dem Ziffernblock, die Eingabetaste des Ziffernblocks und der Dezimalpunkt auf dem Ziffernblock.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Instanzeigenschaften

_Dieses Interface erbt auch Eigenschaften seiner Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`KeyboardEvent.altKey`](/de/docs/Web/API/KeyboardEvent/altKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Alt</kbd> (<kbd>Option</kbd> oder <kbd>⌥</kbd> auf macOS) Taste aktiv war, als das Tastenereignis erzeugt wurde.

- [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) {{ReadOnlyInline}}

  - : Gibt einen String mit dem Code-Wert der physischen Taste zurück, die durch das Ereignis repräsentiert wird.

    > [!WARNING]
    > Dies ignoriert das Tastaturlayout des Benutzers, sodass, wenn der Benutzer die Taste an der "Y"-Position in einem QWERTY-Tastaturlayout drückt (nahe der Mitte der Reihe über der Grundreihe), dies immer "KeyY" zurückgibt, selbst wenn der Benutzer eine QWERTZ-Tastatur hat (was bedeuten würde, dass der Benutzer ein "Z" erwartet und alle anderen Eigenschaften ein "Z" anzeigen würden) oder ein Dvorak-Tastaturlayout (wo der Benutzer ein "F" erwarten würde). Wenn Sie dem Benutzer die korrekten Tastenanschläge anzeigen möchten, können Sie [`Keyboard.getLayoutMap()`](/de/docs/Web/API/Keyboard/getLayoutMap) verwenden.

- [`KeyboardEvent.ctrlKey`](/de/docs/Web/API/KeyboardEvent/ctrlKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Ctrl</kbd> Taste aktiv war, als das Tastenereignis erzeugt wurde.

- [`KeyboardEvent.isComposing`](/de/docs/Web/API/KeyboardEvent/isComposing) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn das Ereignis zwischen `compositionstart` und `compositionend` ausgelöst wird.
- [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Tastenwert der durch das Ereignis repräsentierten Taste darstellt.
- [`KeyboardEvent.location`](/de/docs/Web/API/KeyboardEvent/location) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Position der Taste auf der Tastatur oder einem anderen Eingabegerät darstellt. Eine Liste der Konstanten, die die Positionen identifizieren, wird oben in [Keyboard-Lokationen](#keyboard-lokationen) angezeigt.
- [`KeyboardEvent.metaKey`](/de/docs/Web/API/KeyboardEvent/metaKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Meta</kbd> Taste (auf Mac-Tastaturen die <kbd>⌘ Command</kbd>-Taste; auf Windows-Tastaturen die Windows-Taste (<kbd>⊞</kbd>)) aktiv war, als das Tastenereignis erzeugt wurde.

- [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die Taste so gehalten wird, dass sie automatisch wiederholt wird.
- [`KeyboardEvent.shiftKey`](/de/docs/Web/API/KeyboardEvent/shiftKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Shift</kbd> Taste aktiv war, als das Tastenereignis erzeugt wurde.

### Veraltete Eigenschaften

- [`KeyboardEvent.charCode`](/de/docs/Web/API/KeyboardEvent/charCode) {{Deprecated_inline}} {{ReadOnlyInline}}

  - : Gibt eine Zahl zurück, die die Unicode-Referenznummer der Taste darstellt; diese Eigenschaft wird nur vom `keypress` Ereignis verwendet. Für Tasten, deren `char`-Eigenschaft mehrere Zeichen enthält, ist dies der Unicode-Wert des ersten Zeichens in dieser Eigenschaft. In Firefox 26 gibt dies Codes für druckbare Zeichen zurück.

- [`KeyboardEvent.keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) {{deprecated_inline}} {{ReadOnlyInline}}

  - : Gibt eine Zahl zurück, die einen system- und implementierungsabhängigen numerischen Code darstellt, der den unveränderten Wert der gedrückten Taste identifiziert.

- [`KeyboardEvent.keyIdentifier`](/de/docs/Web/API/KeyboardEvent/keyIdentifier) {{Non-standard_inline}} {{deprecated_inline}} {{ReadOnlyInline}}
  - : Diese Eigenschaft ist nicht standardisiert und wurde zugunsten von [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) veraltet. Sie war Teil einer alten Version von DOM Level 3 Events.

## Instanzmethoden

_Dieses Interface erbt auch Methoden seiner Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent/getModifierState)

  - : Gibt einen booleschen Wert zurück, der anzeigt, ob eine Modifikator-Taste wie <kbd>Alt</kbd>, <kbd>Shift</kbd>, <kbd>Ctrl</kbd> oder <kbd>Meta</kbd> gedrückt war, als das Ereignis erstellt wurde.

### Veraltete Methoden

- [`KeyboardEvent.initKeyEvent()`](/de/docs/Web/API/KeyboardEvent/initKeyEvent) {{deprecated_inline}}
  - : Initialisiert ein `KeyboardEvent`-Objekt. Dies wurde nur von Firefox implementiert und wird dort nicht mehr unterstützt; stattdessen sollten Sie den [`KeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/KeyboardEvent)-Konstruktor verwenden.
- [`KeyboardEvent.initKeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/initKeyboardEvent) {{deprecated_inline}}
  - : Initialisiert ein `KeyboardEvent`-Objekt. Dies ist jetzt veraltet. Stattdessen sollten Sie den [`KeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/KeyboardEvent)-Konstruktor verwenden.

## Ereignisse

Die folgenden Ereignisse basieren auf dem `KeyboardEvent`-Typ. In der untenstehenden Liste verlinkt jedes Ereignis auf die Dokumentation des `Element`-Handlers für das Ereignis, welcher im Allgemeinen auf alle Empfänger wie [`Element`](/de/docs/Web/API/Element), [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) zutrifft.

- [`keydown`](/de/docs/Web/API/Element/keydown_event)
  - : Eine Taste wurde gedrückt.
- [`keyup`](/de/docs/Web/API/Element/keyup_event)
  - : Eine Taste wurde losgelassen.

### Veraltete Ereignisse

- [`keypress`](/de/docs/Web/API/Element/keypress_event) {{deprecated_inline}}
  - : Eine Taste, die normalerweise einen Zeichenwert erzeugt, wurde gedrückt. Dieses Ereignis war stark geräteabhängig und ist veraltet. Sie sollten es nicht verwenden.

## Verwendungshinweise

Es gibt drei Arten von Tastaturereignissen: [`keydown`](/de/docs/Web/API/Element/keydown_event), [`keypress`](/de/docs/Web/API/Element/keypress_event), und [`keyup`](/de/docs/Web/API/Element/keyup_event). Für die meisten Tasten sendet Gecko eine Sequenz von Tastaturereignissen wie folgt:

1. Wenn die Taste erstmals gedrückt wird, wird das `keydown`-Ereignis gesendet.
2. Wenn die Taste keine Modifikatortaste ist, wird das `keypress`-Ereignis gesendet.
3. Wenn der Benutzer die Taste loslässt, wird das `keyup`-Ereignis gesendet.

### Sonderfälle

Einige Tasten schalten den Status einer Anzeigelampe um; dazu gehören Tasten wie Caps Lock, Num Lock und Scroll Lock. Unter Windows und Linux senden diese Tasten nur die `keydown`- und `keyup`-Ereignisse.

> [!NOTE]
> Unter Linux, bis Version 12 von Firefox, wurde auch das `keypress`-Ereignis für diese Tasten ausgelöst.

Jedoch führt eine Einschränkung des macOS-Ereignismodells dazu, dass Caps Lock nur das `keydown`-Ereignis auslöst. Num Lock wurde auf einigen älteren Laptop-Modellen (Modelle von 2007 und älter) unterstützt, aber seitdem wird Num Lock auf macOS nicht mehr unterstützt, selbst nicht auf externen Tastaturen. Auf älteren MacBooks mit einer Num Lock-Taste erzeugt diese Taste keine Tastaturereignisse. Gecko unterstützt die Scroll Lock-Taste, wenn eine externe Tastatur mit einer F14-Taste verbunden ist. In bestimmten älteren Versionen von Firefox erzeugte diese Taste ein `keypress`-Ereignis; dieses inkonsistente Verhalten wurde als [Firefox-Bug 602812](https://bugzil.la/602812) aufgezeichnet.

### Behandlung der automatischen Wiederholung

Wenn eine Taste gedrückt und gehalten wird, beginnt sie, automatisch zu wiederholen. Dies führt dazu, dass eine Ereignissequenz ähnlich der folgenden ausgelöst wird:

1. `keydown`
2. `keypress`
3. `keydown`
4. `keypress`
5. <\<Wiederholung, bis der Benutzer die Taste loslässt>>
6. `keyup`

Dies ist das Verhalten, das in der DOM Level 3-Spezifikation beschrieben wird. Es gibt jedoch einige Vorbehalte, wie unten beschrieben.

#### Automatische Wiederholung in einigen GTK-Umgebungen wie Ubuntu 9.4

In einigen GTK-basierten Umgebungen löst die automatische Wiederholung während der automatischen Wiederholung ein nativen Key-Up-Ereignis automatisch aus, und es gibt keine Möglichkeit für Gecko, den Unterschied zwischen einer wiederholten Serie von Tastendrücken und einer automatischen Wiederholung zu erkennen. Auf diesen Plattformen erzeugt eine automatisch wiederholte Taste daher die folgende Sequenz von Ereignissen:

1. `keydown`
2. `keypress`
3. `keyup`
4. `keydown`
5. `keypress`
6. `keyup`
7. <\<Wiederholung, bis der Benutzer die Taste loslässt>>
8. `keyup`

In diesen Umgebungen gibt es leider keine Möglichkeit für Webinhalte, den Unterschied zwischen automatisch wiederholten Tasten und Tasten, die einfach wiederholt gedrückt werden, zu erkennen.

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

Die Spezifikation der `KeyboardEvent`-Schnittstelle durchlief zahlreiche Entwurfsstadien, zunächst unter DOM Events Level 2, wo sie fallen gelassen wurde, da kein Konsens erzielt wurde, dann unter DOM Events Level 3. Dies führte zur Implementierung von nicht standardkonformen Initialisierungsmethoden, der frühen DOM Events Level 2-Version [`KeyboardEvent.initKeyEvent()`](/de/docs/Web/API/KeyboardEvent/initKeyEvent) durch Gecko-Browser und der frühen DOM Events Level 3-Version [`KeyboardEvent.initKeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/initKeyboardEvent) durch andere. Beide wurden durch die moderne Verwendung eines Konstruktors ersetzt: [`KeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/KeyboardEvent).

## Browser-Kompatibilität

{{Compat}}

### Kompatibilitätsnotizen

- Ab Firefox 65 wird das `keypress`-Ereignis nicht mehr für [nicht druckbare Tasten](/de/docs/Web/API/KeyboardEvent/keyCode#non-printable_keys_function_keys) ([Firefox-Bug 968056](https://bugzil.la/968056)) ausgelöst, mit Ausnahme der

  <kbd>Enter</kbd>

  -Taste und der

  <kbd>Shift</kbd>

  \+

  <kbd>Enter</kbd>

  und

  <kbd>Ctrl</kbd>

  \+

  <kbd>Enter</kbd>

  Tasten-Kombinationen (diese wurden aus Gründen der plattformübergreifenden Kompatibilität beibehalten).

## Siehe auch

- [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code).
- [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key).
- [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent/getModifierState)
