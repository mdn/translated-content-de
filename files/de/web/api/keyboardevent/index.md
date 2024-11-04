---
title: KeyboardEvent
slug: Web/API/KeyboardEvent
l10n:
  sourceCommit: b7a7c441fa025458f2bf67d714c3303085e8258a
---

{{APIRef("UI Events")}}

**`KeyboardEvent`** Objekte beschreiben eine Benutzerinteraktion mit der Tastatur; jedes Ereignis beschreibt eine einzelne Interaktion zwischen dem Benutzer und einer Taste (oder einer Kombination einer Taste mit Modifikatortasten) auf der Tastatur. Der Ereignistyp ([`keydown`](/de/docs/Web/API/Element/keydown_event), [`keypress`](/de/docs/Web/API/Element/keypress_event) oder [`keyup`](/de/docs/Web/API/Element/keyup_event)) identifiziert, welche Art von Tastaturaktivität stattgefunden hat.

> **Hinweis:** `KeyboardEvent`-Ereignisse zeigen nur, welche Interaktion der Benutzer auf niedriger Ebene mit einer Taste auf der Tastatur hatte, ohne der Interaktion eine kontextuelle Bedeutung zu geben. Wenn Sie Texteingaben behandeln müssen, verwenden Sie stattdessen das [`input`](/de/docs/Web/API/Element/input_event) Ereignis. Tastaturereignisse werden möglicherweise nicht ausgelöst, wenn der Benutzer eine alternative Methode zur Texteingabe verwendet, wie z. B. ein Handschrifterkennungssystem auf einem Tablet oder Grafiktablett.

{{InheritanceDiagram}}

## Konstruktor

- [`KeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/KeyboardEvent)
  - : Erstellt ein neues `KeyboardEvent`-Objekt.

## Konstanten

Das `KeyboardEvent`-Interface definiert die folgenden Konstanten.

### Tastaturlokationen

Die folgenden Konstanten identifizieren, aus welchem Bereich der Tastatur das Tastenereignis stammt. Sie werden als `KeyboardEvent.DOM_KEY_LOCATION_STANDARD` usw. abgerufen.

<table class="standard-table">
  <caption>
    Tastaturlokation-Identifikatoren
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
          Die durch das Ereignis beschriebene Taste wird nicht als in einem bestimmten Bereich der Tastatur befindlich identifiziert; sie befindet sich nicht auf dem Nummernblock (es sei denn, es handelt sich um die NumLock-Taste), und für Tasten, die auf der linken und rechten Seite der Tastatur dupliziert sind, ist die Taste aus irgendeinem Grund nicht mit dieser Position zu assoziieren.
        </p>
        <p>
          Beispiele sind alphanumerische Tasten auf der Standard-PC 101 US-Tastatur, die NumLock-Taste und die Leertaste.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_LEFT</code></td>
      <td>0x01</td>
      <td>
        <p>
          Die Taste kann an mehreren Positionen auf der Tastatur existieren und befindet sich in diesem Fall auf der linken Seite der Tastatur.
        </p>
        <p>
          Beispiele sind die linke Strg-Taste, die linke Befehlstaste auf einer Mac-Tastatur oder die linke Umschalttaste.
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
          Beispiele sind die rechte Umschalttaste und die rechte Alt-Taste (Option auf einer Mac-Tastatur).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_NUMPAD</code></td>
      <td>0x03</td>
      <td>
        <p>
          Die Taste befindet sich auf dem Nummernblock oder ist eine virtuelle Taste, die mit dem Nummernblock assoziiert ist, wenn es mehr als eine Position gibt, von der die Taste stammen könnte. Die NumLock-Taste gehört nicht zu dieser Gruppe und wird immer mit der Position <code>DOM_KEY_LOCATION_STANDARD</code> codiert.
        </p>
        <p>
          Beispiele sind die Ziffern auf dem Nummernblock, die Eingabetaste des Nummernblocks und der Dezimalpunkt auf dem Nummernblock.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften seiner Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`KeyboardEvent.altKey`](/de/docs/Web/API/KeyboardEvent/altKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Alt</kbd>-Taste (<kbd>Option</kbd> oder <kbd>⌥</kbd> auf macOS) aktiv war, als das Tastenereignis generiert wurde.

- [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) {{ReadOnlyInline}}

  - : Gibt einen String mit dem Codewert der durch das Ereignis dargestellten physischen Taste zurück.

    > [!WARNING]
    > Dies ignoriert das Tastaturlayout des Benutzers, sodass, wenn der Benutzer die Taste an der "Y"-Position in einem QWERTY-Tastaturlayout (in der Nähe der Mitte der Reihe über der Grundreihe) drückt, dies immer "KeyY" zurückgibt, selbst wenn der Benutzer eine QWERTZ-Tastatur hat (was bedeuten würde, dass der Benutzer ein "Z" erwartet und alle anderen Eigenschaften ein "Z" anzeigen würden) oder ein Dvorak-Tastaturlayout (wo der Benutzer ein "F" erwarten würde). Wenn Sie die korrekten Tastenanschläge dem Benutzer anzeigen möchten, können Sie [`Keyboard.getLayoutMap()`](/de/docs/Web/API/Keyboard/getLayoutMap) verwenden.

- [`KeyboardEvent.ctrlKey`](/de/docs/Web/API/KeyboardEvent/ctrlKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Strg</kbd>-Taste aktiv war, als das Tastenereignis generiert wurde.

- [`KeyboardEvent.isComposing`](/de/docs/Web/API/KeyboardEvent/isComposing) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn das Ereignis zwischen `compositionstart` und `compositionend` ausgelöst wird.
- [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Tastenwert der durch das Ereignis dargestellten Taste darstellt.
- [`KeyboardEvent.location`](/de/docs/Web/API/KeyboardEvent/location) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Ort der Taste auf der Tastatur oder einem anderen Eingabegerät darstellt. Eine Liste der Konstanten, die die Standorte identifizieren, wird oben unter [Tastaturlokationen](#tastaturlokationen) gezeigt.
- [`KeyboardEvent.metaKey`](/de/docs/Web/API/KeyboardEvent/metaKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Meta</kbd>-Taste (auf Mac-Tastaturen die <kbd>⌘ Befehlstaste</kbd>; auf Windows-Tastaturen die Windows-Taste (<kbd>⊞</kbd>)) aktiv war, als das Tastenereignis generiert wurde.

- [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die Taste gedrückt gehalten wird, sodass sie sich automatisch wiederholt.
- [`KeyboardEvent.shiftKey`](/de/docs/Web/API/KeyboardEvent/shiftKey) {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Shift</kbd>-Taste aktiv war, als das Tastenereignis generiert wurde.

### Veraltete Eigenschaften

- [`KeyboardEvent.charCode`](/de/docs/Web/API/KeyboardEvent/charCode) {{Deprecated_inline}} {{ReadOnlyInline}}

  - : Gibt eine Zahl zurück, die die Unicode-Referenznummer der Taste darstellt; diese Eigenschaft wird nur von dem `keypress`-Ereignis verwendet. Bei Tasten, deren `char`-Eigenschaft mehrere Zeichen enthält, ist dies der Unicode-Wert des ersten Zeichens in dieser Eigenschaft. In Firefox 26 werden dadurch Codes für druckbare Zeichen zurückgegeben.

- [`KeyboardEvent.keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) {{deprecated_inline}} {{ReadOnlyInline}}

  - : Gibt eine Zahl zurück, die einen system- und implementierungsabhängigen numerischen Code darstellt, der den unveränderten Wert der gedrückten Taste identifiziert.

