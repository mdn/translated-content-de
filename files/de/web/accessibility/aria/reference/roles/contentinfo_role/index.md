---
title: "ARIA: contentinfo-Rolle"
short-title: contentinfo
slug: Web/Accessibility/ARIA/Reference/Roles/contentinfo_role
l10n:
  sourceCommit: b126460df717d910e92f311f0603800987ecebee
---

Die Rolle `contentinfo` kennzeichnet einen Fußbereich, der Informationen wie Copyright-Hinweise, Navigationslinks und Datenschutzhinweise enthält und auf jeder Seite einer Website zu finden ist. Dieser Bereich wird üblicherweise Footer genannt.

```html
<div role="contentinfo">
  <h2>Footer</h2>
  <!-- footer content -->
</div>
```

Dies ist ein Website-Footer. Es wird empfohlen, stattdessen das Element {{HTMLElement('footer')}} zu verwenden:

```html
<footer>
  <h2>Footer</h2>
  <!-- footer content -->
</footer>
```

## Beschreibung

Die Rolle `contentinfo` ist [eine Landmarke](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles), die den Fußbereich einer Seite kennzeichnet. Mithilfe von Landmarken können unterstützende Technologien größere Bereiche eines Dokuments schnell erkennen und ansteuern. Eine Seite sollte nur eine `contentinfo`-Landmarke auf oberster Ebene enthalten.

Jede Seite sollte nur eine `contentinfo`-Landmarke enthalten, die entweder durch das Element {{HTMLElement('footer')}} oder durch die Angabe `role="contentinfo"` erstellt wird. `contentinfo`-Landmarken in Inhalten, die über {{HTMLElement('iframe')}} eingebettet sind, zählen bei dieser Begrenzung nicht mit.

> [!NOTE]
> Das Element {{HTMLElement('footer')}} vermittelt automatisch, dass ein Bereich die Rolle `contentinfo` hat. Entwickler sollten stets das passende semantische HTML-Element der Verwendung von ARIA vorziehen und dabei {{HTMLElement('footer#accessibility', 'auf bekannte Probleme testen')}} in VoiceOver.

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

## Bedenken hinsichtlich der Barrierefreiheit

### Sparsam verwenden

[Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) dienen dazu, größere Bereiche eines Dokuments zu kennzeichnen. Zu viele Landmark-Rollen können in Screenreadern zu „Rauschen“ führen und es erschweren, den Gesamtaufbau der Seite zu verstehen.

### Eine `contentinfo`-Landmarke pro Seite

#### Das `<body>`-Element

Ein Dokument sollte nur eine `contentinfo`-Landmarke enthalten. Sie sollte ein direktes Kindelement des Elements {{HTMLElement('body')}} sein.

#### Umfangreiche Footer

Verschachteln Sie keine zusätzlichen {{HTMLElement('footer')}}-Elemente oder `contentinfo`-Landmarken innerhalb des Fußbereichs des Dokuments. Verwenden Sie stattdessen andere [Elemente zur Gliederung von Inhalten](/de/docs/Web/HTML/Reference/Elements#content_sectioning).

### Landmarken beschriften

#### Mehrere Landmarken

Wenn ein Dokument mehr als eine `contentinfo`-Landmarke oder mehr als ein {{HTMLElement('footer')}}-Element enthält, versehen Sie jede Landmarke über das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) mit einer Beschriftung. So können Benutzer unterstützender Technologien den Zweck jeder Landmarke schnell verstehen.

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

#### Überflüssige Beschreibungen

Screenreader geben den Rollentyp einer Landmarke aus. Daher muss die Beschriftung nicht beschreiben, um welche Art von Landmarke es sich handelt. Beispielsweise könnte `role="contentinfo"` zusammen mit `aria-label="Footer"` redundant als „contentinfo footer“ ausgegeben werden.

## Bewährte Vorgehensweisen

### HTML bevorzugen

Wenn das Element {{HTMLElement('footer')}} ein direktes Kindelement von {{HTMLElement('body')}} ist, vermittelt es automatisch, dass der Bereich die Rolle `contentinfo` hat (abgesehen von {{HTMLElement('footer#accessibility', 'einem bekannten Problem')}} in VoiceOver). Verwenden Sie nach Möglichkeit stattdessen `<footer>`. Beachten Sie, dass ein `footer`-Element innerhalb eines `article`-, `aside`-, `main`-, `nav`- oder `section`-Elements nicht als `contentinfo` gilt.

### Weitere Vorteile

Bestimmte Technologien wie Browser-Erweiterungen können Listen aller Landmark-Rollen auf einer Seite erstellen. Dadurch können auch Benutzer ohne Screenreader größere Bereiche des Dokuments schnell erkennen und ansteuern.

- [Landmarks-Browser-Erweiterung](https://matatk.agrip.org.uk/landmarks/)

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das Element {{HTMLElement('footer')}}
- [HTML-Abschnitte und Gliederungen verwenden](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [The Footer Element Update | HTML5 Doctor](https://html5doctor.com/the-footer-element-update/)
