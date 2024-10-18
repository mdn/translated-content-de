---
title: Tastaturnavigierbare JavaScript-Widgets
slug: Web/Accessibility/Keyboard-navigable_JavaScript_widgets
l10n:
  sourceCommit: 1b6e46adc536a75069f717bf17f314d24b76c47c
---

{{AccessibilitySidebar}}

Webanwendungen verwenden häufig JavaScript, um Desktop-Widgets wie Menüs, Baumansichten, Rich-Text-Felder und Registerkarten nachzuahmen. Diese Widgets bestehen typischerweise aus {{ HTMLElement("div") }} und {{ HTMLElement("span") }}-Elementen, die von Natur aus nicht die gleiche Tastaturfunktionalität bieten wie ihre Desktop-Gegenstücke. Dieses Dokument beschreibt Techniken, um JavaScript-Widgets tastaturzugänglich zu machen.

## Verwendung von tabindex

Standardmäßig erhalten beim Durchsuchen einer Webseite mit der Tabulatortaste nur interaktive Elemente (wie Links, Formularelemente) den Fokus. Mit dem [globalen Attribut](/de/docs/Web/HTML/Global_attributes) `tabindex` können Autoren auch andere Elemente fokussierbar machen. Wenn `0` gesetzt ist, wird das Element durch Tastatur und Skripte fokussierbar. Bei `-1` wird das Element durch Skripte fokussierbar, ist jedoch nicht Teil der Tastaturfokussreihenfolge.

Die Reihenfolge, in der Elemente bei Verwendung der Tastatur fokussiert werden, entspricht standardmäßig der Quellreihenfolge. In Ausnahmefällen möchten Autoren die Reihenfolge möglicherweise neu definieren. Dazu können sie `tabindex` auf eine beliebige positive Zahl setzen.

> [!WARNING]
> Vermeiden Sie die Verwendung von positiven Werten für `tabindex`. Elemente mit einem positiven `tabindex` werden vor den standardmäßig interaktiven Elementen auf der Seite platziert. Das bedeutet, dass Seitenautoren die `tabindex`-Werte für alle fokussierbaren Elemente auf der Seite festlegen (und pflegen) müssen, wenn sie einen oder mehrere positive Werte für `tabindex` verwenden.

Die folgende Tabelle beschreibt das Verhalten von `tabindex` in modernen Browsern:

<table>
  <thead>
    <tr>
      <th><code>tabindex</code> Attribut</th>
      <th>Fokusierbar mit Maus oder JavaScript über <code>element.focus()</code></th>
      <th>Tab-navigierbar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>nicht vorhanden</td>
      <td>Folgt der plattformspezifischen Konvention des Elements (ja für Formularelemente, Links usw.).</td>
      <td>Folgt der plattformspezifischen Konvention des Elements.</td>
    </tr>
    <tr>
      <td>Negativ (z.B. <code>tabindex="-1"</code>)</td>
      <td>Ja</td>
      <td>Nein; der Autor muss das Element mit <a href="/de/docs/Web/API/HTMLElement/focus"><code>focus()</code></a> als Reaktion auf Pfeil- oder andere Tastenanschläge fokussieren.</td>
    </tr>
    <tr>
      <td>Null (z.B. <code>tabindex="0"</code>)</td>
      <td>Ja</td>
      <td>In Tab-Reihenfolge relativ zur Position des Elements im Dokument (interactive elements like {{HTMLElement('a')}} haben dieses Verhalten standardmäßig, sie benötigen das Attribut nicht).</td>
    </tr>
    <tr>
      <td>Positiv (z.B. <code>tabindex="33"</code>)</td>
      <td>Ja</td>
      <td>Der <code>tabindex</code>-Wert bestimmt die Position dieses Elements in der Tab-Reihenfolge: Kleinere Werte positionieren Elemente früher in der Tab-Reihenfolge als größere Werte (z.B. wird <code>tabindex="7"</code> vor <code>tabindex="11"</code> positioniert).</td>
    </tr>
  </tbody>
</table>

### Nicht-native Steuerelemente

Native HTML-Elemente, die interaktiv sind, wie {{ HTMLElement("a") }}, {{ HTMLElement("input") }} und {{ HTMLElement("select") }}, sind bereits tastaturzugänglich. Daher ist die Verwendung eines dieser Elemente der schnellste Weg, um Komponenten tastaturfähig zu machen.

