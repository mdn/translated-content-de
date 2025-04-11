---
title: "ARIA: contentinfo Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/contentinfo_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Die `contentinfo`-Rolle definiert eine Fußzeile, die identifizierende Informationen wie Urheberrechtsinformationen, Navigationslinks und Datenschutzerklärungen enthält, die in jedem Dokument einer Website zu finden sind. Dieser Abschnitt wird allgemein als Fußzeile bezeichnet.

```html
<div role="contentinfo">
  <h2>Footer</h2>
  <!-- footer content -->
</div>
```

Dies ist eine Website-Fußzeile. Es wird empfohlen, stattdessen das {{HTMLElement('footer')}}-Element zu verwenden:

```html
<footer>
  <h2>Footer</h2>
  <!-- footer content -->
</footer>
```

## Beschreibung

Die `contentinfo`-Rolle ist [eine Landmarke](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles), die dazu verwendet wird, eine Seitenfußzeile zu identifizieren. Landmarken können von unterstützender Technologie genutzt werden, um schnell große Abschnitte des Dokuments zu identifizieren und zu navigieren. Seiten sollten nur eine `contentinfo`-Landmarke auf oberster Ebene pro Seite beinhalten.

Jede Seite sollte nur eine `contentinfo`-Landmarke enthalten, die entweder durch das {{HTMLElement('footer')}}-Element erstellt wird oder durch die Deklaration von `role="contentinfo"`. `contentinfo`-Landmarken, die in Inhalten eingebettet via {{HTMLElement('iframe')}} vorhanden sind, zählen nicht zu diesem Limit.

> [!NOTE]
> Die Verwendung des {{HTMLElement('footer')}}-Elements kommuniziert automatisch, dass ein Abschnitt die Rolle von `contentinfo` hat. Entwickler sollten immer das korrekte semantische HTML-Element anstelle von ARIA verwenden und darauf achten, in VoiceOver {{HTMLElement('footer#accessibility', 'auf bekannte Probleme zu testen')}}.

## Beispiele

```html
<body>
  <!-- other page content -->

  <div role="contentinfo">
    <h2>MDN Web Docs</h2>
    <ul>
      <li><a href="#">Web Technologies</a></li>
      <li><a href="#">Learn Web Development</a></li>
      <li><a href="#">About MDN</a></li>
      <li><a href="#">Feedback</a></li>
    </ul>
    <p>
      © 2005-2012 Mozilla and individual contributors. Content is available
      under <a href="#">these licenses</a>.
    </p>
  </div>
</body>
```

## Zugänglichkeitsbedenken

### Sparsame Verwendung

[Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollen dazu dienen, größere Abschnitte des Dokuments zu identifizieren. Die Verwendung von zu vielen Landmark-Rollen kann in Screenreadern „Rauschen“ erzeugen und es schwierig machen, das gesamte Layout der Seite zu verstehen.

### Eine `contentinfo`-Landmarke pro Seite

#### Das `<body>`-Element

Es sollte nur eine `contentinfo`-Landmarke pro Dokument geben, die als unmittelbarer Nachkomme des {{HTMLElement('body')}}-Elements verwendet wird.

#### Mega-Fußzeilen

Fügen Sie keine weiteren {{HTMLElement('footer')}}-Elemente oder `contentinfo`-Landmarken innerhalb der Fußzeile des Dokuments ein. Verwenden Sie stattdessen andere [Inhalt gliedernde Elemente](/de/docs/Web/HTML/Reference/Elements#content_sectioning).

### Landmarken kennzeichnen

#### Mehrere Landmarken

Wenn es mehr als eine `contentinfo`-Landmarke oder ein {{HTMLElement('footer')}}-Element in einem Dokument gibt, versehen Sie jede Landmarke mit einem Label mit dem [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut. Dieses Label ermöglicht es Nutzern unterstützender Technologien, den Zweck jeder Landmarke schnell zu verstehen.

```html
<body>
  …

  <article>
    <h2>Everyday Pad Thai</h2>
    <!-- article content -->
    <footer aria-label="Everyday Pad Thai metadata">
      <p>
        Posted on <time datetime="2021-09-23 12:17">September 23</time> by
        <a href="#">Lisa</a>.
      </p>
    </footer>
  </article>

  …

  <footer aria-label="Footer">
    <!-- footer content -->
  </footer>
</body>
```

#### Redundante Beschreibungen

Screenreader verkünden die Art der Rolle der Landmarke. Daher müssen Sie nicht in ihrem Label beschreiben, was die Landmarke ist. Zum Beispiel kann eine Deklaration von `role="contentinfo"` mit einem `aria-label="Footer"` redundant als "contentinfo footer" angekündigt werden.

## Best Practices

### Bevorzugen Sie HTML

Wenn es ein unmittelbarer Nachkomme des {{HTMLElement('body')}} ist, wird die Verwendung des {{HTMLElement('footer')}}-Elements automatisch kommunizieren, dass ein Abschnitt die Rolle `contentinfo` hat (ausgenommen {{HTMLElement('footer#accessibility', 'ein bekanntes Problem')}} in VoiceOver). Wenn möglich, bevorzugen Sie die Verwendung von `<footer>`. Beachten Sie, dass ein `footer`-Element, das in einem `article`, `aside`, `main`, `nav` oder `section` verschachtelt ist, nicht als `contentinfo` gilt.

### Zusätzliche Vorteile

Bestimmte Technologien, wie zum Beispiel Browser-Erweiterungen, können Listen aller auf einer Seite vorhandenen Landmark-Rollen generieren, sodass auch Nicht-Screenreader-Benutzer große Abschnitte des Dokuments schnell identifizieren und navigieren können.

- [Landmarks Browser-Erweiterung](https://matatk.agrip.org.uk/landmarks/)

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('footer')}}-Element
- [contentinfo (role): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#contentinfo)
- [Verwendung von HTML-Abschnitten und Umrissen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [Verwendung von WAI-ARIA Landmarken – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Zugängliche Landmarken | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Das Footer-Element Update | HTML5 Doctor](https://html5doctor.com/the-footer-element-update/)
