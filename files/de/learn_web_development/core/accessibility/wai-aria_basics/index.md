---
title: WAI-ARIA Grundlagen
slug: Learn_web_development/Core/Accessibility/WAI-ARIA_basics
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}

In Fortsetzung des vorherigen Artikels kann es manchmal schwierig sein, komplexe UI-Steuerelemente zu erstellen, die unsemantisches HTML und dynamisch aktualisierte JavaScript-Inhalte enthalten. WAI-ARIA ist eine Technologie, die bei solchen Problemen helfen kann, indem sie zusätzliche Semantiken hinzufügt, die Browser und unterstützende Technologien erkennen und verwenden können, um den Benutzern mitzuteilen, was vor sich geht. Hier zeigen wir, wie Sie es auf einer grundlegenden Ebene verwenden können, um die Zugänglichkeit zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und den in den vorherigen Lektionen des Moduls vermittelten bewährten Methoden zur Barrierefreiheit.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von WAI-ARIA — um Semantik für ansonsten nicht-semantisches HTML bereitzustellen, damit AT-Benutzer die ihnen präsentierten Schnittstellen verstehen können.</li>
          <li>Die grundlegende Syntax — Rollen, Eigenschaften und Zustände.</li>
          <li>Landmarks und Wegweiser.</li>
          <li>Verbesserung der Tastaturzugänglichkeit.</li>
          <li>Ankündigung dynamischer Inhaltsaktualisierungen mit Live-Bereichen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist WAI-ARIA?

Lassen Sie uns zunächst betrachten, was WAI-ARIA ist und was es für uns tun kann.

### Eine ganz neue Reihe von Problemen

Als Web-Apps komplexer und dynamischer wurden, tauchte eine neue Reihe von Barrierefreiheitsfunktionen und -problemen auf.

Beispielsweise führte HTML eine Reihe von semantischen Elementen ein, um allgemeine Seitenmerkmale zu definieren ({{htmlelement("nav")}}, {{htmlelement("footer")}}, etc.). Bevor diese verfügbar waren, verwendeten Entwickler {{htmlelement("div")}}s mit IDs oder Klassen, z. B. `<div class="nav">`, aber diese waren problematisch, da es keine einfache Möglichkeit gab, programmgesteuert ein spezifisches Seitenmerkmal wie die Hauptnavigation zu finden.

Die anfängliche Lösung bestand darin, ein oder mehrere versteckte Links oben auf der Seite hinzuzufügen, um zur Navigation (oder zu etwas anderem) zu verlinken, zum Beispiel:

```html
<a href="#hidden" class="hidden">Skip to navigation</a>
```

Aber dies ist immer noch nicht sehr präzise und kann nur verwendet werden, wenn der Screenreader vom oberen Rand der Seite liest.

Ein weiteres Beispiel sind Apps, die komplexe Steuerelemente wie Datumsauswahlelemente zum Auswählen von Daten, Schieberegler zum Auswählen von Werten usw. bereitstellen. HTML bietet spezielle Eingabetypen, um solche Steuerelemente darzustellen:

```html
<input type="date" /> <input type="range" />
```

Diese waren ursprünglich nicht gut unterstützt, und es war (und ist in geringerem Maße immer noch) schwierig, sie zu stylen, was Designer und Entwickler dazu veranlasste, benutzerdefinierte Lösungen zu bevorzugen. Anstatt diese nativen Funktionen zu verwenden, verlassen sich einige Entwickler auf JavaScript-Bibliotheken, die solche Steuerelemente als eine Reihe von verschachtelten {{htmlelement("div")}}s generieren, die dann mit CSS gestylt und mit JavaScript gesteuert werden.

Das Problem hier ist, dass sie visuell funktionieren, aber Screenreader überhaupt keinen Sinn darin sehen, was sie sind, und die Benutzer erhalten nur eine Auflistung von Elementen ohne Semantik, die beschreibt, was sie bedeuten.

### Einführung von WAI-ARIA