Autoren können auch ein {{ HTMLElement("div") }} oder {{ HTMLElement("span") }} tastaturzugänglich machen, indem sie `tabindex` auf `0` setzen. Dies ist besonders nützlich für Komponenten, die interaktive Elemente verwenden, die in HTML nicht existieren.

### Gruppierung von Steuerelementen

Für Gruppen von Widgets wie Menüs, Tabellenlisten, Raster oder Baumansichten sollte das übergeordnete Element in der Tab-Reihenfolge stehen (`tabindex="0"`), und jede darunterliegende Wahl/Registerkarte/Zelle/Zeile sollte aus der Tab-Reihenfolge entfernt werden (`tabindex="-1"`). Benutzer sollten mit den Pfeiltasten durch die darunterliegenden Elemente navigieren können. (Für eine vollständige Beschreibung der üblicherweise erwarteten Tastaturunterstützung für typische Widgets siehe die [WAI-ARIA Autor-Richtlinien](https://www.w3.org/WAI/ARIA/apg/).)

Das folgende Beispiel zeigt diese Technik mit einer verschachtelten Menüsteuerung. Sobald der Tastaturfokus auf dem einbettenden {{ HTMLElement("ul") }}-Element liegt, muss der JavaScript-Entwickler den Fokus programmatisch verwalten und auf Pfeiltasten reagieren. Für Techniken zur Verwaltung des Fokus innerhalb von Widgets siehe "Fokus innerhalb von Gruppen verwalten" unten.

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

#### Deaktivierte Steuerelemente

Wenn ein benutzerdefiniertes Steuerelement deaktiviert wird, entfernen Sie es aus der Tab-Reihenfolge, indem Sie `tabindex="-1"` setzen. Beachten Sie, dass deaktivierte Elemente innerhalb eines gruppierten Widgets (wie Menüelemente in einem Menü) weiterhin mit den Pfeiltasten navigierbar bleiben sollten.

## Fokus innerhalb von Gruppen verwalten

Wenn ein Benutzer von einem Widget weg und wieder zurück zum Widget wechselt, sollte der Fokus zum spezifischen Element zurückkehren, das den Fokus hatte, z. B. der Baumknoten oder die Rasterzelle. Es gibt zwei Techniken, um dies zu erreichen:

1. Wandernder `tabindex`: Programmatisch den Fokus verschieben
2. `aria-activedescendant`: Verwaltung eines "virtuellen" Fokus

### Technik 1: Wandernder tabindex

Das Festlegen des `tabindex` des fokussierten Elements auf "0" stellt sicher, dass, wenn der Benutzer vom Widget weg- und dann zurückwechselt, das ausgewählte Element innerhalb der Gruppe den Fokus behält. Beachten Sie, dass die Aktualisierung des `tabindex` auf "0" auch die Aktualisierung des zuvor ausgewählten Elements auf `tabindex="-1"` erfordert. Diese Technik beinhaltet das programmatische Verschieben des Fokus als Reaktion auf Tastendrücke und die Aktualisierung des `tabindex`, um das aktuell fokussierte Element widerzuspiegeln. Dazu:

Binden Sie einen Tasten-Handler an jedes Element in der Gruppe, und wenn ein Pfeiltastendruck verwendet wird, um zu einem anderen Element zu wechseln:

1. Programmatisch den Fokus auf das neue Element anwenden,
2. Den `tabindex` des fokussierten Elements auf "0" aktualisieren, und
3. Den `tabindex` des zuvor fokussierten Elements auf "-1" aktualisieren.

Hier ist ein Beispiel für eine [WAI-ARIA Baumansicht](https://files.paciellogroup.com/training/WWW2012/samples/Samples/aria/tree/index.html), das diese Technik verwendet.

### Technik 2: `aria-activedescendant`

Diese Technik beinhaltet das Binden eines einzigen Ereignishandlers an das Container-Widget und die Verwendung von `aria-activedescendant`, um einen „virtuellen“ Fokus zu verfolgen. (Für weitere Informationen über ARIA, siehe diese [Übersicht über zugängliche Webanwendungen und Widgets](/de/docs/Web/Accessibility/An_overview_of_accessible_web_applications_and_widgets).)

Die `aria-activedescendant`-Eigenschaft identifiziert die ID des untergeordneten Elements, das derzeit den virtuellen Fokus hat. Der Ereignishandler auf dem Container muss auf Tastatur- und Mausereignisse reagieren, indem er den Wert von `aria-activedescendant` aktualisiert und sicherstellt, dass das aktuelle Element angemessen gestylt ist (z. B. mit einem Rahmen oder Hintergrundfarbe).

## Allgemeine Richtlinien

### Verwendung von Fokusevents

- Verwenden Sie das [`focus`](/de/docs/Web/API/Element/focus_event)-Ereignis nicht, um den Fokus auf ein Element zu senden. DOM-Fokusevents gelten nur als informativ: Sie werden vom System nach dem Fokussieren generiert, aber nicht tatsächlich verwendet, um den Fokus zu setzen. Verwenden Sie stattdessen `element.focus()`.
- Hören Sie auf die [`focus`](/de/docs/Web/API/Element/focus_event)- und [`blur`](/de/docs/Web/API/Element/blur_event)-Events, um Fokusänderungen zu verfolgen. Gehen Sie nicht davon aus, dass alle Fokusänderungen über Tastatur- und Mausereignisse erfolgen: Unterstützende Technologien wie Bildschirmleseprogramme können den Fokus auf jedes fokussierbare Element setzen. Wenn Sie den Fokusstatus für das gesamte Dokument verfolgen möchten, können Sie das [`document.activeElement`](/de/docs/Web/API/Document/activeElement) verwenden, um das aktive Element zu ermitteln, oder [`document.hasFocus`](/de/docs/Web/API/Document/hasFocus), um sicherzustellen, dass das aktuelle Dokument den Fokus hat.

### Sicherstellen, dass Tastatur und Maus dieselbe Erfahrung bieten

Um sicherzustellen, dass die Benutzererfahrung unabhängig vom Eingabegerät konsistent ist, sollten Tastatur- und Maus-Ereignishandler denselben Code teilen, wo es angemessen ist. Beispielsweise sollte der Code, der das `tabindex` oder das Styling aktualisiert, wenn Benutzer mit den Pfeiltasten navigieren, auch von Mausklicks aufgerufen werden, um die gleichen Änderungen vorzunehmen.

### Sicherstellen, dass die Tastatur verwendet werden kann, um Elemente zu aktivieren

Um sicherzustellen, dass die Tastatur verwendet werden kann, um Elemente zu aktivieren, sollte jeder an Mausereignisse gebundene Handler auch an Tastaturereignisse gebunden sein. Zum Beispiel, um sicherzustellen, dass die Eingabetaste ein Element aktiviert, wenn Sie ein `onclick="doSomething()"` haben, sollten Sie `doSomething()` auch an das Tastendruckereignis binden: `onkeydown="event.code === "Enter" && doSomething();"`.

### Zeichnen Sie immer den Fokus für tabindex="-1"-Elemente und Programmgesteuert fokussierte Elemente

Stellen Sie sicher, dass fokussierte Elemente einen Fokusring haben. Dies kann mit der CSS-Eigenschaft {{cssxref("outline")}} erreicht werden, die nicht bedingungslos auf `none` gesetzt sein sollte - wenn Sie vermeiden möchten, dass unnötige Fokusringe angezeigt werden, verwenden Sie die Pseudoklasse {{cssxref(":focus-visible")}}.

### Verhindern, dass verwendete Tastenereignisse Browserfunktionen ausführen

Wenn Ihr Widget ein Tastenereignis verarbeitet, verhindern Sie, dass der Browser es ebenfalls verarbeitet (z.B. Scrollen als Reaktion auf die Pfeiltasten), indem Sie den Rückgabecode Ihres Ereignishandlers verwenden. Wenn Ihr Ereignishandler `false` zurückgibt, wird das Ereignis nicht über Ihren Handler hinaus verbreitet.

Zum Beispiel:

```html
<span tabindex="-1" onkeydown="return handleKeyDown();">…</span>
```

Wenn `handleKeyDown()` `false` zurückgibt, wird das Ereignis verbraucht und verhindert, dass der Browser eine Aktion auf der Grundlage des Tastendrucks ausführt.

### Verlassen Sie sich an dieser Stelle nicht auf konsistentes Verhalten für Tastenwiederholungen

Unglücklicherweise kann `onkeydown` sich je nach verwendetem Browser und Betriebssystem wiederholen oder nicht.
