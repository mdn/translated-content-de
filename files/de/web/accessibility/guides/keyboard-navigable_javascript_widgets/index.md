---
title: Tastatur-navigierbare JavaScript-Widgets
slug: Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Webanwendungen verwenden oft JavaScript, um Desktop-Widgets wie Menüs, Baumansichten, Rich-Text-Felder und Registerkarten zu simulieren. Diese Widgets bestehen typischerweise aus {{ HTMLElement("div") }} und {{ HTMLElement("span") }} Elementen, die von Natur aus nicht dieselbe Tastaturfunktionalität bieten wie ihre Desktop-Pendants. Dieses Dokument beschreibt Techniken, um JavaScript-Widgets mit der Tastatur zugänglich zu machen.

## Verwendung von tabindex

Standardmäßig werden beim Navigieren einer Webseite mit der Tabulatortaste nur interaktive Elemente (wie Links, Formularelemente) fokussiert. Mit dem `tabindex` [globalen Attribut](/de/docs/Web/HTML/Reference/Global_attributes) können Autoren auch andere Elemente fokussierbar machen. Bei `tabindex` auf `0` wird das Element durch Tastatur und Skript fokussierbar. Bei `-1` ist das Element durch Skript fokussierbar, gehört jedoch nicht zur Tastaturfokus-Reihenfolge.

Die Reihenfolge, in der Elemente durch Tastaturfokus erhalten, entspricht standardmäßig der Quellreihenfolge. In Ausnahmefällen möchten Autoren die Reihenfolge neu definieren. Dazu kann `tabindex` auf eine positive Zahl gesetzt werden.

> [!WARNING]
> Vermeiden Sie die Verwendung positiver Werte für `tabindex`. Elemente mit einem positiven `tabindex` werden vor den Standard-Interaktivelementen auf der Seite platziert, was bedeutet, dass Autoren der Seite `tabindex`-Werte für alle fokussierbaren Elemente festlegen (und verwalten) müssen, wenn sie einen oder mehrere positive Werte für `tabindex` verwenden.

Die folgende Tabelle beschreibt das Verhalten von `tabindex` in modernen Browsern:

<table>
  <thead>
    <tr>
      <th><code>tabindex</code> Attribut</th>
      <th>Fokussierbar mit Maus oder JavaScript über <code>element.focus()</code></th>
      <th>Tab navigierbar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>nicht vorhanden</td>
      <td>Folgt der Plattform-Konvention des Elements (ja für Formularelemente, Links, usw.).</td>
      <td>Folgt der Plattform-Konvention des Elements.</td>
    </tr>
    <tr>
      <td>Negativ (i.e., <code>tabindex="-1"</code>)</td>
      <td>Ja</td>
      <td>Nein; der Autor muss das Element mit <a href="/de/docs/Web/API/HTMLElement/focus"><code>focus()</code></a> in Reaktion auf Pfeil- oder andere Tastenanschläge fokussieren.</td>
    </tr>
    <tr>
      <td>Null (i.e., <code>tabindex="0"</code>)</td>
      <td>Ja</td>
      <td>In Tab-Reihenfolge relativ zur Position des Elements im Dokument (beachten Sie, dass interaktive Elemente wie {{HTMLElement('a')}} dieses Verhalten standardmäßig haben und das Attribut nicht benötigen).</td>
    </tr>
    <tr>
      <td>Positiv (z.B., <code>tabindex="33"</code>)</td>
      <td>Ja</td>
      <td>Der <code>tabindex</code>-Wert bestimmt, wo dieses Element in der Tab-Reihenfolge platziert wird: kleinere Werte positionieren Elemente früher in der Tab-Reihenfolge als größere Werte (zum Beispiel wird <code>tabindex="7"</code> vor <code>tabindex="11"</code> positioniert).</td>
    </tr>
  </tbody>
</table>

### Nicht-native Steuerungen

Interaktive native HTML-Elemente wie {{ HTMLElement("a") }}, {{ HTMLElement("input") }} und {{ HTMLElement("select") }} sind bereits tastaturzugänglich, sodass deren Verwendung der schnellste Weg ist, um Komponenten mit Tastaturen funktionsfähig zu machen.

Autoren können auch ein {{ HTMLElement("div") }} oder {{ HTMLElement("span") }} tastaturzugänglich machen, indem sie einen `tabindex` von `0` hinzufügen. Dies ist besonders nützlich für Komponenten, die interaktive Elemente verwenden, die in HTML nicht existieren.

### Gruppierung von Steuerungen

