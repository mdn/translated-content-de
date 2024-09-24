---
title: "ARIA: contentinfo-Rolle"
slug: Web/Accessibility/ARIA/Roles/contentinfo_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `contentinfo`-Rolle definiert einen Footer, der Informationen wie Urheberrechtshinweise, Navigationslinks und Datenschutzerklärungen enthält, die in jedem Dokument einer Website zu finden sind. Dieser Abschnitt wird allgemein als Footer bezeichnet.

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

Die `contentinfo`-Rolle ist [ein Landmark](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles), die verwendet wird, um einen Seiten-Footer zu identifizieren. Landmarks können von unterstützenden Technologien genutzt werden, um schnell große Abschnitte des Dokuments zu identifizieren und zu navigieren. Seiten sollten nur eine `contentinfo`-Landmark-Rolle auf oberster Ebene pro Seite enthalten.

Jede Seite sollte nur eine `contentinfo`-Landmark enthalten, entweder durch Verwendung des {{HTMLElement('footer')}}-Elements oder durch Deklaration von `role="contentinfo"`. `contentinfo`-Landmarks, die im Inhalt eingebunden über {{HTMLElement('iframe')}} sind, zählen nicht zu diesem Limit.

> [!NOTE]
> Die Verwendung des {{HTMLElement('footer')}}-Elements kommuniziert automatisch, dass ein Abschnitt die Rolle `contentinfo` hat. Entwickler sollten immer die Nutzung des korrekten semantischen HTML-Elements gegenüber der Verwendung von ARIA bevorzugen, und sicherstellen, dass sie {{HTMLElement('footer#accessibility', 'auf bekannte Probleme')}} in VoiceOver testen.

## Beispiele

```html
<body>
  <!-- anderer Seiteninhalt -->

  <div role="contentinfo">
    <h2>MDN Web Docs</h2>
    <ul>
      <li><a href="#">Webtechnologien</a></li>
      <li><a href="#">Webentwicklung lernen</a></li>
      <li><a href="#">Über MDN</a></li>
      <li><a href="#">Feedback</a></li>
    </ul>
    <p>
      © 2005-2012 Mozilla und individuelle Mitwirkende. Der Inhalt ist verfügbar
      unter <a href="#">diesen Lizenzen</a>.
    </p>
  </div>
</body>
```

## Barrierefreiheitsbedenken

### Sparsam verwenden

[Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) sind dazu gedacht, größere Abschnitte des Dokuments zu identifizieren. Zu viele Landmark-Rollen können in Screenreadern „Rauschen“ erzeugen, was es erschwert, das Gesamtlayout der Seite zu verstehen.

### Eine `contentinfo`-Landmark pro Seite

#### Das `<body>`-Element

Es sollte pro Dokument nur eine `contentinfo`-Landmark geben, die als unmittelbarer Nachfahre des {{HTMLElement('body')}}-Elements verwendet wird.

#### Mega-Footer

Fügen Sie keine zusätzlichen {{HTMLElement('footer')}}-Elemente oder `contentinfo`-Landmarks innerhalb des Footers des Dokuments ein. Verwenden Sie stattdessen andere [Inhaltsgliederungselemente](/de/docs/Web/HTML/Element#content_sectioning).

### Landmarks kennzeichnen

#### Mehrere Landmarks

Wenn sich mehr als eine `contentinfo`-Landmark-Rolle oder {{HTMLElement('footer')}}-Element in einem Dokument befindet, versehen Sie jede Landmark mit einem Label mithilfe des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attributs. Dieses Label ermöglicht es Benutzern von unterstützenden Technologien, schnell den Zweck jeder Landmark zu verstehen.

```html
<body>
  …

  <article>
    <h2>Everyday Pad Thai</h2>
    <!-- Artikelinhalt -->
    <footer aria-label="Metadaten für Everyday Pad Thai">
      <p>
        Veröffentlicht am <time datetime="2021-09-23 12:17">23. September</time> durch
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

Screenreader werden die Art der Rolle der Landmark ansagen. Daher müssen Sie nicht im Label beschreiben, was die Landmark ist. Beispielsweise kann eine Deklaration von `role="contentinfo"` mit einem `aria-label="Footer"` redundant als „contentinfo footer“ angesagt werden.

## Best Practices

### Bevorzugen Sie HTML

Wenn es ein unmittelbarer Nachfahre des {{HTMLElement('body')}} ist, wird durch die Verwendung des {{HTMLElement('footer')}}-Elements automatisch kommuniziert, dass ein Abschnitt die Rolle `contentinfo` hat (abgesehen von {{HTMLElement('footer#accessibility', 'einem bekannten Problem')}} in VoiceOver). Verwenden Sie nach Möglichkeit lieber `<footer>`. Beachten Sie, dass ein `footer`-Element, das innerhalb eines `article`, `aside`, `main`, `nav` oder `section` eingebettet ist, nicht als `contentinfo` gilt.

### Zusätzliche Vorteile

Bestimmte Technologien wie Browser-Erweiterungen können Listen aller auf einer Seite vorhandenen Landmark-Rollen erstellen, sodass auch Nicht-Screenreader-Nutzer schnell große Abschnitte des Dokuments identifizieren und navigieren können.

- [Landmarks Browser-Erweiterung](https://matatk.agrip.org.uk/landmarks/)

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('footer')}}-Element
- [contentinfo (role): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#contentinfo)
- [HTML-Abschnitte und Umrisse verwenden](/de/docs/Web/HTML/Element/Heading_Elements)
- [Verwendung von WAI-ARIA Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Die Footer-Element-Aktualisierung | HTML5 Doctor](https://html5doctor.com/the-footer-element-update/)
