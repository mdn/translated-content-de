---
title: Welche HTML-Funktionen fördern die Zugänglichkeit?
slug: Learn/Common_questions/Design_and_accessibility/HTML_features_for_accessibility
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Der folgende Inhalt beschreibt spezifische Funktionen von HTML, die verwendet werden sollten, um eine Webseite für Menschen mit unterschiedlichen Behinderungen zugänglicher zu machen.

## Linktext

Wenn Sie einen Link haben, der nicht selbsterklärend ist, oder wenn das Ziel des Links von einer detaillierteren Erklärung profitieren könnte, können Sie einem Link Informationen hinzufügen, indem Sie die Attribute [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) verwenden.

```html
<p>
  Ich bin wirklich schlecht darin, Linktexte zu schreiben.
  <a
    href="inept.html"
    aria-label="Warum ich schlecht darin bin, Linktexte zu schreiben: Eine Erklärung und eine Entschuldigung."
    >Klicken Sie hier</a
  >
  um mehr zu erfahren.
</p>
<p>
  Ich bin wirklich <span id="incompetence">schlecht darin, Linktexte zu schreiben</span>.
  <a href="inept.html" aria-labelledby="incompetence">Klicken Sie hier</a>, um mehr zu erfahren.
</p>
```

Beachten Sie, dass es meistens besser ist, stattdessen nützliche Linktexte zu schreiben:

```html
<p>
  Ich habe einen
  <a href="capable.html">Blogbeitrag darüber geschrieben, wie gut ich darin bin, Linktexte zu schreiben</a>.
</p>
```

## Sprunglinks

Um das Tabben zu erleichtern, können Sie einen [Sprunglink](/de/docs/Web/HTML/Element/a#skip_links) bereitstellen, der es den Benutzern ermöglicht, über Teile Ihrer Webseite zu springen. Sie könnten es jemandem ermöglichen, über eine Vielzahl von Navigationslinks zu springen, die auf jeder Seite zu finden sind. Dies ermöglicht es Tastaturnutzern, schnell über sich wiederholende Inhalte zu tabben und direkt zum Hauptinhalt der Seite zu gelangen:

```html
<header>
  <h1>Die Überschrift</h1>
  <a href="#content">Zum Inhalt springen</a>
</header>

<nav>
  <!-- Navigationsinhalte -->
</nav>

<section id="content">
  <!-- Ihr Inhalt -->
</section>
```

## Alt-Attribut für Bilder

Jedes Bild sollte ein [`alt`](/de/docs/Web/HTML/Element/img#alt)-Attribut haben. Wenn das Bild rein dekorativ ist und dem Inhalt oder Kontext des Dokuments keinen Mehrwert bietet, sollte das `alt`-Attribut vorhanden, aber leer sein. Sie können optional auch [`role="presentation"`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) hinzufügen. Alle anderen Bilder sollten ein `alt`-Attribut enthalten, das [Ersatztext zur Beschreibung des Bildes](/de/docs/Web/API/HTMLImageElement/alt#usage_notes) bereitstellt, der für Benutzer hilfreich ist, die den Rest des Inhalts lesen können, aber das Bild nicht sehen. Überlegen Sie, wie Sie jemandem, der Ihr Bild nicht laden kann, das Bild beschreiben würden: Diese Informationen sollten Sie als Wert des `alt`-Attributs einschließen.

```html
<!-- dekoratives Bild -->
<img alt="" src="blueswish.png" role="presentation" />
<img
  alt="Das Logo der Open Web Docs: Carle der Bücherwurm lächelt"
  src="carle.svg"
  role="img" />
```

Das `alt`-Attribut für denselben Inhalt kann je nach Kontext variieren. Im folgenden Beispiel wird ein animiertes GIF anstelle einer Fortschrittsleiste verwendet, um den Ladefortschritt einer Seite für ein Dokument zu zeigen, das Entwicklern beibringt, wie sie das HTML-Element [`<progress>`](/de/docs/Web/HTML/Element/progress) verwenden:

```html
<img alt="20% abgeschlossen" src="load-progress.gif" />
<img
  alt="Die Fortschrittsanzeige ist ein dicker grüner Balken links vom Daumen und eine dünne graue Linie rechts. Der Daumen ist ein Kreis mit einem Durchmesser der Höhe des grünen Bereichs."
  src="screenshot-progressbar.png" />
```

## ARIA-Rolle-Attribut

Standardmäßig haben alle semantischen Elemente in HTML eine [`role`](/de/docs/Web/Accessibility/ARIA/Roles); zum Beispiel hat `<input type="radio">` die Rolle `radio`. Nicht-semantische Elemente in HTML haben keine Rolle. ARIA-Rollen können verwendet werden, um Elemente zu beschreiben, die nicht nativ in HTML existieren, wie z.B. ein [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role)-Widget. Rollen sind auch hilfreich für neuere Elemente, die bereits existieren, aber noch nicht vollständig von Browsern unterstützt werden. Zum Beispiel sollten Sie bei der Verwendung von SVG-Bildern `role="img"` zum öffnenden Tag hinzufügen, da es einen [SVG VoiceOver Bug](https://webkit.org/b/216364) gibt, bei dem VoiceOver SVG-Bilder nicht korrekt ansagt.

```html
<img src="mdn.svg" alt="MDN-Logo" role="img" />
```