- [`KeyboardEvent.keyIdentifier`](/de/docs/Web/API/KeyboardEvent/keyIdentifier) {{Non-standard_inline}} {{deprecated_inline}} {{ReadOnlyInline}}
  - : Diese Eigenschaft ist nicht standardisiert und wurde zugunsten von [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) veraltet. Sie war Teil einer alten Version von DOM Level 3 Events.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden seiner Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent/getModifierState)

  - : Gibt einen booleschen Wert zurück, der anzeigt, ob eine Modifikatortaste wie <kbd>Alt</kbd>, <kbd>Shift</kbd>, <kbd>Strg</kbd> oder <kbd>Meta</kbd> gedrückt war, als das Ereignis erstellt wurde.

### Veraltete Methoden

- [`KeyboardEvent.initKeyEvent()`](/de/docs/Web/API/KeyboardEvent/initKeyEvent) {{deprecated_inline}}
  - : Initialisiert ein `KeyboardEvent`-Objekt. Dies wurde nur von Firefox implementiert und wird auch dort nicht mehr unterstützt; stattdessen sollten Sie den [`KeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/KeyboardEvent) Konstruktor verwenden.
- [`KeyboardEvent.initKeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/initKeyboardEvent) {{deprecated_inline}}
  - : Initialisiert ein `KeyboardEvent`-Objekt. Dies ist jetzt veraltet. Sie sollten stattdessen den [`KeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/KeyboardEvent) Konstruktor verwenden.

## Ereignisse

Die folgenden Ereignisse basieren auf dem `KeyboardEvent`-Typ. In der Liste unten verlinkt jedes Ereignis zur Dokumentation für den `Element`-Handler für das Ereignis, das allgemein auf alle Empfänger, einschließlich [`Element`](/de/docs/Web/API/Element), [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window), zutrifft.

- [`keydown`](/de/docs/Web/API/Element/keydown_event)
  - : Eine Taste wurde gedrückt.
- [`keyup`](/de/docs/Web/API/Element/keyup_event)
  - : Eine Taste wurde losgelassen.

### Veraltete Ereignisse

- [`keypress`](/de/docs/Web/API/Element/keypress_event) {{deprecated_inline}}
  - : Eine Taste, die normalerweise einen Zeichenwert erzeugt, wurde gedrückt. Dieses Ereignis war stark geräteabhängig und ist veraltet. Sie sollten es nicht verwenden.

## Nutzungshinweise

Es gibt drei Arten von Tastaturereignissen: [`keydown`](/de/docs/Web/API/Element/keydown_event), [`keypress`](/de/docs/Web/API/Element/keypress_event) und [`keyup`](/de/docs/Web/API/Element/keyup_event). Für die meisten Tasten löst Gecko eine Sequenz von Tastenereignissen wie folgt aus:

1. Wenn die Taste zuerst gedrückt wird, wird das `keydown`-Ereignis gesendet.
2. Wenn die Taste keine Modifikatortaste ist, wird das `keypress`-Ereignis gesendet.
3. Wenn der Benutzer die Taste loslässt, wird das `keyup`-Ereignis gesendet.

### Sonderfälle

Einige Tasten schalten den Status eines Anzeigelichts um; dazu gehören Tasten wie Caps Lock, Num Lock und Scroll Lock. Unter Windows und Linux lösen diese Tasten nur die `keydown`- und `keyup`-Ereignisse aus.

> [!NOTE]
> Unter Linux löste Firefox 12 und früher auch das `keypress`-Ereignis für diese Tasten aus.

Ein Problem des macOS-Ereignismodells führt jedoch dazu, dass Caps Lock nur das `keydown`-Ereignis auslöst. Num Lock wurde auf einigen älteren Laptop-Modellen (Modelle von 2007 und älter) unterstützt, aber seitdem unterstützt macOS Num Lock nicht mehr, selbst auf externen Tastaturen. Auf älteren MacBooks mit einer Num Lock-Taste erzeugt diese keine Tastenereignisse. Gecko unterstützt die Scroll-Lock-Taste, wenn eine externe Tastatur mit einer F14-Taste angeschlossen ist. In bestimmten älteren Versionen von Firefox erzeugte diese Taste ein `keypress`-Ereignis; dieses inkonsistente Verhalten war [Firefox-Bug 602812](https://bugzil.la/602812).

### Auto-Repeat-Handhabung

Wenn eine Taste gedrückt und gehalten wird, beginnt sie, sich automatisch zu wiederholen. Dies führt zur Auslösung einer Ereignissequenz wie folgt:

1. `keydown`
2. `keypress`
3. `keydown`
4. `keypress`
5. <\<wiederholt sich, bis der Benutzer die Taste loslässt>>
6. `keyup`

Dies ist das, was die DOM Level 3-Spezifikation verlangt. Es gibt jedoch einige Einschränkungen, wie unten beschrieben.

#### Auto-Repeat in bestimmten GTK-Umgebungen wie Ubuntu 9.4

In einigen GTK-basierten Umgebungen löst Auto-Repeat ein natives Key-Up-Ereignis automatisch während des Auto-Repeats aus, und es gibt keine Möglichkeit für Gecko, den Unterschied zwischen einer wiederholten Serie von Tastenanschlägen und einem Auto-Repeat zu erkennen. Auf diesen Plattformen erzeugt eine Auto-Repeat-Taste dann die folgende Ereignissequenz:

1. `keydown`
2. `keypress`
3. `keyup`
4. `keydown`
5. `keypress`
6. `keyup`
7. <\<wiederholt sich, bis der Benutzer die Taste loslässt>>
8. `keyup`

In diesen Umgebungen gibt es leider keine Möglichkeit für Webinhalte, den Unterschied zwischen sich wiederholenden Tasten und Tasten, die nur wiederholt gedrückt werden, zu erkennen.

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

Die `KeyboardEvent`-Schnittstellenspezifikation durchlief mehrere Entwurfsfassungen, zuerst unter DOM Events Level 2, wo sie fallengelassen wurde, da kein Konsens erzielt wurde, dann unter DOM Events Level 3. Dies führte zur Implementierung nicht standardisierter Initialisierungsmethoden, der frühen DOM Events Level 2 Version, [`KeyboardEvent.initKeyEvent()`](/de/docs/Web/API/KeyboardEvent/initKeyEvent) durch Gecko-Browser und der frühen DOM Events Level 3 Version, [`KeyboardEvent.initKeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/initKeyboardEvent) durch andere. Beide wurden durch die moderne Verwendung eines Konstruktors ersetzt: [`KeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/KeyboardEvent).

## Browser-Kompatibilität

{{Compat}}

### Kompatibilitätsnotizen

- Ab Firefox 65 wird das `keypress`-Ereignis nicht mehr für [nicht druckbare Tasten](/de/docs/Web/API/KeyboardEvent/keyCode#non-printable_keys_function_keys) ausgelöst ([Firefox-Bug 968056](https://bugzil.la/968056)), mit Ausnahme der <kbd>Enter</kbd>-Taste und der <kbd>Shift</kbd> + <kbd>Enter</kbd> und <kbd>Strg</kbd> + <kbd>Enter</kbd>-Tastenkombinationen (diese wurden aus Gründen der plattformübergreifenden Kompatibilität beibehalten).

## Siehe auch

- [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code).
- [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key).
- [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent/getModifierState)
