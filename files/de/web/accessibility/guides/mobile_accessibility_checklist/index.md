---
title: Checkliste für mobile Barrierefreiheit
slug: Web/Accessibility/Guides/Mobile_accessibility_checklist
l10n:
  sourceCommit: a06a27b6f8eea66b66d848517aab0815a170c7cc
---

Dieses Dokument bietet eine prägnante Checkliste der Barrierefreiheitsanforderungen für mobile App-Entwickler. Es ist dazu gedacht, sich kontinuierlich weiterzuentwickeln, sobald mehr Muster auftauchen.

## Farbe

- Der Farbkontrast muss den [WCAG 2.2 AA-Standardanforderungen](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum) entsprechen:

  - Kontrastverhältnis von 4,5:1 für normalen Text (weniger als 18 Punkt oder 14 Punkt fett).
  - Kontrastverhältnis von 3:1 für großen Text (mindestens 18 Punkt oder 14 Punkt fett).

- Informationen, die durch Farbe vermittelt werden, müssen auch auf andere Weise verfügbar sein (unterstrichener Text für Links etc.).

## Sichtbarkeit

- Techniken zum Verbergen von Inhalten wie Null-Deckkraft, Z-Index-Reihenfolge und Platzierung außerhalb des Bildschirms dürfen nicht ausschließlich zur Handhabung der Sichtbarkeit verwendet werden.
- Alles andere als der aktuell sichtbare Bildschirm muss _wirklich_ unsichtbar sein (besonders relevant für Single-Page-Apps mit mehreren _Karten_):

  - Verwenden Sie das `hidden`-Attribut oder `visibility`- oder `display`-Stil-Eigenschaften.
  - Es sei denn, es ist absolut unvermeidlich, sollte das `aria-hidden`-Attribut nicht verwendet werden.

## Fokus

- Alle aktivierbaren Elemente müssen fokussierbar sein:

  - Standard-Steuerelemente wie Links, Schaltflächen und Formularfelder sind standardmäßig fokussierbar.
  - Nicht-standardmäßige Steuerelemente müssen eine geeignete [ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) zugewiesen bekommen, wie `button`, `link` oder `checkbox`.

- Der Fokus sollte in einer logischen Reihenfolge und konsistenter Weise gehandhabt werden.

## Textequivalente

- Jedes nicht rein präsentative, nicht-textuelle Element innerhalb der App muss ein Textequivalent haben.

  - Verwenden Sie _alt_ und _title_, wo es angebracht ist (lesen Sie Steve Faulkners Beitrag über [Die Verwendung des HTML-Titel-Attributs](https://www.tpgi.com/using-the-html-title-attribute-updated/) für einen guten Leitfaden.)
  - Wenn die obigen Attribute nicht anwendbar sind, verwenden Sie geeignete [ARIA-Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes) wie `aria-label`, `aria-labelledby` oder `aria-describedby`.

- Bilder von Text müssen vermieden werden.
- Alle Benutzerschnittstellenkomponenten mit sichtbarem Text (oder Textabbild) als Bezeichnungen müssen den gleichen Text im programmatischen [Namen](https://w3c.github.io/wcag/guidelines/22/#dfn-name) der Komponente haben. [WCAG 2.1: Beschriftung im Namen.](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html)
- Alle Formularsteuerelemente müssen Bezeichnungen ({{ htmlelement("label") }}-Elemente) zum Nutzen von Screenreader-Nutzern haben.

## Zustandsbehandlung

- Standard-Steuerelemente wie Optionsfelder und Kontrollkästchen werden vom Betriebssystem gehandhabt. Für andere benutzerdefinierte Steuerelemente müssen Zustandsänderungen über [ARIA-Zustände](https://w3c.github.io/aria/#state_prop_def) wie `aria-checked`, `aria-disabled`, `aria-selected`, `aria-expanded` und `aria-pressed` bereitgestellt werden.

## Ausrichtung

- Inhalte sollten nicht auf eine einzige Ausrichtung beschränkt sein, beispielsweise Hoch- oder Querformat, es sei denn, es ist unverzichtbar. [WCAG 2.1: Ausrichtung](https://www.w3.org/WAI/WCAG21/Understanding/orientation.html)

  - Beispiele für unverzichtbare Ausrichtungen sind eine Klavier-App oder ein Scheck.

## Allgemeine Richtlinien

- Ein App-Titel muss bereitgestellt werden.
- Überschriften dürfen die hierarchische Struktur nicht unterbrechen.

  ```html
  <h1>Top level heading</h1>
  <h2>Secondary heading</h2>
  <h2>Another secondary heading</h2>
  <h3>Low level heading</h3>
  ```

- [ARIA-Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollten zur Beschreibung der Struktur einer App oder eines Dokuments verwendet werden, wie `banner`, `complementary`, `contentinfo`, `main`, `navigation`, `search`.
- Stellen Sie bei Touch-Ereignissen sicher, dass Folgendes gilt ([WCAG 2.1: Zeiger-Abbruch](https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html)):

  - Das Down-Ereignis sollte nicht zur Ausführung eines Teils der Funktion verwendet werden;
  - Sollte der obige Punkt missachtet werden, sollte die _Abschluss_ der Funktion auf dem Up-Ereignis erfolgen, und es sollte eine Möglichkeit geben, die Aktion vor ihrem Abschluss abzubrechen oder die Aktion nach ihrem Abschluss rückgängig zu machen;
  - Wird der obige Punkt missachtet, sollte das Up-Ereignis in der Lage sein, jede Aktion rückgängig zu machen, die bei einem Down-Ereignis ausgelöst wurde;
  - Alle obigen Punkte dürfen dann verletzt werden, wenn es unverzichtbar ist, die Aktion beim Down-Ereignis auszulösen, normalerweise um reale Erfahrungen zu simulieren oder um Echtzeit-Feedback zu geben. Beispiele sind Steuerungen in Spielen, Klaviertastaturen oder virtuelle Tastaturen.

- Touch-Ziele müssen groß genug sein, damit der Benutzer damit interagieren kann (siehe die [BBC Mobile Accessibility Guidelines](https://www.bbc.co.uk/accessibility/forproducts/guides/mobile/target-touch-size) für nützliche Richtlinien zur Größe von Berührungszielen).

> [!NOTE]
> Die [Originalversion dieses Dokuments](https://yzen.github.io/firefoxos/2014/04/30/mobile-accessibility-checklist.html) wurde von [Yura Zenevich](https://yzen.github.io/) geschrieben.
