---
title: "ARIA: application-Rolle"
slug: Web/Accessibility/ARIA/Roles/application_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `application`-Rolle signalisiert unterstützenden Technologien, dass ein Element _und alle seine Kinder_ wie eine Desktop-Anwendung behandelt werden sollten und keine traditionellen HTML-Interpretationstechniken verwendet werden sollten. Diese Rolle sollte nur zur Definition sehr dynamischer und Desktop-ähnlicher Web-Anwendungen genutzt werden. Die meisten mobilen und Desktop-Web-Apps werden _nicht_ für diesen Zweck als Anwendungen betrachtet.

```html
<div role="application" aria-label="…">…</div>
```

Durch die Angabe der `application`-Rolle wird signalisiert, dass dieses `div`-Element und alle seine Nachkommen so behandelt werden sollen, als wären sie Teil einer Desktop-Anwendung.

## Beschreibung

Die `application` [Dokumentenstruktur-Rolle](/de/docs/Web/Accessibility/ARIA/Roles#1._document_structure_roles) signalisiert unterstützenden Technologien, dass dieser Teil des Webinhalts Elemente enthält, die keinem anderen bekannten HTML-Element oder WAI-ARIA-Widget entsprechen. Jegliche spezielle Interpretation von HTML-Strukturen und Widgets sollte ausgesetzt werden, und die Kontrolle sollte vollständig dem Browser und der Webanwendung überlassen werden, um Maus-, Tastatur- oder Berührungsinteraktionen zu handhaben.

In diesem Modus ist der Web-Autor vollständig verantwortlich für die Handhabung jeglicher Tastatureingaben, Fokusverwaltung und anderer Interaktionen und kann nicht davon ausgehen, dass unterstützende Technologien jegliche Verarbeitung auf ihrer Seite durchführen.

Wenn die Webanwendung, die von der application-Rolle umfasst wird, Teile enthält, die _wie normaler Webinhalt_ behandelt werden sollten, sollte eine Rolle von [`document`](/de/docs/Web/Accessibility/ARIA/Roles/document_role) oder [`article`](/de/docs/Web/Accessibility/ARIA/Roles/article_role) verwendet werden, um solche Inhalte zu enthalten.

### Hintergrund

Aus historischen Gründen, insbesondere unter Windows, haben Screenreader und einige andere unterstützende Technologien (AT) traditionell die gesamten Webinhalte vom Browser auf einmal abgegriffen, nachdem diese geladen wurden. Die ATs erstellen dann ihre eigene Darstellung davon, die es einem sehbehinderten Benutzer am effizientesten ermöglicht, die Inhalte zu konsumieren. Dies wird oft als _virtuelles Dokument_, _Browse-Modus_ oder ähnliches bezeichnet. Das Dokument wird zu einer einspaltigen Ansicht verschlankt. Ein Tastatur-Interaktionsmodell wird erzeugt, das einem Textverarbeitungsprogramm sehr ähnlich ist, in dem Benutzer zeilenweise, satzweise oder absatzweise lesen können. Die AT liest jegliche Semantik wie Links, Überschriften, Formularelemente, Tabellen, Listen oder Bilder.

Zusätzlich wurde über die Jahre eine Reihe von sogenannten _Schnellnavigationstasten_ etabliert, die es sehbehinderten Benutzern ermöglicht, eine Seite nach einem bestimmten Elementtyp zu durchforsten. Solche Elemente umfassen üblicherweise Überschriften, Formularfelder, Listen, Tabellen, Links, Grafiken oder Landmarkenbereiche.

Damit all dies funktioniert, fangen ATs fast alle Tastatureingaben ab und verwenden sie selbst, ohne sie an den Browser oder andere Benutzeragenten weiterzugeben. Um mit einer Webseite interagieren zu können, wird ein Standardsatz von Widgets erkannt, der, wenn eine bestimmte Taste gedrückt wird (gewöhnlich die <kbd>Eingabetaste</kbd>), diesen Modus deaktiviert. Der Screenreader-Modus, oft _Formularmodus_ oder _Fokusmodus_ genannt, lässt alle Tastatureingaben wieder zum Browser durch. <kbd>Escape</kbd> ist die gebräuchlichste Methode, um in den _Browse_-Modus zurückzukehren, aber in einem bestimmten `application`-Abschnitt kann es erforderlich sein, dass einige Screenreader andere Tasten verwenden, um diesen Modus gezielt zu verlassen. Zum Beispiel <kbd>NUMPAD PLUS</kbd> mit JAWS.

Die `application`-Rolle ist so konzipiert, dass sie eine Möglichkeit bietet, Widgets, die nicht Teil des Standardsatzes sind, interaktiv direkt in ATs zugänglich zu machen, die sowohl _Browse_- als auch _Fokus_-Modi zur Interaktion mit Webinhalten verwenden. Die meisten gängigen Widgets haben erwartete Tastatur-Interaktionsverhalten. Deshalb würde ein benutzerdefiniertes Tastaturerlebnis eines Webautors ein verwirrendes Erlebnis schaffen.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`document`](/de/docs/Web/Accessibility/ARIA/Roles/document_role), [`article`](/de/docs/Web/Accessibility/ARIA/Roles/article_role)
  - : Wird verwendet, um Teile der Anwendung zu kennzeichnen, die wie normaler Webinhalt behandelt werden sollten.
- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant)
  - : Wird verwendet, um den Fokus innerhalb der Anwendung zu verwalten.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Wird verwendet, um den Namen der Anwendung oder den Zweck des Widgets anzugeben, das angezeigt wird.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
  - : Wird verwendet, um den idref eines Elements anzugeben, das zusätzliche Anweisungen zur Navigation oder Bedienung dieses Elements enthält.
- [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription)
  - : Wird verwendet, um der Anwendung einen aussagekräftigeren Rollentext zu geben, den Screenreader sprechen können. Dies sollte lokalisiert werden.
- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)
  - : Gibt an, dass ein Element sichtbar, aber deaktiviert ist.
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
  - : Ein Verweis auf das Element, das die Fehlermeldung für das Element bereitstellt, auf dem es festgelegt ist.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : Wenn auf `true` gesetzt, ist das Gruppierungselement, das diesem Element gehört oder von diesem gesteuert wird, erweitert, oder `false`, wenn es eingeklappt ist.
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)
  - : Gibt an, dass ein Popup, wie z.B. ein Menü oder Dialog, durch das Element ausgelöst werden kann.

### Tastaturinteraktionen

Die Tastaturinteraktion liegt vollständig in der Kontrolle des Webautors und kann mit dem spezifischen Widget, das implementiert wird, in Verbindung stehen. In einer Folienanwendung könnte zum Beispiel ein Widget erstellt werden, das die Pfeiltasten verwendet, um Elemente auf der Folie zu positionieren, und Audio-Feedback über ein ARIA-Live-Gebiet verwendet, um die Position und den Überlappungsstatus mit anderen Objekten zu kommunizieren. Der Fokus wird über _aria-activedescendant_ verwaltet.

Die Tasten <kbd>Tab</kbd>, <kbd>Leerzeichen</kbd> und <kbd>Eingabetaste</kbd> sowie <kbd>Escape</kbd> müssen von der Anwendung gehandhabt werden. Die einzige Ausnahme besteht, wenn der Fokus auf ein Standard-Widget innerhalb der Anwendung gesetzt ist, das Tastaturnavigation vom Browser unterstützt, z. B. ein [input](/de/docs/Web/HTML/Element/input)-Element.

### Erforderliche JavaScript-Funktionen

- keyPress
  - : Wird zur Handhabung von Tastatureingaben und zur Steuerung des Fokus verwendet.
- Klick, Berührung
  - : Werden individuell entsprechend des Widgets behandelt.
- Ändern von Attributwerten
  - : [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) wird genutzt, um den Fokus innerhalb des Anwendungskontextes zu verwalten. Es wird als Reaktion auf Tastatur- oder andere Anwendungsereignisse, die den Fokus oder den Interaktionspunkt verändern, gesetzt.

> [!NOTE]
> Die `application`-Rolle hat kein zugehöriges HTML-Widget und ist daher völlig frei gestaltet. Der Autor der Anwendung trägt die volle Verantwortung dafür, dass Benutzer nicht in einer Fokusfalle stecken bleiben, aus der sie nicht entkommen können. Alle Aspekte der Interaktion, einschließlich der Rückkehr zu den regulären Inhalten auf anderen Teilen der Seite, müssen gehandhabt werden. Verwenden Sie sie weise und vorsichtig und denken Sie daran, zu testen!

## Beispiele

Einige bekannte Webanwendungen, die die application-Rolle ordnungsgemäß nutzen oder genutzt haben, sind:

- Google Docs, Tabellen und Präsentationen
- CKEditor und TinyMCE WYSIWYG-Webeditoren, wie der auf dem Mozilla Developer Network verwendete
- Einige Teile von Gmail

## Barrierefreiheit Bedenken

Die unsachgemäße Verwendung der `application`-Rolle kann ungewollt den Zugriff auf Informationen auf einer Webseite verhindern, seien Sie daher sehr achtsam bei der Nutzung. Überlegen Sie sorgfältig, ob Sie sie wirklich benötigen und nicht einfach eine Reihe anderer bekannter Widgets zur Erreichung des gleichen Ziels verwenden können.

Wenn sie verwendet wird, sollte die application-Rolle dem kleinstmöglichen gemeinsamen Container hinzugefügt werden, z. B. nicht dem `<body>`-Element. Achten Sie auch darauf, das Geschriebene mit unterstützender Technologie zu testen, um zu überprüfen, ob es wie beabsichtigt funktioniert.

## Spezifikationen

{{Specifications}}

## Vorrangordnung

Durch das Anwenden der `application`-Rolle werden dieses und alle untergeordneten Elemente dieses Elements wie Anwendungsinhalte und nicht als Webinhalte behandelt. Jegliche Lese-Mechanismen unterstützender Technologien für Webinhalte gelten nicht.

## Siehe auch

- [Wenn Sie die WAI-ARIA-Rolle `application` verwenden, tun Sie dies bitte weise](https://www.marcozehe.de/if-you-use-the-wai-aria-role-application-please-do-so-wisely/) - Blog-Post von Marco Zehe
- [Verwendung der ARIA `application`-Rolle](https://tink.uk/using-the-aria-application-role/) - von Léonie Watson
