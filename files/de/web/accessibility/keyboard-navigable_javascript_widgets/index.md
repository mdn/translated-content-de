---
title: Mit der Tastatur navigierbare JavaScript-Widgets
slug: Web/Accessibility/Keyboard-navigable_JavaScript_widgets
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{AccessibilitySidebar}}

Webanwendungen verwenden oft JavaScript, um Desktop-Widgets wie Menüs, Baumansichten, Rich-Text-Felder und Registerkarten nachzuahmen. Diese Widgets bestehen typischerweise aus {{ HTMLElement("div") }} und {{ HTMLElement("span") }} Elementen, die von Natur aus nicht dieselbe Tastaturfunktionalität bieten wie ihre Desktop-Pendants. Dieses Dokument beschreibt Techniken, um JavaScript-Widgets über die Tastatur zugänglich zu machen.

## Verwendung von tabindex

Standardmäßig werden beim Durchsuchen einer Webseite mit der Tab-Taste nur interaktive Elemente (wie Links, Formularelemente) fokussiert. Mit dem `tabindex` [globalen Attribut](/de/docs/Web/HTML/Global_attributes) können Autoren auch andere Elemente fokussierbar machen. Bei der Einstellung auf `0` wird das Element durch die Tastatur und Skript fokussierbar. Bei der Einstellung auf `-1` wird das Element durch Skript fokussierbar, es wird jedoch nicht Teil der Tastatur-Fokusreihenfolge.

Die Reihenfolge, in der Elemente beim Verwenden der Tastatur fokussiert werden, ist standardmäßig die Quellreihenfolge. In Ausnahmefällen kann es notwendig sein, diese Reihenfolge neu zu definieren. Hierzu können Autoren `tabindex` auf eine beliebige positive Zahl setzen.

> [!WARNING]
> Vermeiden Sie die Verwendung positiver Werte für `tabindex`. Elemente mit einem positiven `tabindex` werden vor die standardmäßigen interaktiven Elemente auf der Seite gesetzt, was bedeutet, dass Seitenautoren `tabindex`-Werte für alle fokussierbaren Elemente auf der Seite setzen (und warten) müssen, wann immer sie einen oder mehrere positive Werte für `tabindex` verwenden.

Die folgende Tabelle beschreibt das Verhalten von `tabindex` in modernen Browsern:

<table>
  <thead>
    <tr>
      <th><code>tabindex</code> Attribut</th>
      <th>Fokussierbar mit Maus oder JavaScript über <code>element.focus()</code></th>
      <th>Über Tab navigierbar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>nicht vorhanden</td>
      <td>Befolgt die Plattformkonvention des Elements (ja für Formularelemente, Links, etc.).</td>
      <td>Befolgt die Plattformkonvention des Elements.</td>
    </tr>
    <tr>
      <td>Negativ (z.B. <code>tabindex="-1"</code>)</td>
      <td>Ja</td>
      <td>Nein; Der Autor muss das Element mit <a href="/de/docs/Web/API/HTMLElement/focus"><code>focus()</code></a> in Reaktion auf Pfeil- oder andere Tastenanschläge fokussieren.</td>
    </tr>
    <tr>
      <td>Null (z.B. <code>tabindex="0"</code>)</td>
      <td>Ja</td>
      <td>In der Fokusreihenfolge relativ zur Position des Elements im Dokument (beachten Sie, dass interaktive Elemente wie {{HTMLElement('a')}} dieses Verhalten standardmäßig haben und das Attribut nicht benötigen).</td>
    </tr>
    <tr>
      <td>Positiv (z.B. <code>tabindex="33"</code>)</td>
      <td>Ja</td>
      <td>Der <code>tabindex</code>-Wert bestimmt, wo dieses Element in der Tab-Reihenfolge positioniert wird: Kleinere Werte positionieren Elemente früher in der Reihenfolge als größere Werte (z.B. wird <code>tabindex="7"</code> vor <code>tabindex="11"</code> positioniert).</td>
    </tr>
  </tbody>
</table>

### Nicht-native Steuerelemente

Interaktive HTML-Elemente wie {{ HTMLElement("a") }}, {{ HTMLElement("input") }} und {{ HTMLElement("select") }} sind bereits mit der Tastatur zugänglich, sodass die Verwendung eines dieser Elemente der schnellste Weg ist, um Komponenten mit der Tastatur bedienbar zu machen.

Autoren können auch ein {{ HTMLElement("div") }} oder {{ HTMLElement("span") }} durch Hinzufügen eines `tabindex` von `0` tastaturzugänglich machen. Dies ist besonders nützlich für Komponenten, die interaktive Elemente nutzen, die es in HTML nicht gibt.