Bei der Gruppierung von Widgets wie Menüs, Tablisten, Rastern oder Baumansichten sollte das übergeordnete Element in der Tab-Reihenfolge sein (`tabindex="0"`), und jede nachgeordnete Auswahl/Registerkarte/Zelle/Zeile sollte aus der Tab-Reihenfolge entfernt werden (`tabindex="-1"`). Benutzer sollten in der Lage sein, mit den Nachkommenelementen mit Pfeiltasten zu navigieren. (Für eine vollständige Beschreibung der normalerweise erwarteten Tastaturunterstützung für typische Widgets siehe die [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/).)

Das folgende Beispiel zeigt diese Technik mit einer verschachtelten Menüsteuerung. Sobald der Tastaturfokus auf das enthaltene {{ HTMLElement("ul") }}-Element gelangt, muss der JavaScript-Entwickler den Fokus programmgesteuert verwalten und auf Pfeiltasten reagieren. Für Techniken zur Verwaltung des Fokus innerhalb von Widgets siehe "Verwaltung des Fokus innerhalb von Gruppen" unten.

```html
<ul id="mb1" tabindex="0">
  <li id="mb1_menu1" tabindex="-1">
    Font
    <ul id="fontMenu" title="Font" tabindex="-1">
      <li id="sans-serif" tabindex="-1">Sans-serif</li>
      <li id="serif" tabindex="-1">Serif</li>
      <li id="monospace" tabindex="-1">Monospace</li>
      <li id="fantasy" tabindex="-1">Fantasy</li>
    </ul>
  </li>
  <li id="mb1_menu2" tabindex="-1">
    Style
    <ul id="styleMenu" title="Style" tabindex="-1">
      <li id="italic" tabindex="-1">Italics</li>
      <li id="bold" tabindex="-1">Bold</li>
      <li id="underline" tabindex="-1">Underlined</li>
    </ul>
  </li>
  <li id="mb1_menu3" tabindex="-1">
    Justification
    <ul id="justificationMenu" title="Justification" tabindex="-1">
      <li id="left" tabindex="-1">Left</li>
      <li id="center" tabindex="-1">Centered</li>
      <li id="right" tabindex="-1">Right</li>
      <li id="justify" tabindex="-1">Justify</li>
    </ul>
  </li>
</ul>
```

#### Deaktivierte Steuerungen

Wenn eine benutzerdefinierte Steuerung deaktiviert wird, entfernen Sie sie aus der Tab-Reihenfolge, indem Sie `tabindex="-1"` setzen. Beachten Sie, dass deaktivierte Elemente innerhalb eines gruppierten Widgets (wie Menüpunkte in einem Menü) mithilfe von Pfeiltasten weiterhin navigierbar sein sollten.

## Verwaltung des Fokus innerhalb von Gruppen

Wenn ein Benutzer von einem Widget weg und zurück tabbt, sollte der Fokus zum spezifischen Element zurückkehren, das den Fokus hatte, zum Beispiel das Baumelement oder die Rasterzelle. Es gibt zwei Techniken, um dies zu erreichen:

1. Roving `tabindex`: programmgesteuertes Verschieben des Fokus
2. `aria-activedescendant`: Verwaltung eines 'virtuellen' Fokus

### Technik 1: Roving tabindex

Das Setzen des `tabindex` des fokussierten Elements auf "0" stellt sicher, dass, wenn der Benutzer von dem Widget weg und wieder zurück tabbt, das ausgewählte Element innerhalb der Gruppe den Fokus behält. Beachten Sie, dass das Aktualisieren des `tabindex` auf "0" auch erfordert, dass das vorher ausgewählte Element auf `tabindex="-1"` aktualisiert wird. Diese Technik beinhaltet das programmgesteuerte Verschieben des Fokus als Reaktion auf Tastendruckereignisse und die Aktualisierung des `tabindex`, um das aktuell fokussierte Element zu reflektieren. Gehen Sie dafür wie folgt vor:

Binden Sie einen Tastendruck-Handler an jedes Element in der Gruppe und wenn eine Pfeiltaste verwendet wird, um zu einem anderen Element zu wechseln:

1. wenden Sie den Fokus programmgesteuert auf das neue Element an,
2. aktualisieren Sie den `tabindex` des fokussierten Elements auf "0", und
3. aktualisieren Sie den `tabindex` des zuvor fokussierten Elements auf "-1".

### Technik 2: `aria-activedescendant`

Diese Technik beinhaltet das Binden eines einzelnen Ereignis-Handlers an das Container-Widget und die Verwendung von `aria-activedescendant`, um einen "virtuellen" Fokus zu verfolgen. (Für weitere Informationen über ARIA siehe diesen [Überblick über barrierefreie Webanwendungen und Widgets](/de/docs/Web/Accessibility/Guides/Accessible_web_applications_and_widgets).)

