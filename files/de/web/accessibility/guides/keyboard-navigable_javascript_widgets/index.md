---
title: Tastaturnavigierbare JavaScript-Widgets
slug: Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets
l10n:
  sourceCommit: a52689c74c6c89f45c54447bb148e54ed320db62
---

Webanwendungen verwenden häufig JavaScript, um Desktop-Widgets wie Menüs, Baumansichten, Rich-Text-Felder und Registerkarten zu imitieren. Diese Widgets bestehen typischerweise aus {{ HTMLElement("div") }}- und {{ HTMLElement("span") }}-Elementen, die von Natur aus nicht dieselbe Tastaturfunktionalität bieten wie ihre Desktop-Gegenstücke. Dieses Dokument beschreibt Techniken, um JavaScript-Widgets mit der Tastatur zugänglich zu machen.

## Verwendung von tabindex

Standardmäßig werden beim Browsen einer Webseite mit der Tabulatortaste nur interaktive Elemente (wie Links, Formularelemente) fokussiert. Mit dem `tabindex` [globalen Attribut](/de/docs/Web/HTML/Global_attributes) können Autoren auch andere Elemente fokussierbar machen. Wenn `0` gesetzt ist, wird das Element über Tastatur und Skript fokussierbar. Bei `-1` wird das Element per Skript fokussierbar, es wird jedoch nicht Teil der Tastaturfokusreihenfolge.

Die Reihenfolge, in der Elemente bei Verwendung der Tastatur den Fokus erhalten, ist standardmäßig die Quellreihenfolge. In Ausnahmefällen möchten Autoren die Reihenfolge möglicherweise neu definieren. Dazu können sie `tabindex` auf eine beliebige positive Zahl setzen.

> [!WARNING]
> Vermeiden Sie die Verwendung positiver Werte für `tabindex`. Elemente mit einem positiven `tabindex` stehen vor den standardmäßigen interaktiven Elementen auf der Seite, was bedeutet, dass Seitenautoren `tabindex`-Werte für alle fokussierbaren Elemente auf der Seite festlegen (und pflegen) müssen, wann immer sie einen oder mehrere positive Werte für `tabindex` verwenden.

Die folgende Tabelle beschreibt das Verhalten von `tabindex` in modernen Browsern:

<table>
  <thead>
    <tr>
      <th><code>tabindex</code>-Attribut</th>
      <th>Fokussierbar mit Maus oder JavaScript über <code>element.focus()</code></th>
      <th>Tab-navigierbar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>nicht vorhanden</td>
      <td>Folgt der Plattformkonvention des Elements (ja für Formularelemente, Links usw.).</td>
      <td>Folgt der Plattformkonvention des Elements.</td>
    </tr>
    <tr>
      <td>Negativ (z.B. <code>tabindex="-1"</code>)</td>
      <td>Ja</td>
      <td>Nein; der Autor muss das Element mit <a href="/de/docs/Web/API/HTMLElement/focus"><code>focus()</code></a> in Reaktion auf Pfeil- oder andere Tastendrücken fokussieren.</td>
    </tr>
    <tr>
      <td>Null (z.B. <code>tabindex="0"</code>)</td>
      <td>Ja</td>
      <td>In der Tastaturreihenfolge relativ zur Position des Elements im Dokument (beachten Sie, dass interaktive Elemente wie {{HTMLElement('a')}} dieses Verhalten standardmäßig haben, sie benötigen das Attribut nicht).</td>
    </tr>
    <tr>
      <td>Positiv (z.B. <code>tabindex="33"</code>)</td>
      <td>Ja</td>
      <td>Der <code>tabindex</code>-Wert bestimmt, wo dieses Element in der Tab-Reihenfolge positioniert wird: Kleinere Werte positionieren Elemente früher in der Tab-Reihenfolge als größere Werte (zum Beispiel wird <code>tabindex="7"</code> vor <code>tabindex="11"</code> positioniert).</td>
    </tr>
  </tbody>
</table>

### Nicht-native Steuerungen

Interaktive HTML-Elemente wie {{ HTMLElement("a") }}, {{ HTMLElement("input") }} und {{ HTMLElement("select") }} sind bereits mit Tastaturen zugänglich. Die Verwendung eines dieser Elemente ist der schnellste Weg, um Komponenten mit Tastaturen funktional zu machen.