### Gruppierung von Steuerelementen

Für gruppierte Widgets wie Menüs, Registerkartenlisten, Raster oder Baumansichten sollte das Elternelement in der Tab-Reihenfolge sein (`tabindex="0"`) und jede untergeordnete Auswahl/Registerkarte/Zelle/Zeile sollte aus der Tab-Reihenfolge entfernt werden (`tabindex="-1"`). Benutzer sollten die untergeordneten Elemente mit den Pfeiltasten navigieren können. (Für eine vollständige Beschreibung der normalerweise erwarteten Tastaturunterstützung für typische Widgets siehe die [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/).)

Das folgende Beispiel zeigt diese Technik mit einem verschachtelten Menü-Steuerelement. Sobald der Tastaturfokus auf das beinhaltende {{ HTMLElement("ul") }}-Element gerichtet ist, muss der JavaScript-Entwickler den Fokus programmatisch verwalten und auf Pfeiltasten reagieren. Für Techniken zur Verwaltung des Fokus innerhalb von Widgets siehe "Fokus innerhalb von Gruppen verwalten" weiter unten.

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

Wenn ein benutzerdefiniertes Steuerelement deaktiviert wird, entfernen Sie es aus der Tab-Reihenfolge, indem Sie `tabindex="-1"` setzen. Beachten Sie, dass deaktivierte Elemente innerhalb eines gruppierten Widgets (wie Menüelemente in einem Menü) weiterhin mit den Pfeiltasten navigierbar sein sollten.

## Fokus innerhalb von Gruppen verwalten

Wenn ein Benutzer von einem Widget wegtabt und zurückkehrt, sollte der Fokus auf das spezifische Element zurückkehren, das den Fokus hatte, z.B. das Baumobjekt oder die Rasterzelle. Es gibt zwei Techniken, um dies zu erreichen:

1. Wandernder `tabindex`: Programmatisches Bewegen des Fokus
2. `aria-activedescendant`: Verwaltung eines 'virtuellen' Fokus

### Technik 1: Wandernder tabindex

Das Setzen des `tabindex` des fokussierten Elements auf "0" stellt sicher, dass, wenn der Benutzer vom Widget wegtabt und dann zurückkehrt, das ausgewählte Element innerhalb der Gruppe den Fokus behält. Beachten Sie, dass die Aktualisierung des `tabindex` auf "0" auch eine Aktualisierung des zuvor selektierten Elements auf `tabindex="-1"` erfordert. Diese Technik beinhaltet das programmatische Bewegen des Fokus in Reaktion auf Tasteneingaben und das Aktualisieren des `tabindex`, um das aktuell fokussierte Element widerzuspiegeln. Dazu:

Binden Sie einen Tastenanschlag-Handler an jedes Element in der Gruppe und wenn eine Pfeiltaste verwendet wird, um zu einem anderen Element zu wechseln:

1. programmatisch den Fokus auf das neue Element setzen,
2. den `tabindex` des fokussierten Elements auf "0" aktualisieren, und
3. den `tabindex` des zuvor fokussierten Elements auf "-1" aktualisieren.

