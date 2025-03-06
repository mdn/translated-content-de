---
title: "ARIA: contentinfo-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/contentinfo_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `contentinfo`-Rolle definiert eine Fußzeile, die identifizierende Informationen wie Urheberrechtshinweise, Navigationslinks und Datenschutzerklärungen enthält, die in jedem Dokument auf einer Website zu finden sind. Dieser Abschnitt wird häufig als Fußzeile bezeichnet.

```html
<div role="contentinfo">
  <h2>Footer</h2>
  <!-- footer content -->
</div>
```

Dies ist eine Website-Fußzeile. Die Verwendung des {{HTMLElement('footer')}}-Elements wird stattdessen empfohlen:

```html
<footer>
  <h2>Footer</h2>
  <!-- footer content -->
</footer>
```

## Beschreibung

Die `contentinfo`-Rolle ist [ein Landmarken-Element](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles), das zur Identifizierung einer Seitenfußzeile verwendet wird. Landmarken können von unterstützenden Technologien genutzt werden, um große Abschnitte des Dokuments schnell zu identifizieren und zu navigieren. Seiten sollten nur eine `contentinfo`-Landmarke auf oberster Ebene pro Seite enthalten.

Jede Seite sollte nur eine `contentinfo`-Landmarke enthalten, die entweder durch die Verwendung des {{HTMLElement('footer')}}-Elements oder durch die Deklaration von `role="contentinfo"` erstellt wird. `contentinfo`-Landmarken, die in Inhalten eingebettet in {{HTMLElement('iframe')}} vorhanden sind, zählen nicht zu dieser Begrenzung.

> [!NOTE]
> Die Verwendung des {{HTMLElement('footer')}}-Elements kommuniziert automatisch, dass ein Abschnitt die Rolle `contentinfo` hat. Entwickler sollten immer das richtige semantische HTML-Element gegenüber der Verwendung von ARIA bevorzugen und sicherstellen, dass sie im VoiceOver auf {{HTMLElement('footer#accessibility', 'bekannte Probleme testen')}}.

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

## Barrierefreiheitsbedenken

### Sparsame Verwendung

[Landmarken-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sind dazu gedacht, größere Abschnitte des Dokuments zu identifizieren. Die Verwendung von zu vielen Landmarken-Rollen kann in Screenreadern ein "Rauschen" erzeugen, das es schwierig macht, das Gesamtlayout der Seite zu verstehen.

### Eine `contentinfo`-Landmarke pro Seite

#### Das `<body>`-Element

Es sollte nur eine `contentinfo`-Landmarke pro Dokument geben, die als unmittelbarer Nachfahre des {{HTMLElement('body')}}-Elements verwendet wird.

#### Mega-Fußzeilen

Fügen Sie keine zusätzlichen {{HTMLElement('footer')}}-Elemente oder `contentinfo`-Landmarken innerhalb der Fußzeile des Dokuments ein. Verwenden Sie stattdessen andere [Inhaltsbereichselemente](/de/docs/Web/HTML/Element#content_sectioning).

### Landmarken kennzeichnen

#### Mehrere Landmarken

Wenn es in einem Dokument mehr als eine `contentinfo`-Landmarke oder ein {{HTMLElement('footer')}}-Element gibt, geben Sie jedem Landmarken-Element ein Label mit dem [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut. Dieses Label ermöglicht es Benutzern von unterstützenden Technologien, schnell den Zweck jeder Landmarke zu verstehen.

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

Screenreader geben die Art der Rolle der Landmarke bekannt. Aus diesem Grund müssen Sie in ihrem Label nicht beschreiben, was die Landmarke ist. Zum Beispiel könnte eine Deklaration von `role="contentinfo"` mit einem `aria-label="Footer"` redundant als "contentinfo Fußzeile" angekündigt werden.

## Beste Praktiken

### Bevorzugen Sie HTML

Wenn es ein unmittelbarer Nachfahre des {{HTMLElement('body')}} ist, wird durch die Verwendung des {{HTMLElement('footer')}}-Elements automatisch kommuniziert, dass ein Abschnitt die Rolle `contentinfo` hat (außer bei {{HTMLElement('footer#accessibility', 'einem bekannten Problem')}} im VoiceOver). Wenn möglich, verwenden Sie stattdessen `<footer>`. Beachten Sie, dass ein innerhalb eines `article`, `aside`, `main`, `nav` oder `section` eingebettetes `footer`-Element nicht als `contentinfo` betrachtet wird.

### Zusätzliche Vorteile

Bestimmte Technologien wie Browser-Erweiterungen können Listen aller auf einer Seite vorhandenen Landmarken-Rollen generieren, sodass auch Nicht-Screenreader-Benutzer große Abschnitte des Dokuments schnell identifizieren und navigieren können.

- [Landmarks Browser-Erweiterung](https://matatk.agrip.org.uk/landmarks/)

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('footer')}}-Element
- [contentinfo (role): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#contentinfo)
- [Using HTML sections and outlines](/de/docs/Web/HTML/Element/Heading_Elements)
- [Using WAI-ARIA Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [The Footer Element Update | HTML5 Doctor](https://html5doctor.com/the-footer-element-update/)