Autoren können auch eine {{ HTMLElement("div") }} oder {{ HTMLElement("span") }} durch Hinzufügen eines `tabindex` von `0` tastaturzugänglich machen. Dies ist besonders nützlich für Komponenten, die interaktive Elemente verwenden, die nicht in HTML existieren.

### Gruppierung von Steuerungen

Für Gruppierungs-Widgets wie Menüs, Registerkartenlisten, Raster oder Baumansichten sollte das Elternelement in der Tab-Reihenfolge sein (`tabindex="0"`), und jede nachgeordnete Wahl/Tab/Zelle/Zeile sollte aus der Tab-Reihenfolge entfernt sein (`tabindex="-1"`). Benutzer sollten die nachgeordneten Elemente mit den Pfeiltasten navigieren können. (Für eine vollständige Beschreibung der normalerweise erwarteten Unterstützung für typische Widgets siehe die [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/).)

Das folgende Beispiel zeigt diese Technik mit einem verschachtelten Menü-Widget. Sobald der Tastaturfokus auf das {{ HTMLElement("ul") }} Element trifft, muss der JavaScript-Entwickler den Fokus programmatisch verwalten und auf die Pfeiltasten reagieren. Für Techniken zur Verwaltung des Fokus innerhalb von Widgets siehe "Fokus innerhalb von Gruppen verwalten" weiter unten.

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

Wenn eine benutzerdefinierte Steuerung deaktiviert wird, entfernen Sie sie aus der Tab-Reihenfolge, indem Sie `tabindex="-1"` einstellen. Beachten Sie, dass deaktivierte Elemente innerhalb eines gruppierten Widgets (wie Menüelemente in einem Menü) weiterhin mit den Pfeiltasten navigierbar sein sollten.

## Verwaltung des Fokus innerhalb von Gruppen

Wenn ein Benutzer von einem Widget wegwechselt und zurückkehrt, sollte der Fokus auf das spezifische Element zurückkehren, das den Fokus hatte, zum Beispiel das Baumelement oder die Rasterzelle. Es gibt zwei Techniken, um dies zu erreichen:

1. Roving `tabindex`: Programmatische Fokussierung
2. `aria-activedescendant`: Verwaltung eines 'virtuellen' Fokus

### Technik 1: Roving tabindex

Wenn Sie den `tabindex` des fokussierten Elements auf "0" setzen, wird sichergestellt, dass, wenn der Benutzer vom Widget wegwechselt und dann zurückkehrt, das ausgewählte Element innerhalb der Gruppe den Fokus behält. Beachten Sie, dass das Aktualisieren des `tabindex` auf "0" auch das Aktualisieren des vorher ausgewählten Elements auf `tabindex="-1"` erfordert. Diese Technik beinhaltet die programmatische Verschiebung des Fokus als Reaktion auf Tastenereignisse und das Aktualisieren des `tabindex`, um das aktuell fokussierte Element widerzuspiegeln. Gehen Sie dafür wie folgt vor:

Binden Sie einen Tasten-Handler an jedes Element in der Gruppe, und wenn eine Pfeiltaste verwendet wird, um zu einem anderen Element zu wechseln:

1. Wenden Sie den Fokus programmatisch auf das neue Element an,
2. aktualisieren Sie den `tabindex` des fokussierten Elements auf "0", und
3. aktualisieren Sie den `tabindex` des vorher fokussierten Elements auf "-1".

### Technik 2: `aria-activedescendant`

Diese Technik beinhaltet das Binden eines einzigen Ereignis-Handlers an das Container-Widget und die Verwendung von `aria-activedescendant`, um einen "virtuellen" Fokus zu verfolgen. (Für weitere Informationen zu ARIA siehe diesen [Überblick über zugängliche Webanwendungen und Widgets](/de/docs/Web/Accessibility/Guides/Accessible_web_applications_and_widgets).)

Die Eigenschaft `aria-activedescendant` identifiziert die ID des nachgeordneten Elements, das derzeit den virtuellen Fokus hat. Der Ereignis-Handler im Container muss auf Tasten- und Mausereignisse reagieren, indem er den Wert von `aria-activedescendant` aktualisiert und sicherstellt, dass das aktuelle Element entsprechend gestylt ist (zum Beispiel mit einem Rahmen oder einer Hintergrundfarbe).