[WAI-ARIA](https://www.w3.org/TR/wai-aria/) (Web Accessibility Initiative - Accessible Rich Internet Applications) ist eine Spezifikation, die von der W3C geschrieben wurde und eine Reihe zusätzlicher HTML-Attribute definiert, die auf Elemente angewendet werden können, um zusätzliche Semantiken bereitzustellen und die Zugänglichkeit dort zu verbessern, wo sie fehlt. In der Spezifikation sind drei Hauptfunktionen definiert:

- [Rollen](/de/docs/Web/Accessibility/ARIA/Roles)
  - : Diese definieren, was ein Element ist oder macht. Viele davon sind sogenannte Landmark-Rollen, die weitgehend den semantischen Wert von strukturellen Elementen duplizieren, wie z. B. `role="navigation"` ({{htmlelement("nav")}}) oder `role="complementary"` ({{htmlelement("aside")}}). Einige andere Rollen beschreiben unterschiedliche Seitenstrukturen, wie `role="banner"`, `role="search"`, `role="tablist"` und `role="tabpanel"`, die häufig in Benutzeroberflächen zu finden sind.
- Eigenschaften
  - : Diese definieren Eigenschaften von Elementen, die verwendet werden können, um ihnen zusätzlich Bedeutung oder Semantik zu geben. Ein Beispiel ist `aria-required="true"`, das angibt, dass ein Formularelement ausgefüllt werden muss, um gültig zu sein, während `aria-labelledby="label"` eine ID auf ein Element setzen lässt, dann als Label für alles andere auf der Seite referenziert werden kann, einschließlich mehrerer Elemente, was mit `<label for="input">` nicht möglich ist. Zum Beispiel könnten Sie `aria-labelledby` verwenden, um anzugeben, dass eine Schlüsselbeschreibung in einem {{htmlelement("div")}} das Label für mehrere Tabellenzellen ist, oder Sie könnten es als Alternative zum Alt-Text von Bildern verwenden — vorhandene Informationen auf der Seite als Alt-Text eines Bildes angeben, anstatt es im `alt`-Attribut zu wiederholen. Ein Beispiel hierfür finden Sie unter [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives).
- Zustände
  - : Spezielle Eigenschaften, die die aktuellen Bedingungen von Elementen definieren, wie `aria-disabled="true"`, das einem Screenreader angibt, dass eine Formulareingabe derzeit deaktiviert ist. Zustände unterscheiden sich von Eigenschaften darin, dass sich Eigenschaften während des Lebenszyklus einer App nicht ändern, während Zustände normalerweise programmatisch über JavaScript geändert werden können.

Ein wichtiger Punkt zu WAI-ARIA-Attributen ist, dass sie nichts an der Webseite ändern, außer den Informationen, die über die Barrierefreiheits-APIs des Browsers offengelegt werden (wo Screenreader ihre Informationen beziehen). WAI-ARIA beeinflusst nicht die Webseiten-Struktur, den DOM usw., obwohl die Attribute nützlich sein können, um Elemente mit CSS auszuwählen.

> [!NOTE]
> Sie finden eine nützliche Liste aller ARIA-Rollen und deren Verwendung mit Links zu weiteren Informationen in der WAI-ARIA-Spezifikation — siehe [Definition of Roles](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) — auf dieser Seite — siehe [ARIA roles](/de/docs/Web/Accessibility/ARIA/Roles).
>
> Die Spezifikation enthält auch eine Liste aller Eigenschaften und Zustände mit Links zu weiteren Informationen — siehe [Definitions of States and Properties (all `aria-*` attributes)](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def).

### Wo wird WAI-ARIA unterstützt?

Dies ist keine einfache Frage zu beantworten. Es ist schwierig, eine eindeutige Ressource zu finden, die angibt, welche Funktionen von WAI-ARIA unterstützt werden und wo, weil:

1. Es gibt viele Funktionen in der WAI-ARIA-Spezifikation.
2. Es gibt viele Kombinationen von Betriebssystemen, Browsern und Screenreadern zu berücksichtigen.

Dieser letzte Punkt ist entscheidend — Um einen Screenreader überhaupt verwenden zu können, muss Ihr Betriebssystem Browser ausführen, die über die erforderlichen Barrierefreiheits-APIs verfügen, um die Informationen bereitzustellen, die Screenreader benötigen, um ihre Aufgabe zu erfüllen. Die meisten beliebten Betriebssysteme haben ein oder zwei Browser, mit denen Screenreader arbeiten können. Die Paciello Group hat einen recht aktuellen Beitrag, der Daten dazu liefert – siehe [Rough Guide: browsers, operating systems and screen reader support updated](https://www.tpgi.com/rough-guide-browsers-operating-systems-and-screen-reader-support-updated/).

Als nächstes müssen Sie sich Sorgen machen, ob die betreffenden Browser ARIA-Funktionen unterstützen und ob diese über ihre APIs bereitgestellt werden, aber auch, ob Screenreader diese Informationen erkennen und sie ihren Benutzern auf nützliche Weise präsentieren.

1. Browserunterstützung ist nahezu universell.
2. Die Unterstützung von ARIA-Funktionen durch Screenreader ist noch nicht ganz auf diesem Niveau, aber die beliebtesten Screenreader kommen dem nahe. Sie können sich einen Überblick über die Unterstützungsebenen verschaffen, indem Sie sich den Artikel von Powermapper [WAI-ARIA Screen reader compatibility](https://www.powermapper.com/tests/screen-readers/aria/) ansehen.

In diesem Artikel werden wir nicht versuchen, jede WAI-ARIA-Funktion und ihre genaue Unterstützung im Detail zu behandeln. Stattdessen werden wir die kritischsten WAI-ARIA-Funktionen behandeln, die Sie kennen sollten; wenn wir keine Unterstützungsdetails erwähnen, können Sie davon ausgehen, dass die Funktion gut unterstützt wird. Wir werden klar auf etwaige Ausnahmen hinweisen.

> [!NOTE]
> Einige JavaScript-Bibliotheken unterstützen WAI-ARIA, was bedeutet, dass, wenn sie UI-Funktionen wie komplexe Formularelemente generieren, sie ARIA-Attribute hinzufügen, um die Zugänglichkeit dieser Funktionen zu verbessern. Wenn Sie nach einer 3rd-Party-JavaScript-Lösung für die schnelle UI-Entwicklung suchen, sollten Sie die Barrierefreiheitsmerkmale seiner UI-Widgets als wichtigen Faktor bei Ihrer Entscheidung berücksichtigen. Gute Beispiele sind jQuery UI (siehe [About jQuery UI: Deep accessibility support](https://jqueryui.com/about/#deep-accessibility-support)), [ExtJS](https://www.sencha.com/products/extjs/) und [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html).

### Wann sollten Sie WAI-ARIA verwenden?

Wir haben einige der Probleme besprochen, die zur Schaffung von WAI-ARIA geführt haben, aber im Wesentlichen gibt es vier Hauptbereiche, in denen WAI-ARIA nützlich ist:

- Wegweiser/Landmarks
  - : Die Attributwerte von ARIAs [`role`](/de/docs/Web/Accessibility/ARIA/Roles) können als Landmarken fungieren, die entweder die Semantik von HTML-Elementen replizieren (z. B. {{htmlelement("nav")}}) oder über die HTML-Semantik hinausgehen, um Wegweiser für verschiedene Funktionsbereiche bereitzustellen, z.B. `search`, `tablist`, `tab`, `listbox` etc.
- Dynamische Inhaltsaktualisierungen
  - : Screenreader haben Schwierigkeiten, kontinuierlich aktualisierte Inhalte zu melden; mit ARIA können wir `aria-live` verwenden, um Screenreader-Benutzer zu informieren, wenn ein Inhaltsbereich dynamisch aktualisiert wird: zum Beispiel durch JavaScript auf der Seite, das neue Inhalte vom Server abruft und den DOM aktualisiert [fetching new content from the server and updating the DOM](/de/docs/Learn_web_development/Core/Scripting/Network_requests).
- Verbesserung der Tastaturzugänglichkeit
  - : Es gibt eingebaute HTML-Elemente, die über native Tastaturzugänglichkeit verfügen; wenn andere Elemente zusammen mit JavaScript verwendet werden, um ähnliche Interaktionen zu simulieren, leiden die Tastaturzugänglichkeit und die Berichterstattung von Screenreadern darunter. Wo dies unvermeidbar ist, bietet WAI-ARIA eine Möglichkeit, anderen Elementen den Fokus (mithilfe von `tabindex`) zu ermöglichen.
- Zugänglichkeit nicht-semantischer Steuerelemente
  - : Wenn eine Reihe von verschachtelten `<div>`s zusammen mit CSS/JavaScript verwendet wird, um eine komplexe UI-Funktion zu erstellen, oder ein natives Steuerelement erheblich erweitert/verändert wird, kann die Zugänglichkeit leiden – Screenreader-Benutzer finden es schwierig herauszufinden, was die Funktion tut, wenn keine Semantiken oder andere Hinweise vorhanden sind. In solchen Situationen kann ARIA helfen, die fehlenden Informationen mit einer Kombination aus Rollen wie `button`, `listbox` oder `tablist`, und Eigenschaften wie `aria-required` oder `aria-posinset`, um weitere Hinweise auf die Funktionalität zu geben, zur Verfügung zu stellen.

Eine Sache sollten Sie jedoch beachten — **Sie sollten WAI-ARIA nur dann verwenden, wenn Sie es benötigen!** Idealerweise sollten Sie _immer_ [native HTML-Funktionen](/de/docs/Learn_web_development/Core/Accessibility/HTML) verwenden, um die erforderliche Semantik bereitzustellen, damit Screenreader ihren Benutzern mitteilen können, was vor sich geht. Manchmal ist dies nicht möglich, entweder weil Sie nur begrenzte Kontrolle über den Code haben oder weil Sie etwas Komplexes erstellen, das kein einfaches HTML-Element zur Implementierung hat. In solchen Fällen kann WAI-ARIA ein wertvolles Werkzeug zur Verbesserung der Barrierefreiheit sein.

Aber nochmals, nur verwenden, wenn nötig!

> [!NOTE]
> Stellen Sie auch sicher, dass Sie Ihre Website mit einer Vielzahl von _echten_ Benutzern testen — nicht behinderte Personen, Personen, die Screenreader verwenden, Personen, die Tastaturnavigation nutzen, etc. Sie werden bessere Einblicke als Sie haben, wie gut es funktioniert.

## Praktische Implementierungen von WAI-ARIA

Im nächsten Abschnitt werden wir uns die vier Bereiche im Detail ansehen, zusammen mit praktischen Beispielen. Bevor Sie fortfahren, sollten Sie eine Testumgebung mit einem Screenreader einrichten, damit Sie einige der Beispiele während des Durchgehens testen können.

Siehe unseren Abschnitt über [Screenreader testen](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) für weitere Informationen.

### Wegweiser/Landmarks

WAI-ARIA fügt Browsern das [`role` attribute](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) hinzu, das es Ihnen ermöglicht, überall dort, wo es nötig ist, zusätzlichen semantischen Wert zu Elementen auf Ihrer Website hinzuzufügen. Der erste große Bereich, in dem dies nützlich ist, ist die Bereitstellung von Informationen für Screenreader, damit ihre Benutzer gemeinsame Seitenelemente finden können. Lassen Sie uns ein Beispiel ansehen — unser [website-no-roles](https://github.com/mdn/learning-area/tree/main/accessibility/aria/website-no-roles)-Beispiel ([sehen Sie es live](https://mdn.github.io/learning-area/accessibility/aria/website-no-roles/)) hat die folgende Struktur:

```html
<header>
  <h1>…</h1>
  <nav>
    <ul>
      …
    </ul>
    <form>
      <!-- search form -->
    </form>
  </nav>
</header>

<main>
  <article>…</article>
  <aside>…</aside>
</main>

<footer>…</footer>
```

Wenn Sie das Beispiel mit einem Screenreader in einem modernen Browser testen, erhalten Sie bereits einige nützliche Informationen. Beispielsweise gibt VoiceOver Folgendes:

- Auf dem `<header>`-Element — "banner, 2 items" (es enthält eine Überschrift und das `<nav>`).
- Auf dem `<nav>`-Element — "navigation 2 items" (es enthält eine Liste und ein Formular).
- Auf dem `<main>`-Element — "main 2 items" (es enthält einen Artikel und eine Seitenleiste).
- Auf dem `<aside>`-Element — "complementary 2 items" (es enthält eine Überschrift und eine Liste).
- Auf dem Suchformulareingabefeld — "Search query, insertion at beginning of text".
- Auf dem `<footer>`-Element — "footer 1 item".

Wenn Sie zum Landmarks-Menü von VoiceOver gehen (aufgerufen mit der VoiceOver-Taste + U und dann mit den Pfeiltasten durch die Menüauswahl navigieren), werden die meisten Elemente schön aufgelistet, sodass sie schnell zugänglich sind.

![Macs VoiceOver-Menü für schnelle Zugänglichkeit. Landmarks-Überschrift und Liste der Landmarks einschließlich Banner, Navigation, Hauptbereich und ergänzender Bereich.](landmarks-list.png)

Wir könnten hier jedoch noch besser werden. Das Suchformular ist ein wirklich wichtiger Wegweiser, den die Leute finden möchten; es wird jedoch nicht im Landmarks-Menü aufgeführt oder als bemerkenswerter Wegweiser behandelt, abgesehen von der Tatsache, dass das eigentliche Eingabefeld als Sucheingabe bezeichnet wird (`<input type="search">`).

Verbessern wir es durch den Einsatz einiger ARIA-Funktionen. Zuerst fügen wir einige [`role`](/de/docs/Web/Accessibility/ARIA/Roles) Attribute zu unserer HTML-Struktur hinzu. Sie können versuchen, eine Kopie unserer Originaldateien zu erstellen (siehe [`index.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/website-no-roles/index.html) und [`style.css`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/website-no-roles/style.css)), oder Sie navigieren zu unserem [website-aria-roles](https://github.com/mdn/learning-area/tree/main/accessibility/aria/website-aria-roles)-Beispiel ([siehe es live](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)), das eine Struktur wie diese hat:

```html
<header>
  <h1>…</h1>
  <nav role="navigation">
    <ul>
      …
    </ul>
    <form role="search">
      <!-- search form -->
    </form>
  </nav>
</header>

<main>
  <article role="article">…</article>
  <aside role="complementary">…</aside>
</main>

<footer>…</footer>
```

Wir haben Ihnen in diesem Beispiel auch eine zusätzliche Funktion gegeben — das {{htmlelement("input")}}-Element hat das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) erhalten, das ihm ein beschreibendes Label gibt, das von einem Screenreader vorgelesen wird, obwohl wir kein {{htmlelement("label")}}-Element hinzugefügt haben. In Fällen wie diesen ist dies sehr nützlich — ein solches Suchformular ist ein sehr häufiges, leicht erkennbares Merkmal, und das Hinzufügen eines visuellen Labels würde das Seitendesign verderben.

```html
<input
  type="search"
  name="q"
  placeholder="Search query"
  aria-label="Search through site content" />
```

Wenn wir dieses Beispiel nun mit VoiceOver betrachten, erhalten wir einige Verbesserungen:

- Das Suchformular wird sowohl beim Surfen durch die Seite als auch im Landmarks-Menü als separates Element hervorgehoben.
- Der in `aria-label` enthaltene Labeltext wird vorgelesen, wenn das Formularelement hervorgehoben wird.

Darüber hinaus ist die Site mit älteren Browsern wie IE8 zugänglicher. Es ist sinnvoll, ARIA-Rollen aus diesem Grund einzuschließen. Und wenn Ihre Website aus irgendeinem Grund nur aus `<div>`s besteht, sollten Sie unbedingt die ARIA-Rollen einbinden, um diese dringend benötigten Semantiken bereitzustellen!

Die verbesserte Semantik des Suchformulars hat gezeigt, was möglich ist, wenn ARIA über die in HTML verfügbaren Semantiken hinausgeht. Im Folgenden sehen Sie viel mehr über diese Semantiken und die Leistungsfähigkeit von ARIA-Eigenschaften/-Attributen, insbesondere im Abschnitt [Zugänglichkeit nicht-semantischer Steuerelemente](#zugänglichkeit_nicht-semantischer_steuerelemente). Schauen wir uns zunächst an, wie ARIA bei dynamischen Inhaltsaktualisierungen helfen kann.

### Dynamische Inhaltsaktualisierungen

In den DOM geladene Inhalte können leicht mit einem Screenreader abgerufen werden, von Textinhalten bis zu alternativen Texten, die Bildern angehängt sind. Traditionelle statische Websites mit hauptsächlich Textinhalten sind daher einfach barrierefrei für Menschen mit Sehbehinderungen zu gestalten.

Das Problem ist jedoch, dass moderne Webanwendungen oft nicht nur aus statischem Text bestehen — sie aktualisieren oft Teile der Seite, indem sie neue Inhalte vom Server abrufen und den DOM aktualisieren. Diese werden manchmal als **Live-Bereiche** bezeichnet.

Lassen Sie uns ein schnelles Beispiel anschauen — siehe [`aria-no-live.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-no-live.html) (auch [siehe Live-Ausführung](https://mdn.github.io/learning-area/accessibility/aria/aria-no-live.html)). In diesem Beispiel haben wir ein einfaches Zitatfeld mit zufälligen Zitaten:

```html
<section>
  <h1>Random quote</h1>
  <blockquote>
    <p></p>
  </blockquote>
</section>
```

Unser JavaScript verwendet die [`fetch()`](/de/docs/Web/API/Window/fetch)-API, um eine JSON-Datei mit einer Reihe zufälliger Zitate und ihrer Autoren zu laden. Sobald dies erledigt ist, starten wir eine [`setInterval()`](/de/docs/Web/API/Window/setInterval)-Schleife, die alle 10 Sekunden ein neues zufälliges Zitat in das Zitatfeld lädt:

```js
const intervalID = setInterval(showQuote, 10000);
```

Dies funktioniert in Ordnung, ist jedoch nicht gut für die Barrierefreiheit — die Inhaltsaktualisierung wird nicht von Screenreadern erkannt, sodass deren Benutzer nicht wissen, was vor sich geht. Dies ist ein ziemlich triviales Beispiel, aber stellen Sie sich vor, Sie erstellen eine komplexe Benutzeroberfläche mit vielen kontinuierlich aktualisierten Inhalten, wie z.B. ein Chatroom, eine Strategiespiel-Benutzeroberfläche oder eine live aktualisierte Warenkorbanzeige — es wäre unmöglich, die App effektiv zu nutzen, ohne den Benutzer auf die Aktualisierungen aufmerksam zu machen.

WAI-ARIA bietet glücklicherweise einen nützlichen Mechanismus, um diese Benachrichtigungen bereitzustellen — die [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live) Eigenschaft. Wenn Sie dies auf ein Element anwenden, wird der Screenreader den aktualisierten Inhalt vorlesen. Wie dringend der Inhalt vorgelesen wird, hängt vom Attributwert ab:

- `off`
  - : Der Standard. Aktualisierungen sollten nicht angekündigt werden.
- `polite`
  - : Aktualisierungen sollten nur angekündigt werden, wenn der Benutzer inaktiv ist.
- `assertive`
  - : Aktualisierungen sollten dem Benutzer so schnell wie möglich angekündigt werden.

Wir möchten, dass Sie eine Kopie von [`aria-no-live.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-no-live.html) und [`quotes.json`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/quotes.json) erstellen und Ihr `<section>`-Öffnungstag wie folgt aktualisieren:

```html
<section aria-live="assertive">…</section>
```

Dies wird dazu führen, dass ein Screenreader den Inhalt liest, sobald er aktualisiert wird.

> [!NOTE]
> Die meisten Browser werfen eine Sicherheitsausnahme, wenn Sie versuchen, eine HTTP-Anfrage von einer `file://` URL zu stellen, z.B. wenn Sie die Datei nur durch direktes Laden in den Browser öffnen (durch Doppelklick usw.). Siehe [wie man einen lokalen Testserver einrichtet](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

Hier gibt es eine zusätzliche Überlegung — nur das aktualisierte Textstück wird vorgelesen. Es könnte schön sein, wenn wir immer auch die Überschrift vorlesen, damit sich der Benutzer daran erinnert, was vorgelesen wird. Dazu können wir das [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) Attribut zur Sektion hinzufügen. Aktualisieren Sie Ihr `<section>`-Öffnungstag erneut so:

```html
<section aria-live="assertive" aria-atomic="true">…</section>
```

Das `aria-atomic="true"`-Attribut teilt Screenreadern mit, den gesamten Inhalt des Elements als eine atomare Einheit vorzulesen, nicht nur die aktualisierten Teile.

> [!NOTE]
> Sie können das fertige Beispiel unter [`aria-live.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-live.html) ([sehen Sie es live](https://mdn.github.io/learning-area/accessibility/aria/aria-live.html)) sehen.

> [!NOTE]
> Die [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) Eigenschaft ist auch ziemlich nützlich, um zu steuern, was vorgelesen wird, wenn ein Live-Bereich aktualisiert wird. Beispielsweise können Sie nur Inhaltszugaben oder -entfernungen vorlesen lassen.

### Verbesserung der Tastaturzugänglichkeit

Wie an einigen anderen Stellen im Modul erörtert, besteht einer der Hauptstärken von HTML in Bezug auf Barrierefreiheit in der integrierten Tastaturzugänglichkeit von Funktionen wie Schaltflächen, Formularelementen und Links. In der Regel können Sie die Tabulatortaste verwenden, um zwischen Steuerelementen zu wechseln, die Eingabetaste verwenden, um Steuerelemente auszuwählen oder zu aktivieren, und gelegentlich andere Steuerelemente entsprechend der Notwendigkeit (z.B. die Aufwärts- und Abwärtspfeiltasten, um zwischen Optionen in einer `<select>`-Box zu wechseln).

Es kommt jedoch manchmal vor, dass Sie einen Code schreiben müssen, der entweder nicht-semantische Elemente als Schaltflächen (oder andere Steuerungstypen) verwendet, oder sie für nicht ganz den richtigen Zweck fokussierbare Steuerelemente verwendet. Sie könnten versuchen, fehlerhaften Code, den Sie geerbt haben, zu beheben, oder Sie bauen eine Art komplexes Widget, das es erfordert.

In Bezug darauf, nicht-fokussierbaren Code fokussierbar zu machen, erweitert WAI-ARIA das `tabindex` Attribut um einige neue Werte:

- `tabindex="0"` — Wie bereits erwähnt, ermöglicht dieser Wert, dass nicht normalerweise fokussierbare Elemente fokussierbar werden. Dies ist der am häufigsten verwendete Wert von `tabindex`.
- `tabindex="-1"` — Dadurch können nicht normalerweise fokussierbare Elemente programmatisch in den Fokus genommen werden, z.B. über JavaScript oder als Ziel von Links.

Wir haben dies ausführlicher behandelt und eine typische Implementierung in unserem HTML-Barrierefreiheitsartikel gezeigt — siehe [Wiederherstellung der Tastaturzugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in).

### Zugänglichkeit nicht-semantischer Steuerelemente

Dies schließt an den vorherigen Abschnitt an — wenn eine Reihe von verschachtelten `<div>`s zusammen mit CSS/JavaScript verwendet wird, um ein komplexes UI-Feature zu erstellen, oder ein natives Steuerelement erheblich erweitert/verändert wird, leidet nicht nur die Tastaturzugänglichkeit, sondern auch Screenreader-Benutzer werden es schwer haben, herauszufinden, was die Funktion tut, wenn keine Semantik oder andere Hinweise vorhanden sind. In solchen Situationen kann ARIA helfen, die fehlenden Semantiken bereitzustellen.

#### Formularvalidierung und Fehlermeldungen

Besonders erwähnenswert ist das Formularbeispiel, das wir in unserem CSS- und JavaScript-Barrierefreiheits-Artikel erwähnt haben (lesen Sie [Unauffälligkeit bewahren](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#keeping_it_unobtrusive) für eine vollständige Wiederholung). Am Ende dieses Abschnitts haben wir gezeigt, dass wir einige ARIA-Attribute auf das Fehlermeldungsfeld gesetzt haben, das alle Validierungsfehler anzeigt, wenn Sie versuchen, das Formular abzusenden:

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

- [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role) verwandelt automatisch das Element, auf das es angewendet wird, in einen Live-Bereich, sodass Änderungen darin vorgelesen werden; es kennzeichnet es auch semantisch als eine Warnmeldung (wichtige zeit- und kontextabhängige Informationen) und stellt eine bessere, barrierefreie Möglichkeit dar, um eine Warnung an den Benutzer zu übermitteln (modale Dialoge wie [`alert()`](/de/docs/Web/API/Window/alert)-Aufrufe haben eine Reihe von Barrierefreiheitsproblemen; siehe [Popupfenster](https://webaim.org/techniques/javascript/other#popups) von WebAIM).
- Ein [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) Wert von `all` weist den Screenreader an, den Inhalt der Fehlermeldungsliste vorzulesen, wenn Änderungen daran vorgenommen werden, d. h. wenn Fehler hinzugefügt oder entfernt werden. Dies ist nützlich, weil der Benutzer wissen möchte, welche Fehler noch vorhanden sind, nicht nur, was hinzugefügt oder entfernt wurde.

Wir könnten weiter mit unserer ARIA-Nutzung gehen und noch mehr Validierungshilfe bereitstellen. Wie wäre es, anzugeben, ob Felder überhaupt erforderlich sind und welcher Bereich das Alter haben sollte?

1. Nehmen Sie an dieser Stelle eine Kopie unserer [`form-validation.html`](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) und [`validation.js`](https://github.com/mdn/learning-area/blob/main/accessibility/css/validation.js) Dateien und speichern Sie sie in einem lokalen Verzeichnis.
2. Öffnen Sie beide in einem Texteditor und schauen Sie sich an, wie der Code funktioniert.
3. Fügen Sie zuerst einen Absatz direkt über dem öffnenden `<form>`-Tag ein, wie den unten stehenden, und kennzeichnen Sie die beiden Formular-`<label>`s mit einem Sternchen. Normalerweise markieren wir Pflichtfelder für sehende Benutzer auf diese Weise.

   ```html
   <p>Fields marked with an asterisk (*) are required.</p>
   ```

4. Dies macht visuell Sinn, ist jedoch für Screenreader-Benutzer nicht so leicht zu verstehen. WAI-ARIA bietet glücklicherweise das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required)-Attribut, um Screenreadern Hinweise zu geben, dass Formulareingaben ausgefüllt werden müssen. Aktualisieren Sie die `<input>`-Elemente so:

   ```html
   <input type="text" name="name" id="name" aria-required="true" />

   <input type="number" name="age" id="age" aria-required="true" />
   ```

5. Wenn Sie das Beispiel jetzt speichern und mit einem Screenreader testen, sollten Sie etwas hören wie "Geben Sie Ihren Namen ein Sternchen, erforderlich, Text bearbeiten".
6. Es könnte auch nützlich sein, wenn wir Screenreader-Benutzern und sehenden Benutzern eine Vorstellung davon geben, welcher Wert für das Alter sein sollte. Dies wird oft als Tooltip oder als Platzhalter innerhalb des Formularfeldes präsentiert. WAI-ARIA enthält die [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)-Eigenschaften, um minimale und maximale Werte anzugeben, und Screenreader unterstützen die nativen `min` und `max`-Attribute. Eine weitere gut unterstützte Funktion ist das HTML `placeholder`-Attribut, das eine Nachricht enthalten kann, die im Eingabefeld angezeigt wird, wenn kein Wert eingegeben ist und von einigen Screenreadern vorgelesen wird. Aktualisieren Sie Ihre Nummerneingabe so:

   ```html
   <label for="age">Your age:</label>
   <input
     type="number"
     name="age"
     id="age"
     placeholder="Enter 1 to 150"
     required
     aria-required="true" />
   ```

Vergessen Sie nicht, für jede Eingabe ein {{HTMLelement('label')}} zu verwenden. Einige Screenreader geben den Platzhaltertext bekannt, aber die meisten tun dies nicht. Akzeptable Alternativen, um Formulareingaben mit einem zugänglichen Namen bereitzustellen, umfassen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby). Aber das `<label>`-Element mit einem `for`-Attribut ist die bevorzugte Methode, da es für alle Benutzer, einschließlich Mausklicker, nutzbar ist.

> [!NOTE]
> Sie können das fertige Beispiel live unter [`form-validation-updated.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html) sehen.

WAI-ARIA ermöglicht auch einige fortgeschrittene Techniken zur Formularbeschriftung, über das klassische {{htmlelement("label")}}-Element hinaus. Wir haben bereits darüber gesprochen, die [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Eigenschaft zu verwenden, um ein Label bereitzustellen, wenn wir nicht möchten, dass das Label für sehende Benutzer sichtbar ist (siehe Abschnitt [Wegweiser/Landmarks](#signpostslandmarks) oben). Weitere Techniken zur Beschriftung gebrauchen Eigenschaften wie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), wenn Sie ein Nicht-`<label>`-Element als Label festlegen möchten, oder mehrere Formulareingaben mit demselben Label versehen möchten, und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby), wenn Sie andere Informationen mit einer Formulareingabe verknüpfen und sie auch vorlesen lassen möchten. Siehe [Advanced Form Labeling article](https://webaim.org/techniques/forms/advanced) von WebAIM für weitere Details.

Es gibt auch viele andere nützliche Eigenschaften und Zustände, um den Status von Formularelementen anzuzeigen. Zum Beispiel kann `aria-disabled="true"` verwendet werden, um anzuzeigen, dass ein Formularelement deaktiviert ist. Viele Browser überspringen deaktivierte Formularelemente, was dazu führt, dass sie nicht von Screenreadern vorgelesen werden. In einigen Fällen wird ein deaktiviertes Element wahrgenommen, also ist es eine gute Idee, dieses Attribut hinzuzufügen, um dem Screenreader mitzuteilen, dass ein deaktiviertes Formularelement tatsächlich deaktiviert ist.

Wenn der deaktivierte Zustand einer Eingabe sich wahrscheinlich ändert, ist es auch eine gute Idee, anzugeben, wann dies geschieht und was das Ergebnis ist. Zum Beispiel gibt es in unserem [`form-validation-checkbox-disabled.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-checkbox-disabled.html)-Demo ein Kontrollkästchen, das, wenn es markiert ist, ein weiteres Formularelement aktiviert, um weitere Informationen einzugeben. Wir haben einen versteckten Live-Bereich eingerichtet:

```html
<p class="hidden-alert" aria-live="assertive"></p>
```

der mit absoluter Positionierung vor den Augen verborgen wurde. Wenn dies markiert/de-markiert wird, aktualisieren wir den Text im versteckten Live-Bereich, um Screenreader-Nutzern mitzuteilen, was das Ergebnis des Markierens dieses Kontrollkästchens ist, sowie den `aria-disabled`-Zustand und einige visuelle Indikatoren auch:

```js
function toggleMusician(bool) {
  const instrument = formItems[formItems.length - 1];
  if (bool) {
    instrument.input.disabled = false;
    instrument.label.style.color = "#000";
    instrument.input.setAttribute("aria-disabled", "false");
    hiddenAlert.textContent =
      "Instruments played field now enabled; use it to tell us what you play.";
  } else {
    instrument.input.disabled = true;
    instrument.label.style.color = "#999";
    instrument.input.setAttribute("aria-disabled", "true");
    instrument.input.removeAttribute("aria-label");
    hiddenAlert.textContent = "Instruments played field now disabled.";
  }
}
```

#### Nicht-semantische Schaltflächen als Schaltflächen beschreiben

Einige Male in diesem Kurs haben wir bereits die native Zugänglichkeit von (und die Barrierefreiheitsprobleme von der Verwendung anderer Elemente zur Vortäuschung von) Schaltflächen, Links oder Formularelementen erwähnt (siehe [UI-Kontrollen](/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls) im HTML-Barrierefreiheitsartikel und [Verbesserung der Tastaturzugänglichkeit](#verbesserung_der_tastaturzugänglichkeit) oben). Grundsätzlich können Sie die Tastaturzugänglichkeit in vielen Fällen ohne zu großen Aufwand wiederherstellen, indem Sie `tabindex` und etwas JavaScript verwenden.

Aber was ist mit Screenreadern? Sie werden die Elemente immer noch nicht als Schaltflächen sehen. Wenn wir unser [`fake-div-buttons.html`](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) Beispiel in einem Screenreader testen, werden unsere gefälschten Schaltflächen mit Phrasen wie "Click me!, group" gemeldet, was offensichtlich verwirrend ist.

Wir können dies mit einer WAI-ARIA-Rolle beheben. Erstellen Sie eine lokale Kopie von [`fake-div-buttons.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) und fügen Sie [`role="button"`](/de/docs/Web/Accessibility/ARIA/Roles/button_role) zu jeder Schaltflächen-`<div>` hinzu, beispielsweise:

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
```

Jetzt, wenn Sie dies mit einem Screenreader versuchen, werden die Schaltflächen mit Phrasen wie "Click me!, button" gemeldet. Während dies viel besser ist, müssen Sie dennoch alle nativen Schaltflächenfunktionen hinzufügen, die Benutzer erwarten, wie die Handhabung von <kbd>enter</kbd>- und Klickereignissen, wie im [`button`-Rollen-Dokumentation](/de/docs/Web/Accessibility/ARIA/Roles/button_role) erklärt.

> [!NOTE]
> Vergessen Sie jedoch nicht, dass die Verwendung des richtigen semantischen Elements, wo immer möglich, immer besser ist. Wenn Sie eine Schaltfläche erstellen möchten und ein {{htmlelement("button")}}-Element verwenden können, sollten Sie ein {{htmlelement("button")}}-Element verwenden!

#### Benutzer durch komplexe Widgets führen

Es gibt eine Reihe anderer [Rollen](/de/docs/Web/Accessibility/ARIA/Roles), die nicht-semantische Elementstrukturen als gängige UI-Funktionen kennzeichnen können, die über das hinausgehen, was in Standard-HTML verfügbar ist, zum Beispiel [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role). Sie können mehrere nützliche Beispiele in der [Deque university code library](https://dequeuniversity.com/library/) sehen, um Ihnen eine Vorstellung davon zu geben, wie solche Steuerungen barrierefrei gemacht werden können.

Lassen Sie uns ein eigenes Beispiel durchgehen. Wir kehren zu unserer einfachen, absolut positionierten Registerkartenschnittstelle zurück (siehe [Verstecken von Dingen](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#hiding_things) in unserem CSS- und JavaScript-Barrierefreiheitsartikel), das Sie in unserem [Registerkarten-Infobox-Beispiel](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) finden können (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html)).

Dieses Beispiel funktioniert so wie es ist in Bezug auf die Tastaturzugänglichkeit – Sie können problemlos durch die verschiedenen Registerkarten wechseln und diese auswählen, um die Registerkarteninhalte anzuzeigen. Es ist auch einigermaßen zugänglich — Sie können den Inhalt durchblättern und die Überschriften zur Navigation verwenden, selbst wenn Sie nicht sehen können, was auf dem Bildschirm passiert. Es ist jedoch nicht sofort ersichtlich, was der Inhalt ist — ein Screenreader meldet derzeit den Inhalt als eine Liste von Links und einigen Inhalten mit drei Überschriften. Es gibt Ihnen keine Hinweise auf die Beziehung zwischen dem Inhalt. Dem Benutzer mehr Hinweise auf die Struktur des Inhalts zu geben, ist immer gut.

Um die Dinge zu verbessern, haben wir eine neue Version des Beispiels erstellt, genannt [`aria-tabbed-info-box.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-tabbed-info-box.html) ([sehen Sie live](https://mdn.github.io/learning-area/accessibility/aria/aria-tabbed-info-box.html)). Wir haben die Struktur der Registerkartenschnittstelle wie folgt aktualisiert:

```html
<ul role="tablist">
  <li
    class="active"
    role="tab"
    aria-selected="true"
    aria-setsize="3"
    aria-posinset="1"
    tabindex="0">
    Tab 1
  </li>
  <li
    role="tab"
    aria-selected="false"
    aria-setsize="3"
    aria-posinset="2"
    tabindex="0">
    Tab 2
  </li>
  <li
    role="tab"
    aria-selected="false"
    aria-setsize="3"
    aria-posinset="3"
    tabindex="0">
    Tab 3
  </li>
</ul>
<div class="panels">
  <article class="active-panel" role="tabpanel" aria-hidden="false">…</article>
  <article role="tabpanel" aria-hidden="true">…</article>
  <article role="tabpanel" aria-hidden="true">…</article>
</div>
```

> [!NOTE]
> Die auffälligste Änderung hier ist, dass wir die im ursprünglichen Beispiel vorhandenen Links entfernt haben und nur die Listenelemente als Registerkarten verwendet haben — dies wurde gemacht, weil es die Dinge für Screenreader-Benutzer weniger verwirrend macht (die Links führen Sie nirgendwo hin; sie ändern nur die Ansicht) und es ermöglicht den Größen/Position-in-Set-Funktionen besser zu arbeiten – wenn diese auf die Links gesetzt waren, meldete der Browser immer "1 von 1" und nicht "1 von 3", "2 von 3" usw.

ARIA-Funktionen, die verwendet werden, umfassen:

- Neue Rollen — [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role), [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role)
  - : Diese identifizieren die wichtigen Bereiche der Registerkartenschnittstelle — den Container für die Registerkarten, die Registerkarten selbst und die entsprechenden Registerfeldbereiche.
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
  - : Definiert, welche Registerkarte derzeit ausgewählt ist. Wenn verschiedene Registerkarten vom Benutzer ausgewählt werden, wird der Wert dieses Attributs für die verschiedenen Registerkarten mittels JavaScript aktualisiert.
- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
  - : Verbirgt ein Element davon, von einem Screenreader vorgelesen zu werden. Wenn verschiedene Registerkarten vom Benutzer ausgewählt werden, wird der Wert dieses Attributs für die verschiedenen Registerkarten mittels JavaScript aktualisiert.
- `tabindex="0"`
  - : Da wir die Links entfernt haben, müssen wir diese Eigenschaft den Listenelementen geben, um ihnen den Tastaturfokus zu geben.
- [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize)
  - : Diese Eigenschaft erlaubt es Ihnen, Screenreader zu spezifizieren, dass ein Element Teil einer Reihe ist und wie viele Elemente die Reihe hat.
- [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset)
  - : Diese Eigenschaft erlaubt es Ihnen, zu spezifizieren, in welcher Position in einer Reihe sich ein Element befindet. Zusammen mit `aria-setsize` liefert es einem Screenreader genügend Informationen, um Ihnen zu sagen, dass Sie sich gerade auf Element "1 von 3" befinden etc. In vielen Fällen sollten Browser in der Lage sein, diese Informationen aus der Elemente-Hierarchie abzuleiten, aber es hilft sicherlich, mehr Hinweise zu geben.

In unseren Tests hat diese neue Struktur insgesamt Dinge verbessert. Die Registerkarten werden jetzt als Registerkarten erkannt (z.B. wird "tab" vom Screenreader ausgesprochen), die ausgewählte Registerkarte wird durch "ausgewählt" hervorgehoben, das zusammen mit dem Registerkartennamen vorgelesen wird, und der Screenreader sagt Ihnen auch, welche Registerkartenummer Sie gerade auswählen. Darüber hinaus, aufgrund der `aria-hidden`-Einstellungen (nur die nicht versteckte Registerkarte hat jemals `aria-hidden="false"` eingestellt), ist der nicht versteckte Inhalt der einzige, zu dem navigiert werden kann, was bedeutet, dass der ausgewählte Inhalt leichter zu finden ist.

> [!NOTE]
> Wenn es etwas gibt, das Sie ausdrücklich nicht möchten, dass Screenreader es vorlesen, können Sie ihm das Attribut `aria-hidden="true"` geben.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics/Test_your_skills:_WAI-ARIA).

## Zusammenfassung

Dieser Artikel hat keineswegs alles abgedeckt, was in WAI-ARIA verfügbar ist, aber er sollte Ihnen genügend Informationen gegeben haben, um zu verstehen, wie man es verwendet, und einige der häufigsten Muster, auf die Sie stoßen werden, die es erfordern.

## Siehe auch

- [Aria-Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Attributes): Alle `aria-*` Attribute
- [WAI-ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Roles): Kategorien von ARIA-Rollen und die auf MDN behandelten Rollen
- [ARIA in HTML](https://www.w3.org/TR/html-aria/) auf W3C: Eine Spezifikation, die jede HTML-Funktion definiert, die Barrierefreiheit (ARIA)-Semantik, die es implizit darauf anwendet durch den Browser und die WAI-ARIA-Funktionen, die Sie darauf setzen können, wenn zusätzliche Semantik erforderlich ist
- [Deque university code library](https://dequeuniversity.com/library/): Eine Bibliothek mit wirklich nützlichen und praktischen Beispielen, die komplexe UI-Steuerungen zeigt, die mit WAI-ARIA-Funktionen barrierefrei gemacht wurden
- [WAI-ARIA-Autorisierungspraktiken](https://www.w3.org/WAI/ARIA/apg/) auf W3C: Ein sehr detailliertes Designmuster von der W3C, das erklärt, wie verschiedene Arten von komplexen UI-Steuerungen implementiert werden können, während sie mithilfe von WAI-ARIA-Funktionen barrierefrei gemacht werden

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}