Hier ist ein Beispiel einer [WAI-ARIA-Baumansicht](https://files.paciellogroup.com/training/WWW2012/samples/Samples/aria/tree/index.html), die diese Technik verwendet.

### Tipps

#### Verwenden Sie element.focus(), um den Fokus zu setzen

Verwenden Sie nicht `createEvent()`, `initEvent()` und `dispatchEvent()`, um den Fokus auf ein Element zu senden. DOM-Fokus-Ereignisse gelten nur als informativ: Sie werden vom System generiert, nachdem etwas fokussiert wurde, dienen aber nicht tatsächlich dazu, den Fokus zu setzen. Verwenden Sie stattdessen `element.focus()`.

#### Verwenden Sie onfocus, um den aktuellen Fokus zu verfolgen

Gehen Sie nicht davon aus, dass alle Fokusänderungen über Tasten- und Mausereignisse erfolgen: Unterstützende Technologien wie Bildschirmlesegeräte können den Fokus auf jedes fokussierbare Element setzen. Verfolgen Sie den Fokus stattdessen mit `onfocus` und `onblur`.

`onfocus` und `onblur` können jetzt mit jedem Element verwendet werden. Es gibt keine standardmäßige DOM-Schnittstelle, um den aktuellen Dokumentfokus zu erhalten. Wenn Sie den Fokusstatus nachverfolgen möchten, können Sie [document.activeElement](/de/docs/Web/API/Document/activeElement) verwenden, um das aktive Element zu erhalten. Sie können auch [document.hasFocus](/de/docs/Web/API/Document/hasFocus) verwenden, um sicherzustellen, dass der aktuelle Dokumentfokus vorliegt.

### Technik 2: `aria-activedescendant`

Diese Technik beinhaltet das Binden eines einzelnen Ereignishandlers an das Container-Widget und die Verwendung von `aria-activedescendant`, um einen "virtuellen" Fokus zu verfolgen. (Für weitere Informationen über ARIA siehe diese [Übersicht über zugängliche Webanwendungen und Widgets](/de/docs/Web/Accessibility/An_overview_of_accessible_web_applications_and_widgets).)

Die `aria-activedescendant`-Eigenschaft identifiziert die ID des untergeordneten Elements, das aktuell den virtuellen Fokus hat. Der Ereignishandler im Container muss auf Tasten- und Mausereignisse reagieren, indem er den Wert von `aria-activedescendant` aktualisiert und sicherstellt, dass das aktuelle Element entsprechend gestylt ist (z.B. mit einem Rahmen oder einer Hintergrundfarbe).

## Allgemeine Richtlinien

### Verwenden Sie onkeydown, um Tastenereignisse abzufangen, nicht onkeypress

IE löst keine `keypress`-Ereignisse für Nicht-Alphanumerische Tasten aus. Verwenden Sie stattdessen `onkeydown`.

### Stellen Sie sicher, dass Tastatur und Maus dieselbe Erfahrung bieten

Um sicherzustellen, dass die Benutzererfahrung unabhängig vom Eingabegerät konsistent ist, sollten Tastatur- und Mauseventhandler, wo angemessen, Code gemeinsam nutzen. Beispielsweise sollte der Code, der den `tabindex` oder das Styling aktualisiert, wenn Benutzer mit den Pfeiltasten navigieren, auch von Klick-Handlern verwendet werden, um dieselben Änderungen hervorzurufen.

### Stellen Sie sicher, dass eine Tastatur zur Aktivierung von Elementen verwendet werden kann

Um sicherzustellen, dass eine Tastatur zur Aktivierung von Elementen verwendet werden kann, sollten alle an Mausereignisse gebundenen Handler ebenfalls an Tastaturereignisse gebunden werden. Zum Beispiel, um sicherzustellen, dass die Eingabetaste ein Element aktiviert, wenn Sie ein `onclick="doSomething()"` haben, sollten Sie `doSomething()` auch an das Tastenereignis binden: `onkeydown="event.code === "Enter" && doSomething();"`.

### Zeichnen Sie immer den Fokus für tabindex="-1" Elemente und Elemente, die programmatisch fokussiert werden

IE zeichnet automatisch keinen Fokusrahmen für Elemente, die programmatisch fokussiert werden. Wählen Sie zwischen dem Ändern der Hintergrundfarbe über etwas wie `this.style.backgroundColor = "gray";` oder fügen Sie einen gepunkteten Rahmen über `this.style.border = "1px dotted invert"` hinzu. Im Fall des gepunkteten Rahmens müssen Sie sicherstellen, dass diese Elemente ursprünglich einen unsichtbaren 1px-Rahmen haben, damit das Element nicht wächst, wenn der Rahmenstil angewendet wird (Rahmen benötigen Platz, und IE implementiert keine CSS-Umrisse).

### Verhindern Sie, dass benutzte Tastenereignisse von der Browserfunktion ausgeführt werden

Wenn Ihr Widget ein Tastenereignis verarbeitet, verhindern Sie, dass der Browser es ebenfalls verarbeitet (zum Beispiel beim Scrollen als Reaktion auf die Pfeiltasten), indem Sie den Rückgabewert Ihres Ereignishandlers nutzen. Wenn Ihr Ereignishandler `false` zurückgibt, wird das Ereignis nicht über Ihren Handler hinaus propagiert.

Zum Beispiel:

```html
<span tabindex="-1" onkeydown="return handleKeyDown();">…</span>
```

Wenn `handleKeyDown()` `false` zurückgibt, wird das Ereignis verbraucht und verhindert, dass der Browser eine Aktion basierend auf dem Tastendruck ausführt.

### Verlassen Sie sich momentan nicht auf konsistentes Verhalten bei Tastenwiederholungen

Leider kann `onkeydown` je nach verwendetem Browser und Betriebssystem unterschiedlich wiederholen oder nicht.
