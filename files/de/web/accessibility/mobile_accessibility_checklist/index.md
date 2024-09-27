---
title: Mobile Accessibility Checklist
slug: Web/Accessibility/Mobile_accessibility_checklist
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{AccessibilitySidebar}}

Dieses Dokument bietet eine prägnante Checkliste der Barrierefreiheitsanforderungen für Mobilanwendungsentwickler. Es ist dazu gedacht, kontinuierlich weiterentwickelt zu werden, wenn weitere Muster auftreten.

## Farbe

- Farbkontrast muss den [WCAG 2.1 AA-Niveau-Anforderungen](https://www.w3.org/TR/WCAG/#contrast-minimum) entsprechen:

  - Kontrastverhältnis von 4,5:1 für normalen Text (weniger als 18 Punkt oder 14 Punkt fett).
  - Kontrastverhältnis von 3:1 für großen Text (mindestens 18 Punkt oder 14 Punkt fett).

- Informationen, die über Farbe vermittelt werden, müssen auch auf andere Weise verfügbar sein (unterstrichener Text für Links usw.).

## Sichtbarkeit

- Inhalte-Verstecktechniken wie Null-Opazität, Z-Index-Reihenfolge und Platzierung außerhalb des Bildschirms dürfen nicht ausschließlich zur Handhabung der Sichtbarkeit verwendet werden.
- Alles außer dem aktuell sichtbaren Bildschirm muss _wirklich_ unsichtbar sein (besonders relevant für Single-Page-Apps mit mehreren _Karten_):

  - Verwenden Sie den `hidden`-Attribut oder `visibility`- oder `display`-Stileigenschaften.
  - Sofern nicht absolut unvermeidbar, sollte das `aria-hidden`-Attribut nicht verwendet werden.

## Fokus

- Alle aktivierbaren Elemente müssen fokussierbar sein:

  - Standardkontrollen wie Links, Schaltflächen und Formularfelder sind standardmäßig fokussierbar.
  - Nicht-Standardkontrollen müssen eine geeignete [ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Roles) zugewiesen bekommen, wie `button`, `link` oder `checkbox`.

- Der Fokus sollte in logischer Reihenfolge und konsistenter Weise gehandhabt werden.

## Textequivalente

- Ein Textequivalent muss für jedes nicht ausschließlich präsentationelle Nicht-Text-Element innerhalb der App bereitgestellt werden.

  - Verwenden Sie _alt_ und _title_ wo angemessen (lesen Sie den Beitrag von Steve Faulkner über [Verwendung des HTML-title-Attributs](https://www.tpgi.com/using-the-html-title-attribute-updated/) für einen guten Leitfaden).
  - Wenn die obigen Attribute nicht anwendbar sind, verwenden Sie geeignete [ARIA-Zustände und Eigenschaften](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def) wie `aria-label`, `aria-labelledby` oder `aria-describedby`.

- Textbilder sollten vermieden werden.
- Alle Benutzeroberflächenkomponenten mit sichtbarem Text (oder Textbildern) als Beschriftungen müssen denselben Text auch im programmatischen [Name](https://www.w3.org/TR/WCAG21/#dfn-name) der Komponente verfügbar haben. [WCAG 2.1: Label im Namen](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html).
- Alle Formularelemente müssen Beschriftungen ({{ htmlelement("label") }}-Elemente) zugunsten der Screenreader-Nutzer haben.

## Umgang mit Zuständen

- Standardkontrollen wie Optionsfelder und Kontrollkästchen werden vom Betriebssystem gehandhabt. Für andere benutzerdefinierte Kontrollen müssen Zustandsänderungen durch [ARIA-Zustände](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def) bereitgestellt werden, wie `aria-checked`, `aria-disabled`, `aria-selected`, `aria-expanded` und `aria-pressed`.

## Ausrichtung

- Inhalte sollten nicht auf eine einzige Ausrichtung wie Hoch- oder Querformat beschränkt werden, es sei denn, dies ist unumgänglich. [WCAG 2.1: Orientierung](https://www.w3.org/WAI/WCAG21/Understanding/orientation.html)

  - Beispiele, wann eine Ausrichtung unverzichtbar ist, sind eine Klavieranwendung oder ein Bankscheck.

## Allgemeine Richtlinien

- Ein Anwendungsname muss bereitgestellt werden.
- Überschriften dürfen die hierarchische Struktur nicht unterbrechen.

  ```html
  <h1>Top level heading</h1>
  <h2>Secondary heading</h2>
  <h2>Another secondary heading</h2>
  <h3>Low level heading</h3>
  ```

- [ARIA-Landmark-Rollen](https://www.washington.edu/accesstech/websites/regions/) sollten verwendet werden, um eine App- oder Dokumentstruktur zu beschreiben, wie `banner`, `complementary`, `contentinfo`, `main`, `navigation`, `search`.
- Für Berührungsereignisse stellen Sie sicher, dass Folgendes zutrifft ([WCAG 2.1: Abbruch von Zeigereingaben](https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html)):

  - Die Abwärtsbewegung sollte nicht verwendet werden, um einen Teil der Funktion auszuführen;
  - Misslingt das Obige, sollte das _Abschließen_ der Funktion beim Aufwärtsereignis erfolgen, und es muss ein Mechanismus verfügbar sein, um die Aktion vor ihrem Abschluss abzubrechen oder die Aktion nach ihrem Abschluss rückgängig zu machen;
  - Misslingt das Obige, sollte das Aufwärtsereignis in der Lage sein, jede Aktion rückgängig zu machen, die auf einem Abwärtseingang ausgelöst wurde;
  - Alles Obige darf verletzt werden, wenn es wesentlich ist, die Aktion beim Abwärtseingang auszulösen, normalerweise, um reale Erfahrungen zu simulieren oder Echtzeit-Feedback zu geben. Zum Beispiel Spielsteuerungen, Klaviertastaturen oder virtuelle Tastaturen.

- Berührungsziele müssen groß genug sein, damit der Benutzer interagieren kann (siehe die [BBC Mobile Accessibility Guidelines](https://www.bbc.co.uk/accessibility/forproducts/guides/mobile/target-touch-size) für nützliche Richtlinien zur Größe von Berührungszielen).

> [!NOTE]
> Die [Originalversion dieses Dokuments](https://yzen.github.io/firefoxos/2014/04/30/mobile-accessibility-checklist.html) wurde von [Yura Zenevich](https://yzen.github.io/) geschrieben.
