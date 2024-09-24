---
title: KeyboardEvent
slug: Web/API/KeyboardEvent
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("UI Events")}}

**`KeyboardEvent`**-Objekte beschreiben eine Benutzerinteraktion mit der Tastatur; jedes Ereignis beschreibt eine einzelne Interaktion zwischen dem Benutzer und einer Taste (oder einer Kombination einer Taste mit Modifikatortasten) auf der Tastatur. Der Ereignistyp ({{domxref("Element/keydown_event", "keydown")}}, {{domxref("Element/keypress_event", "keypress")}} oder {{domxref("Element/keyup_event", "keyup")}}) identifiziert, welche Art von Tastaturaktivität stattgefunden hat.

> **Hinweis:** `KeyboardEvent`-Ereignisse zeigen nur an, welche Interaktion der Benutzer auf niedriger Ebene mit einer Taste auf der Tastatur hatte, ohne dabei einen kontextuellen Sinn der Interaktion zu bieten. Wenn Sie eine Texteingabe behandeln müssen, verwenden Sie stattdessen das {{domxref("Element/input_event", "input")}}-Ereignis. Tastaturevents werden möglicherweise nicht ausgelöst, wenn der Benutzer eine alternative Methode zur Texteingabe verwendet, wie z. B. ein Handschrifterkennungssystem auf einem Tablet oder Grafiktablett.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}
  - : Erstellt ein neues `KeyboardEvent`-Objekt.

## Konstanten

Das `KeyboardEvent`-Interface definiert die folgenden Konstanten.

### Tastaturlokationen

Die folgenden Konstanten identifizieren, von welchem Teil der Tastatur das Tastenevent stammt. Sie werden als `KeyboardEvent.DOM_KEY_LOCATION_STANDARD` und so weiter aufgerufen.

<table class="standard-table">
  <caption>
    Tastaturlokations-Identifikatoren
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
          Die durch das Ereignis beschriebene Taste ist nicht als in einem bestimmten Bereich der Tastatur befindlich identifiziert; sie befindet sich nicht auf dem nummerischen Tastenfeld (es sei denn, es handelt sich um die NumLock-Taste), und bei Tasten, die auf der linken und rechten Seite der Tastatur doppelt vorkommen, ist die Taste aus irgendeinem Grund nicht mit diesem Standort assoziiert.
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
          Die Taste ist eine, die an mehreren Stellen auf der Tastatur vorhanden sein kann und sich in diesem Fall auf der linken Seite der Tastatur befindet.
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
          Die Taste ist eine, die an mehreren Stellen auf der Tastatur vorhanden sein kann und sich in diesem Fall auf der rechten Seite der Tastatur befindet.
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
          Die Taste befindet sich auf dem nummerischen Tastenfeld oder ist eine virtuelle Taste, die mit dem nummerischen Tastenfeld in Verbindung steht, wenn es mehr als eine Stelle gibt, von der die Taste stammen könnte. Die NumLock-Taste gehört nicht zu dieser Gruppe und wird immer mit der Lokation <code>DOM_KEY_LOCATION_STANDARD</code> kodiert.
        </p>
        <p>
          Beispiele sind die Ziffern auf dem nummerischen Tastenfeld, die Eingabetaste des Tastenfelds und der Dezimalpunkt auf dem Tastenfeld.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften seiner Eltern, {{domxref("UIEvent")}} und {{domxref("Event")}}._

