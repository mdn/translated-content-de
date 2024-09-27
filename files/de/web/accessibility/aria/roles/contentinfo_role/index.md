---
title: "ARIA: contentinfo role"
slug: Web/Accessibility/ARIA/Roles/contentinfo_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die Rolle `contentinfo` definiert einen Footer, der identifizierende Informationen wie Urheberrechtshinweise, Navigationslinks und Datenschutzerklärungen enthält, die in jedem Dokument einer Website zu finden sind. Dieser Abschnitt wird allgemein als Footer bezeichnet.

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

Die Rolle `contentinfo` ist [eine Landmarke](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles), die verwendet wird, um einen Seitenfooter zu identifizieren. Landmarken können von unterstützenden Technologien genutzt werden, um schnell große Abschnitte des Dokuments zu identifizieren und zu navigieren. Seiten sollten nur eine einzige oberste `contentinfo`-Landmarke pro Seite enthalten.

Jede Seite sollte nur eine `contentinfo`-Landmarke haben, die entweder durch die Verwendung des {{HTMLElement('footer')}}-Elements oder durch die Deklaration `role="contentinfo"` erstellt wird. `contentinfo`-Landmarken, die in über ein {{HTMLElement('iframe')}} eingebetteten Inhalten vorkommen, zählen nicht zu diesem Limit.

> [!NOTE]
> Die Verwendung des {{HTMLElement('footer')}}-Elements wird automatisch kommunizieren, dass ein Abschnitt die Rolle `contentinfo` hat. Entwickler sollten immer das richtige semantische HTML-Element anstelle von ARIA verwenden, um sicherzustellen, dass im VoiceOver auf bekannte Probleme getestet wird.

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

[Landmarkenrollen](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) sind dazu gedacht, größere Gesamtabschnitte des Dokuments zu identifizieren. Die Verwendung zu vieler Landmarkenrollen kann "Geräusche" in Screenreadern erzeugen und das Verständnis des gesamten Layouts der Seite erschweren.

### Eine `contentinfo`-Landmarke pro Seite

#### Das `<body>`-Element

Es sollte nur eine `contentinfo`-Landmarke pro Dokument geben, die als unmittelbarer Nachkomme des {{HTMLElement('body')}}-Elements verwendet wird.

#### Mega-Footer

Verschachteln Sie keine zusätzlichen {{HTMLElement('footer')}}-Elemente oder `contentinfo`-Landmarken im Footer des Dokuments. Verwenden Sie stattdessen andere [Inhaltsstrukturierungselemente](/de/docs/Web/HTML/Element#content_sectioning).

### Landmarken kennzeichnen

#### Mehrere Landmarken

Wenn es mehr als eine `contentinfo`-Landmarke oder ein {{HTMLElement('footer')}}-Element in einem Dokument gibt, versehen Sie jede Landmarke mit einem Label des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attributs. Dieses Label ermöglicht es Nutzern unterstützender Technologie, den Zweck jeder Landmarke schnell zu verstehen.

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

Screenreader kündigen die Art der Rolle der Landmarke an. Daher müssen Sie nicht beschreiben, was die Landmarke in ihrem Label ist. Zum Beispiel kann eine Deklaration von `role="contentinfo"` mit `aria-label="Footer"` redundant als "contentinfo footer" angekündigt werden.

## Best Practices

### HTML bevorzugen

Wenn es ein unmittelbarer Nachkomme des {{HTMLElement('body')}} ist, wird durch die Verwendung des {{HTMLElement('footer')}}-Elements automatisch kommuniziert, dass ein Abschnitt die Rolle `contentinfo` hat (außer bei {{HTMLElement('footer#accessibility', 'einem bekannten Problem')}} in VoiceOver). Wenn möglich, bevorzugen Sie die Verwendung von `<footer>`. Beachten Sie, dass ein `footer`-Element, das in einem `article`, `aside`, `main`, `nav` oder `section` verschachtelt ist, nicht als `contentinfo` betrachtet wird.

### Zusätzliche Vorteile

Bestimmte Technologien wie Browser-Erweiterungen können Listen aller Landmarkenrollen auf einer Seite generieren, sodass auch Nutzer ohne Screenreader schnell große Abschnitte des Dokuments identifizieren und navigieren können.

- [Landmarks Browser-Erweiterung](https://matatk.agrip.org.uk/landmarks/)

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('footer')}}-Element
- [contentinfo (role): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#contentinfo)
- [Verwendung von HTML-Abschnitten und Gliederungen](/de/docs/Web/HTML/Element/Heading_Elements)
- [Using WAI-ARIA Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [The Footer Element Update | HTML5 Doctor](https://html5doctor.com/the-footer-element-update/)
