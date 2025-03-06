---
title: Checkliste zur Barrierefreiheit für mobile Anwendungen
slug: Web/Accessibility/Guides/Mobile_accessibility_checklist
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Dieses Dokument bietet eine prägnante Checkliste von Anforderungen an die Barrierefreiheit für mobile App-Entwickler. Es soll sich kontinuierlich weiterentwickeln, da mehr Muster entstehen.

## Farbe

- Der Farbkontrast muss den [WCAG 2.1 Anforderungen der Stufe AA](https://www.w3.org/TR/WCAG/#contrast-minimum) entsprechen:

  - Kontrastverhältnis von 4,5:1 für normalen Text (weniger als 18 Punkt oder 14 Punkt fett).
  - Kontrastverhältnis von 3:1 für großen Text (mindestens 18 Punkt oder 14 Punkt fett).

- Informationen, die über Farbe vermittelt werden, müssen auch auf andere Weise verfügbar sein (unterstrichener Text für Links etc.).

## Sichtbarkeit

- Techniken zum Verstecken von Inhalten wie Null-Deckkraft, z-index-Reihenfolge und Platzierung außerhalb des Bildschirms dürfen nicht ausschließlich zur Handhabung der Sichtbarkeit verwendet werden.
- Alles außer dem aktuell sichtbaren Bildschirm muss _wirklich_ unsichtbar sein (besonders relevant für Single-Page-Anwendungen mit mehreren _Karten_):

  - Verwenden Sie das `hidden`-Attribut oder `visibility`- oder `display`-Stileigenschaften.
  - Sofern nicht absolut unvermeidbar, sollte das `aria-hidden`-Attribut nicht verwendet werden.

## Fokus

- Alle aktivierbaren Elemente müssen fokussierbar sein:

  - Standardkontrollen wie Links, Schaltflächen und Formularelemente sind standardmäßig fokussierbar.
  - Nicht-standardisierte Kontrollen müssen eine passende [ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) zugewiesen bekommen, wie z. B. `button`, `link` oder `checkbox`.

- Der Fokus sollte in einer logischen Reihenfolge und konsistent gehandhabt werden.

## Textequivalente

- Für jedes nicht nur zur Präsentation dienende Nicht-Text-Element innerhalb der App muss ein Textequivalent bereitgestellt werden.

  - Verwenden Sie _alt_ und _title_, wo zutreffend (lesen Sie Steve Faulkners Artikel über [Verwendung des HTML-title-Attributs](https://www.tpgi.com/using-the-html-title-attribute-updated/) für einen guten Leitfaden).
  - Wenn die obigen Attribute nicht anwendbar sind, verwenden Sie passende [ARIA-Zustände und Eigenschaften](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def) wie `aria-label`, `aria-labelledby` oder `aria-describedby`.

- Bilder von Text sollten vermieden werden.
- Alle Benutzeroberflächenkomponenten mit sichtbarem Text (oder Bild von Text) als Bezeichnung müssen denselben Text im programmatischen [Name](https://www.w3.org/TR/WCAG21/#dfn-name) der Komponente verfügbar haben. [WCAG 2.1: Bezeichnung im Namen.](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html)
- Alle Formularelemente müssen zugunsten von Screenreader-Nutzern Bezeichnungen ({{ htmlelement("label") }}-Elemente) haben.

## Umgang mit Zuständen

- Standardkontrollen wie Optionsfelder und Kontrollkästchen werden vom Betriebssystem gehandhabt. Bei anderen benutzerdefinierten Steuerungen müssen Zustandsänderungen über [ARIA-Zustände](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def) bereitgestellt werden, wie `aria-checked`, `aria-disabled`, `aria-selected`, `aria-expanded` und `aria-pressed`.

## Orientierung

- Inhalte sollten nicht auf eine einzelne Ausrichtung wie Hoch- oder Querformat beschränkt sein, es sei denn, dies ist unerlässlich. [WCAG 2.1: Orientierung](https://www.w3.org/WAI/WCAG21/Understanding/orientation.html)

  - Beispiele, wann eine Ausrichtung unerlässlich ist, sind eine Klavieranwendung oder ein Bankcheck.

## Allgemeine Leitlinien

- Ein App-Titel muss bereitgestellt werden.
- Überschriften dürfen die hierarchische Struktur nicht brechen

  ```html
  <h1>Top level heading</h1>
  <h2>Secondary heading</h2>
  <h2>Another secondary heading</h2>
  <h3>Low level heading</h3>
  ```

- [ARIA-Landmark-Rollen](https://www.washington.edu/accesstech/websites/regions/) sollten verwendet werden, um eine App- oder Dokumentenstruktur zu beschreiben, wie z. B. `banner`, `complementary`, `contentinfo`, `main`, `navigation`, `search`.
- Bei Touch-Events stellen Sie Folgendes sicher ([WCAG 2.1: Zeigerstornierung](https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html)):

  - Das Down-Event sollte nicht zur Ausführung eines Teils der Funktion verwendet werden;
  - Sollte dies fehlschlagen, sollte der _Abschluss_ der Funktion bei dem Up-Event erfolgen und es muss ein Mechanismus verfügbar sein, um die Aktion vor ihrem Abschluss abzubrechen oder die Aktion nach ihrem Abschluss rückgängig zu machen;
  - Sollte dies fehlschlagen, sollte das Up-Event in der Lage sein, jede Aktion rückgängig zu machen, die bei einem Down-Event ausgelöst wurde;
  - Alle oben genannten Punkte dürfen verletzt werden, wenn es unerlässlich ist, die Aktion beim Down-Event auszulösen, in der Regel um reale Erfahrungen zu simulieren oder um Echtzeit-Feedback zu bieten, z. B. bei Spielkontrollen, Klaviertastaturen oder virtuellen Tastaturen.

- Berührungsziele müssen groß genug sein, damit der Benutzer damit interagieren kann (siehe die [BBC Mobile Accessibility Guidelines](https://www.bbc.co.uk/accessibility/forproducts/guides/mobile/target-touch-size) für nützliche Richtlinien zur Größe von Berührungszielen).

> [!NOTE]
> Die [Originalversion dieses Dokuments](https://yzen.github.io/firefoxos/2014/04/30/mobile-accessibility-checklist.html) wurde von [Yura Zenevich](https://yzen.github.io/) verfasst.