- {{domxref("KeyboardEvent.altKey")}} {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Alt</kbd> (<kbd>Option</kbd> oder <kbd>⌥</kbd> auf macOS) Taste aktiv war, als das Tastenevent erzeugt wurde.

- {{domxref("KeyboardEvent.code")}} {{ReadOnlyInline}}

  - : Gibt eine Zeichenkette mit dem Codewert der physischen Taste zurück, die durch das Ereignis dargestellt wird.

    > [!WARNING]
    > Dies ignoriert das Tastaturlayout des Benutzers, sodass, wenn der Benutzer die Taste an der "Y"-Position in einem QWERTY-Tastaturlayout drückt (nahe der Mitte der Zeile über der Grundreihe), dies immer "KeyY" zurückgibt, auch wenn der Benutzer eine QWERTZ-Tastatur hat (was bedeuten würde, dass der Benutzer ein "Z" erwartet und alle anderen Eigenschaften ein "Z" anzeigen würden) oder ein Dvorak-Tastaturlayout (wo der Benutzer ein "F" erwarten würde). Wenn Sie dem Benutzer die korrekten Tastenanschläge anzeigen möchten, können Sie {{domxref("Keyboard.getLayoutMap()")}} verwenden.

- {{domxref("KeyboardEvent.ctrlKey")}} {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Strg</kbd> Taste aktiv war, als das Tastenevent erzeugt wurde.

- {{domxref("KeyboardEvent.isComposing")}} {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn das Ereignis zwischen `compositionstart` und `compositionend` ausgelöst wird.
- {{domxref("KeyboardEvent.key")}} {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die den Tastenwert der durch das Ereignis dargestellten Taste repräsentiert.
- {{domxref("KeyboardEvent.location")}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Standort der Taste auf der Tastatur oder einem anderen Eingabegerät darstellt. Eine Liste der Konstanten zur Identifizierung der Standorte ist oben unter [Tastaturlokationen](#tastaturlokationen) aufgeführt.
- {{domxref("KeyboardEvent.metaKey")}} {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Meta</kbd>-Taste (bei Mac-Tastaturen die <kbd>⌘ Befehl</kbd>-Taste; bei Windows-Tastaturen die Windows-Taste (<kbd>⊞</kbd>)) aktiv war, als das Tastenevent erzeugt wurde.

- {{domxref("KeyboardEvent.repeat")}} {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die Taste so gehalten wird, dass sie automatisch wiederholt wird.
- {{domxref("KeyboardEvent.shiftKey")}} {{ReadOnlyInline}}

  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn die <kbd>Umschalt</kbd> Taste aktiv war, als das Tastenevent erzeugt wurde.

### Veraltete Eigenschaften

- {{domxref("KeyboardEvent.charCode")}} {{Deprecated_inline}} {{ReadOnlyInline}}

  - : Gibt eine Zahl zurück, die den Unicode-Referenzwert der Taste darstellt; diese Eigenschaft wird nur vom `keypress`-Ereignis verwendet. Bei Tasten, deren `char`-Eigenschaft mehrere Zeichen enthält, ist dies der Unicode-Wert des ersten Zeichens in dieser Eigenschaft. In Firefox 26 werden für druckbare Zeichen Codes zurückgegeben.

- {{domxref("KeyboardEvent.keyCode")}} {{deprecated_inline}} {{ReadOnlyInline}}

  - : Gibt eine Zahl zurück, die einen system- und implementierungsabhängigen numerischen Code darstellt, der den nicht modifizierten Wert der gedrückten Taste identifiziert.

- {{domxref("KeyboardEvent.keyIdentifier")}} {{Non-standard_inline}} {{deprecated_inline}} {{ReadOnlyInline}}
  - : Diese Eigenschaft ist nicht standardisiert und wurde zugunsten von {{domxref("KeyboardEvent.key")}} veraltet. Sie war Teil einer alten Version von DOM Level 3 Events.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden seiner Eltern, {{domxref("UIEvent")}} und {{domxref("Event")}}._

- {{domxref("KeyboardEvent.getModifierState()")}}

  - : Gibt einen booleschen Wert zurück, der anzeigt, ob eine Modifikatortaste wie <kbd>Alt</kbd>, <kbd>Umschalt</kbd>, <kbd>Strg</kbd> oder <kbd>Meta</kbd> gedrückt wurde, als das Ereignis erstellt wurde.

### Veraltete Methoden

- {{domxref("KeyboardEvent.initKeyEvent()")}} {{deprecated_inline}}
  - : Initialisiert ein `KeyboardEvent`-Objekt. Dies wurde nur von Firefox implementiert und wird dort auch nicht mehr unterstützt; stattdessen sollten Sie den {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}-Konstruktor verwenden.
- {{domxref("KeyboardEvent.initKeyboardEvent()")}} {{deprecated_inline}}
  - : Initialisiert ein `KeyboardEvent`-Objekt. Dies ist jetzt veraltet. Stattdessen sollten Sie den {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}-Konstruktor verwenden.

## Ereignisse

Die folgenden Ereignisse basieren auf dem `KeyboardEvent`-Typ. In der untenstehenden Liste verweist jedes Ereignis auf die Dokumentation des `Element`-Handlers für das Ereignis, der allgemein auf alle Empfänger wie {{domxref("Element")}}, {{domxref("Document")}} und {{domxref("Window")}} zutrifft.

- {{domxref("Element.keydown_event", "keydown")}}
  - : Eine Taste wurde gedrückt.
- {{domxref("Element.keyup_event", "keyup")}}
  - : Eine Taste wurde losgelassen.

### Veraltete Ereignisse

- {{domxref("Element.keypress_event", "keypress")}} {{deprecated_inline}}
  - : Eine Taste, die normalerweise einen Zeichenwert erzeugt, wurde gedrückt. Dieses Ereignis war stark geräteabhängig und ist veraltet. Sie sollten es nicht verwenden.

## Verwendungshinweise

Es gibt drei Arten von Tastaturevents: {{domxref("Element/keydown_event", "keydown")}}, {{domxref("Element/keypress_event", "keypress")}} und {{domxref("Element/keyup_event", "keyup")}}. Für die meisten Tasten löst Gecko eine Sequenz von Ereignissen wie folgt aus:

1. Wenn die Taste zum ersten Mal gedrückt wird, wird das `keydown`-Ereignis gesendet.
2. Wenn die Taste keine Modifikatortaste ist, wird das `keypress`-Ereignis gesendet.
3. Wenn der Benutzer die Taste loslässt, wird das `keyup`-Ereignis gesendet.

### Sonderfälle

Einige Tasten schalten den Zustand einer Anzeigelampe um; dazu gehören Tasten wie Feststelltaste, NumLock und Rollen. Unter Windows und Linux lösen diese Tasten nur die Ereignisse `keydown` und `keyup` aus.

> [!HINWEIS]
> Unter Linux löste Firefox 12 und früher auch das `keypress`-Ereignis für diese Tasten aus.

Aufgrund einer Einschränkung im Ereignismodell von macOS löst die Feststelltaste jedoch nur das `keydown`-Ereignis aus. NumLock wurde auf einigen älteren Laptop-Modellen (Modelle von 2007 und älter) unterstützt, aber seitdem unterstützt macOS NumLock nicht mehr, selbst auf externen Tastaturen. Auf älteren MacBooks mit einer NumLock-Taste erzeugt diese Taste keine Tastaturevents. Gecko unterstützt die Rollen-Taste, wenn eine externe Tastatur mit einer F14-Taste angeschlossen ist. In bestimmten älteren Versionen von Firefox erzeugte diese Taste ein `keypress`-Ereignis; dieses inkonsistente Verhalten war [Firefox-Bug 602812](https://bugzil.la/602812).

### Automatische Wiederholungsbehandlung

Wenn eine Taste gedrückt gehalten wird, beginnt sie, sich automatisch zu wiederholen. Dies führt zu einer Sequenz von Ereignissen wie der folgenden:

1. `keydown`
2. `keypress`
3. `keydown`
4. `keypress`
5. <<wiederholt sich, bis der Benutzer die Taste loslässt>>
6. `keyup`

Dies ist das, was die DOM Level 3-Spezifikation vorsieht. Es gibt jedoch einige Vorbehalte, die unten beschrieben werden.

#### Automatische Wiederholung in einigen GTK-Umgebungen wie Ubuntu 9.4

In einigen GTK-basierten Umgebungen löst die automatische Wiederholung automatisch ein natives Key-Up-Ereignis während der automatischen Wiederholung aus, und es gibt keine Möglichkeit für Gecko, den Unterschied zwischen einer wiederholten Reihe von Tastendrucken und einer automatischen Wiederholung zu erkennen. Auf diesen Plattformen generiert eine automatisch wiederholte Taste die folgende Sequenz von Ereignissen:

1. `keydown`
2. `keypress`
3. `keyup`
4. `keydown`
5. `keypress`
6. `keyup`
7. <<wiederholt sich, bis der Benutzer die Taste loslässt>>
8. `keyup`

In diesen Umgebungen gibt es leider keine Möglichkeit für Web-Inhalte, zwischen automatisch wiederholten Tasten und Tasten, die einfach wiederholt gedrückt werden, zu unterscheiden.

## Beispiel

```js
document.addEventListener(
  "keydown",
  (event) => {
    const keyName = event.key;

    if (keyName === "Control") {
      // Keine Meldung, wenn nur die Steuerungstaste gedrückt wird.
      return;
    }

    if (event.ctrlKey) {
      // Auch wenn event.key nicht 'Control' ist (z.B. 'a' wird gedrückt),
      // kann event.ctrlKey wahr sein, wenn gleichzeitig die Steuerungstaste gedrückt wird.
      alert(`Kombination aus ctrlKey + ${keyName}`);
    } else {
      alert(`Taste gedrückt ${keyName}`);
    }
  },
  false,
);

document.addEventListener(
  "keyup",
  (event) => {
    const keyName = event.key;

    // Wenn der Benutzer die Strg-Taste loslässt, ist die Taste nicht mehr aktiv,
    // sodass event.ctrlKey falsch ist.
    if (keyName === "Control") {
      alert("Strg-Taste wurde losgelassen");
    }
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

Die Spezifikation des `KeyboardEvent`-Interfaces hat zahlreiche Entwurfsstadien durchlaufen, zunächst unter DOM Events Level 2, wo sie eingestellt wurde, da kein Konsens gefunden wurde, und dann unter DOM Events Level 3. Dies führte zur Implementierung von nicht standardisierten Initialisierungsmethoden, der frühen DOM Events Level 2-Version {{domxref("KeyboardEvent.initKeyEvent()")}} von Gecko-Browsern und der frühen DOM Events Level 3-Version {{domxref("KeyboardEvent.initKeyboardEvent()")}} von anderen. Beide wurden durch die moderne Nutzung eines Konstruktors ersetzt: {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}.

## Browser-Kompatibilität

{{Compat}}

### Kompatibilitäts-Hinweise

- Ab Firefox 65 wird das `keypress`-Ereignis nicht mehr für [nicht druckbare Tasten](/de/docs/Web/API/KeyboardEvent/keyCode#non-printable_keys_function_keys) ausgelöst ([Firefox-Bug 968056](https://bugzil.la/968056)), außer für die
  <kbd>Enter</kbd>
  Taste und die
  <kbd>Umschalt</kbd>
  \+
  <kbd>Enter</kbd>
  und
  <kbd>Strg</kbd>
  \+
  <kbd>Enter</kbd>
  Tastenkombinationen (diese wurden aus Gründen der plattformübergreifenden Kompatibilität beibehalten).

## Siehe auch

- {{domxref("KeyboardEvent.code")}}.
- {{domxref("KeyboardEvent.key")}}.
- {{domxref("KeyboardEvent.getModifierState()")}}.