Die `aria-activedescendant`-Eigenschaft identifiziert die ID des untergeordneten Elements, das aktuell den virtuellen Fokus hat. Der Ereignis-Handler auf dem Container muss auf Tasten- und Mausereignisse reagieren, indem er den Wert von `aria-activedescendant` aktualisiert und sicherstellt, dass das aktuelle Element entsprechend gestylt ist (zum Beispiel mit einem Rahmen oder einer Hintergrundfarbe).

## Allgemeine Richtlinien

### Verwendung von Fokuserlebnissen

- Dispatche nicht das [`focus`](/de/docs/Web/API/Element/focus_event)-Ereignis, um den Fokus auf ein Element zu setzen. DOM-Fokus-Ereignisse gelten nur als informativ: sie werden vom System nach etwas Fokussiertem generiert, aber nicht tatsächlich verwendet, um den Fokus zu setzen. Verwenden Sie stattdessen `element.focus()`.
- Hör auf die [`focus`](/de/docs/Web/API/Element/focus_event)- und [`blur`](/de/docs/Web/API/Element/blur_event)-Ereignisse, um Fokusänderungen zu verfolgen. Verlassen Sie sich nicht darauf, dass alle Fokusänderungen über Tasten- und Mausereignisse kommen: Hilfstechnologien wie Screenreader können den Fokus auf jedes fokussierbare Element setzen. Wenn Sie den Fokusstatus für das gesamte Dokument verfolgen möchten, können Sie [`document.activeElement`](/de/docs/Web/API/Document/activeElement) verwenden, um das aktive Element zu erhalten, oder [`document.hasFocus`](/de/docs/Web/API/Document/hasFocus), um sicherzustellen, dass das aktuelle Dokument den Fokus hat.

### Stellen Sie sicher, dass Tastatur und Maus dasselbe Erlebnis bieten

Um sicherzustellen, dass das Benutzererlebnis unabhängig vom Eingabegerät konsistent ist, sollten Tastatur- und Mausevent-Handler Code gemeinsam nutzen, wo dies angebracht ist. Zum Beispiel sollte der Code, der den `tabindex` oder das Styling aktualisiert, wenn Benutzer mit den Pfeiltasten navigieren, auch von Mausklick-Handlern verwendet werden, um dieselben Änderungen zu bewirken.

### Stellen Sie sicher, dass die Tastatur verwendet werden kann, um ein Element zu aktivieren

Um sicherzustellen, dass die Tastatur verwendet werden kann, um Elemente zu aktivieren, sollten alle an Mausereignisse gebundenen Handler auch an Tastaturereignisse gebunden sein. Zum Beispiel, um sicherzustellen, dass die Eingabetaste ein Element aktiviert, wenn Sie ein `onclick="doSomething()"` haben, sollten Sie `doSomething()` auch an das Keydown-Ereignis binden: `onkeydown="event.code === "Enter" && doSomething();"`.

### Zeichnen Sie immer den Fokus für tabindex="-1" Elemente und Elemente, die programmgesteuert den Fokus erhalten

Stellen Sie sicher, dass fokussierte Elemente einen Fokusring haben. Dies kann mit der CSS-Eigenschaft {{cssxref("outline")}} erfolgen, die nicht bedingungslos auf `none` gesetzt werden sollte—wenn Sie verhindern möchten, dass unnötige Fokusringe angezeigt werden, verwenden Sie die Pseudoklasse {{cssxref(":focus-visible")}}.

### Verhindern Sie, dass verwendete Tastenevents Browserverhalten auslösen

Wenn Ihr Widget ein Tastenevent behandelt, verhindern Sie, dass der Browser es ebenfalls behandelt (beispielsweise Scrollen als Reaktion auf Pfeiltasten), indem Sie den Rückgabewert Ihres Event-Handlers verwenden. Wenn Ihr Event-Handler `false` zurückgibt, wird das Event nicht über Ihren Handler hinaus propagiert.

Zum Beispiel:

```html
<span tabindex="-1" onkeydown="return handleKeyDown();">…</span>
```

Wenn `handleKeyDown()` `false` zurückgibt, wird das Ereignis konsumiert und verhindert, dass der Browser eine Aktion basierend auf dem Tastenanschlag ausführt.

### Verlassen Sie sich derzeit nicht auf konsistentes Verhalten bei der Tastenwiederholung

Leider variiert das Verhalten von `onkeydown`, je nachdem, welchen Browser und welches Betriebssystem Sie verwenden.