## Allgemeine Richtlinien

### Verwendung von Fokusereignissen

- Verwenden Sie nicht das [`focus`](/de/docs/Web/API/Element/focus_event)-Ereignis, um den Fokus auf ein Element zu senden. DOM-Fokusereignisse werden nur als informativ betrachtet: Sie werden vom System generiert, nachdem etwas fokussiert wurde, jedoch nicht tatsächlich verwendet, um den Fokus zu setzen. Verwenden Sie stattdessen `element.focus()`.
- Hören Sie auf die [`focus`](/de/docs/Web/API/Element/focus_event)- und [`blur`](/de/docs/Web/API/Element/blur_event)-Ereignisse, um Fokusänderungen zu verfolgen. Gehen Sie nicht davon aus, dass alle Fokusänderungen über Tasten- und Mausereignisse erfolgen: Unterstützende Technologien wie Bildschirmleser können den Fokus auf jedes fokussierbare Element setzen. Wenn Sie den Fokusstatus für das gesamte Dokument verfolgen möchten, können Sie [`document.activeElement`](/de/docs/Web/API/Document/activeElement) verwenden, um das aktive Element zu erhalten, oder [`document.hasFocus`](/de/docs/Web/API/Document/hasFocus), um sicherzustellen, ob das aktuelle Dokument den Fokus hat.

### Stellen Sie sicher, dass Tastatur und Maus dieselbe Erfahrung bieten

Um sicherzustellen, dass das Benutzererlebnis unabhängig vom Eingabegerät konsistent ist, sollten Tastatur- und Mausereignishandler gegebenenfalls Code gemeinsam nutzen. Zum Beispiel sollte der Code, der den `tabindex` oder das Styling aktualisiert, wenn Benutzer mit den Pfeiltasten navigieren, auch von Mausklick-Handlern verwendet werden, um dieselben Änderungen vorzunehmen.

### Sicherstellen, dass die Tastatur verwendet werden kann, um das Element zu aktivieren

Um sicherzustellen, dass die Tastatur zum Aktivieren von Elementen verwendet werden kann, sollten alle an Mausereignisse gebundenen Handler auch an Tastaturereignisse gebunden sein. Um beispielsweise sicherzustellen, dass die Eingabetaste ein Element aktiviert, sollten Sie `doSomething()` sowohl dem Maus- als auch dem Tastenereignis zuordnen: `onkeydown="event.code === "Enter" && doSomething();"`.

### Fokusring für tabindex="-1"-Elemente und Elemente, die programmatisch den Fokus erhalten, immer zeichnen

Stellen Sie sicher, dass fokussierte Elemente einen Fokusring haben. Dies kann mit der CSS-Eigenschaft {{cssxref("outline")}} erreicht werden, die nicht bedingungslos auf `none` gesetzt werden sollte—wenn Sie verhindern möchten, dass unnötige Fokusringe angezeigt werden, verwenden Sie die Pseudoklasse {{cssxref(":focus-visible")}}.

### Verhindern, dass verwendete Tastenereignisse Browserfunktionen ausführen

Wenn Ihr Widget ein Tastenereignis verarbeitet, verhindern Sie, dass der Browser es ebenfalls bearbeitet (zum Beispiel das Scrollen als Reaktion auf die Pfeiltasten) durch die Rückkehr Ihres Ereignishandlers. Wenn Ihr Ereignishandler `false` zurückgibt, wird das Ereignis nicht über Ihren Handler hinaus propagiert.

Zum Beispiel:

```html
<span tabindex="-1" onkeydown="return handleKeyDown();">…</span>
```

Wenn `handleKeyDown()` `false` zurückgibt, wird das Ereignis verbraucht, wodurch verhindert wird, dass der Browser eine Aktion basierend auf dem Tastendruck ausführt.

### Verlassen Sie sich derzeit nicht auf konsistentes Verhalten für Tastenwiederholungen

Leider kann `onkeydown` je nach verwendetem Browser und Betriebssystem möglicherweise oder möglicherweise nicht wiederholt werden.
