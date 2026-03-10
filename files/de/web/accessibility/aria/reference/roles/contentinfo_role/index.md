---
title: "ARIA: contentinfo Rolle"
short-title: contentinfo
slug: Web/Accessibility/ARIA/Reference/Roles/contentinfo_role
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

Die Rolle `contentinfo` definiert einen Footer, der identifizierende Informationen wie Urheberrechtshinweise, Navigationslinks und Datenschutzerklärungen enthält, die auf jedem Dokument einer Website zu finden sind. Dieser Abschnitt wird allgemein als Footer bezeichnet.

```html
<div role="contentinfo">
  <h2>Footer</h2>
  <!-- footer content -->
</div>
```

Dies ist ein Website-Footer. Es wird empfohlen, stattdessen das {{HTMLElement('footer')}}-Element zu verwenden:

```html
<footer>
  <h2>Footer</h2>
  <!-- footer content -->
</footer>
```

## Beschreibung

Die Rolle `contentinfo` ist [eine Landmarke](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles), die zum Identifizieren eines Seitenfooters verwendet wird. Landmarken können von unterstützender Technologie genutzt werden, um schnell große Abschnitte des Dokuments zu identifizieren und zu navigieren. Seiten sollten jeweils nur eine `contentinfo`-Landmarke auf oberster Ebene enthalten.

Jede Seite sollte nur eine `contentinfo`-Landmarke enthalten, die entweder durch die Verwendung des {{HTMLElement('footer')}}-Elements oder durch die Deklaration von `role="contentinfo"` erstellt wird. `contentinfo`-Landmarken, die in über {{HTMLElement('iframe')}} eingebetteten Inhalten vorhanden sind, zählen nicht zu diesem Limit.

> [!NOTE]
> Die Verwendung des {{HTMLElement('footer')}}-Elements übermittelt automatisch, dass ein Abschnitt die Rolle `contentinfo` hat. Entwickler sollten immer das richtige semantische HTML-Element gegenüber der Verwendung von ARIA bevorzugen und sicherstellen, dass {{HTMLElement('footer#accessibility', 'auf bekannte Probleme')}} in VoiceOver getestet wird.

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

### Sparsam verwenden

[Landmarkenrollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) dienen dazu, größere übergeordnete Abschnitte des Dokuments zu identifizieren. Die Verwendung von zu vielen Landmarkenrollen kann Bildschirmlesegeräte "störungsanfällig" machen, wodurch es schwierig ist, Layouts der Seite zu verstehen.

### Eine `contentinfo`-Landmarke pro Seite

#### Das `<body>`-Element

Es sollte nur eine `contentinfo`-Landmarke pro Dokument geben, die als unmittelbarer Nachkomme des {{HTMLElement('body')}}-Elements verwendet wird.

#### Mega-Footer

Verschachteln Sie keine zusätzlichen {{HTMLElement('footer')}}-Elemente oder `contentinfo`-Landmarken im Footer des Dokuments. Verwenden Sie stattdessen andere [Inhaltsabschnittselemente](/de/docs/Web/HTML/Reference/Elements#content_sectioning).

### Landmarken beschriften

#### Mehrere Landmarken

Wenn es in einem Dokument mehr als eine `contentinfo`-Landmarke oder ein {{HTMLElement('footer')}}-Element gibt, fügen Sie jedem Landmarke eine Beschriftung mit dem [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut hinzu. Diese Beschriftung ermöglicht es Benutzern von unterstützenden Technologien schnell zu verstehen, welchen Zweck jede Landmarke hat.

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

Bildschirmleser kündigen die Art der Rolle der Landmarke an. Deshalb müssen Sie nicht beschreiben, was die Landmarke in ihrer Beschriftung ist. Beispielsweise könnte eine Deklaration von `role="contentinfo"` mit `aria-label="Footer"` redundant als "contentinfo footer" angekündigt werden.

## Best Practices

### HTML bevorzugen

Wenn es ein unmittelbarer Nachkomme des {{HTMLElement('body')}} ist, wird die Verwendung des {{HTMLElement('footer')}}-Elements automatisch übermitteln, dass ein Abschnitt die Rolle `contentinfo` hat (abgesehen von {{HTMLElement('footer#accessibility', 'einem bekannten Problem')}} in VoiceOver). Wenn möglich, sollte `<footer>` bevorzugt werden. Beachten Sie, dass ein `footer`-Element, das innerhalb eines `article`, `aside`, `main`, `nav` oder `section` geschachtelt ist, nicht als `contentinfo` angesehen wird.

### Zusätzliche Vorteile

Bestimmte Technologien, wie Browser-Erweiterungen, können Listen aller auf einer Seite vorhandenen Landmarkenrollen erzeugen, was es auch Nicht-Screenreader-Benutzern ermöglicht, schnell große Abschnitte des Dokuments zu identifizieren und darin zu navigieren.

- [Landmarks Browser-Erweiterung](https://matatk.agrip.org.uk/landmarks/)

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('footer')}}-Element
- [Verwendung von HTML-Bereichen und Umrissen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [Barrierefreie Landmarken | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Das Footer-Element-Update | HTML5 Doctor](https://html5doctor.com/the-footer-element-update/)
