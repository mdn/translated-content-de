---
title: "ARIA: contentinfo Rolle"
short-title: contentinfo
slug: Web/Accessibility/ARIA/Reference/Roles/contentinfo_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `contentinfo` Rolle definiert eine Fußzeile, die identifizierende Informationen wie Copyright-Informationen, Navigationslinks und Datenschutzerklärungen enthält, die in jedem Dokument innerhalb einer Website zu finden sind. Dieser Abschnitt wird allgemein als Fußzeile bezeichnet.

```html
<div role="contentinfo">
  <h2>Footer</h2>
  <!-- footer content -->
</div>
```

Dies ist eine Website-Fußzeile. Die Verwendung des {{HTMLElement('footer')}} Elements wird stattdessen empfohlen:

```html
<footer>
  <h2>Footer</h2>
  <!-- footer content -->
</footer>
```

## Beschreibung

Die `contentinfo` Rolle ist [ein Orientierungspunkt](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles), der zur Identifizierung einer Seitenfußzeile verwendet wird. Orientierungspunkte können von assistiven Technologien genutzt werden, um schnell große Dokumentenabschnitte zu identifizieren und zu navigieren. Seiten sollten nur ein `contentinfo` Orientierungspunkt auf Top-Level pro Seite enthalten.

Jede Seite sollte nur einen `contentinfo` Orientierungspunkt enthalten, der entweder durch die Verwendung des {{HTMLElement('footer')}} Elements oder durch die Deklaration von `role="contentinfo"` erstellt wird. `contentinfo` Orientierungspunkte, die in Inhalte eingebettet über {{HTMLElement('iframe')}} vorhanden sind, zählen nicht zu diesem Limit.

> [!NOTE]
> Die Verwendung des {{HTMLElement('footer')}} Elements kommuniziert automatisch, dass ein Abschnitt die Rolle `contentinfo` hat. Entwickler sollten stets das korrekte semantische HTML-Element anstatt ARIA verwenden und sicherstellen, dass sie in VoiceOver {{HTMLElement('footer#accessibility', 'auf bekannte Probleme testen')}}.

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

## Barrierefreiheit Bedenken

### Sparsam verwenden

[Orientierungspunkte](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sind dazu gedacht, größere allgemeine Abschnitte eines Dokuments zu identifizieren. Die Verwendung zu vieler Orientierungspunkte kann "Geräusche" in Bildschirmlesegeräten erzeugen, was das Verständnis des allgemeinen Seitenlayouts erschwert.

### Ein `contentinfo` Orientierungspunkt pro Seite

#### Das `<body>` Element

Es sollte in jedem Dokument nur ein `contentinfo` Orientierungspunkt geben, der als unmittelbarer Nachfahre des {{HTMLElement('body')}} Elements verwendet wird.

#### Mega-Fußzeilen

Fügen Sie keine zusätzlichen {{HTMLElement('footer')}} Elemente oder `contentinfo` Orientierungspunkte in die Fußzeile des Dokuments ein. Verwenden Sie stattdessen andere [Inhaltsstrukturierungselemente](/de/docs/Web/HTML/Reference/Elements#content_sectioning).

### Orientierungspunkte kennzeichnen

#### Mehrere Orientierungspunkte

Wenn es mehr als eine `contentinfo` Rolle oder ein {{HTMLElement('footer')}} Element in einem Dokument gibt, versehen Sie jeden Orientierungspunkt mit einem Label mit dem [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Attribut. Dieses Label ermöglicht es Benutzern von assistiven Technologien, schnell den Zweck jedes Orientierungspunkts zu verstehen.

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

Bildschirmlesegeräte kündigen die Art der Rolle des Orientierungspunkts an. Aus diesem Grund ist es nicht erforderlich, im Label zu beschreiben, was der Orientierungspunkt ist. Zum Beispiel kann eine Deklaration von `role="contentinfo"` mit einem `aria-label="Footer"` redundant als „contentinfo footer“ angekündigt werden.

## Beste Praktiken

### Bevorzugen Sie HTML

Wenn es ein unmittelbarer Nachkomme des {{HTMLElement('body')}} ist, wird durch die Verwendung des {{HTMLElement('footer')}} Elements automatisch kommuniziert, dass ein Abschnitt die Rolle `contentinfo` hat (mit Ausnahme eines {{HTMLElement('footer#accessibility', 'bekannten Problems')}} in VoiceOver). Wenn möglich, bevorzugen Sie es, `<footer>` zu verwenden. Beachten Sie, dass ein `footer` Element, das innerhalb eines `article`, `aside`, `main`, `nav` oder `section` verschachtelt ist, nicht als `contentinfo` betrachtet wird.

### Zusätzliche Vorteile

Bestimmte Technologien wie Browser-Erweiterungen können Listen aller auf einer Seite vorhandenen Orientierungspunkte erzeugen, sodass auch Nicht-Bildschirmleser-Benutzer schnell große Dokumentenabschnitte identifizieren und navigieren können.

- [Landmarks Browser-Erweiterung](https://matatk.agrip.org.uk/landmarks/)

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('footer')}} Element
- [contentinfo (role): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#contentinfo)
- [Using HTML sections and outlines](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [Using WAI-ARIA Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [The Footer Element Update | HTML5 Doctor](https://html5doctor.com/the-footer-element-update/)
