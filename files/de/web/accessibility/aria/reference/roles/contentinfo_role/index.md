---
title: "ARIA: contentinfo-Rolle"
short-title: contentinfo
slug: Web/Accessibility/ARIA/Reference/Roles/contentinfo_role
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Die `contentinfo`-Rolle definiert einen Footer, der Identifizierungsinformationen wie Urheberrechtsinformationen, Navigationslinks und Datenschutzerklärungen enthält, die in jedem Dokument einer Website zu finden sind. Dieser Abschnitt wird allgemein als Footer bezeichnet.

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

Die `contentinfo`-Rolle ist [eine Landmarke](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles), die verwendet wird, um einen Seiten-Footer zu identifizieren. Landmarken können von assistiven Technologien genutzt werden, um schnell große Abschnitte des Dokuments zu identifizieren und zu navigieren. Seiten sollten nur eine oberste `contentinfo`-Landmarke pro Seite enthalten.

Jede Seite sollte nur eine `contentinfo`-Landmarke enthalten, die entweder durch die Nutzung des {{HTMLElement('footer')}}-Elements erstellt wird oder durch Deklaration von `role="contentinfo"`. `contentinfo`-Landmarken, die in Inhalte eingebettet sind, die über {{HTMLElement('iframe')}} eingebettet sind, zählen nicht zu diesem Limit.

> [!NOTE]
> Die Verwendung des {{HTMLElement('footer')}}-Elements wird automatisch kommunizieren, dass ein Abschnitt die Rolle `contentinfo` hat. Entwickler sollten stets das richtige semantische HTML-Element der Verwendung von ARIA vorziehen und sicherstellen, dass sie bei VoiceOver {{HTMLElement('footer#accessibility', 'auf bekannte Probleme testen')}}.

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

## Barrierefreiheitserwägungen

### Sparsame Nutzung

[Landmarkenrollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sind dazu gedacht, größere Gesamtabschnitte des Dokuments zu identifizieren. Die Verwendung von zu vielen Landmarkenrollen kann "Geräusche" in Screenreadern erzeugen und es schwierig machen, das Gesamtlayout der Seite zu verstehen.

### Eine `contentinfo`-Landmarke pro Seite

#### Das `<body>`-Element

Es sollte nur eine `contentinfo`-Landmarke pro Dokument geben, die als unmittelbarer Nachkomme des {{HTMLElement('body')}}-Elements verwendet wird.

#### Mega-Footer

Vermeiden Sie es, zusätzliche {{HTMLElement('footer')}}-Elemente oder `contentinfo`-Landmarken innerhalb des Footers des Dokuments zu verschachteln. Verwenden Sie stattdessen andere [Inhaltsstrukturierungselemente](/de/docs/Web/HTML/Reference/Elements#content_sectioning).

### Landmarken beschriften

#### Mehrere Landmarken

Wenn es in einem Dokument mehr als eine `contentinfo`-Landmarkenrolle oder ein {{HTMLElement('footer')}}-Element gibt, geben Sie für jede Landmarke ein Label mit dem [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut an. Dieses Label ermöglicht assistiven Technologie-Nutzern ein schnelles Verständnis des Zwecks jeder Landmarke.

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

Screenreader geben die Art der Rolle der Landmarke bekannt. Deshalb müssen Sie nicht beschreiben, was die Landmarke in ihrem Label ist. Zum Beispiel kann eine Deklaration von `role="contentinfo"` mit einem `aria-label="Footer"` redundant als "contentinfo footer" angekündigt werden.

## Beste Praktiken

### Bevorzugen Sie HTML

Wenn es ein unmittelbarer Nachkomme von {{HTMLElement('body')}} ist, wird die Verwendung des {{HTMLElement('footer')}}-Elements automatisch kommunizieren, dass ein Abschnitt die Rolle `contentinfo` hat (bis auf {{HTMLElement('footer#accessibility', 'ein bekanntes Problem')}} bei VoiceOver). Wenn möglich, bevorzugen Sie die Verwendung von `<footer>`. Beachten Sie, dass ein `footer`-Element, das in einem `article`, `aside`, `main`, `nav` oder `section` verschachtelt ist, nicht als `contentinfo` gilt.

### Zusätzliche Vorteile

Bestimmte Technologien wie Browser-Erweiterungen können Listen aller auf einer Seite vorhandenen Landmarkenrollen erstellen, sodass auch Nicht-Screenreader-Nutzer schnell große Abschnitte des Dokuments identifizieren und navigieren können.

- [Landmarks Browser-Erweiterung](https://matatk.agrip.org.uk/landmarks/)

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('footer')}}-Element
- [Verwendung von HTML-Sektionen und -Gliederungen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [Verwendung von WAI-ARIA-Landmarken – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [The Footer Element Update | HTML5 Doctor](https://html5doctor.com/the-footer-element-update/)
