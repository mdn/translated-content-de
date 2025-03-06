---
title: "ARIA: application Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/application_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `application` Rolle zeigt unterstützenden Technologien an, dass ein Element _und all seine Kinder_ ähnlich wie eine Desktop-Anwendung behandelt werden sollten, und keine traditionellen HTML-Interpretationstechniken angewendet werden sollten. Diese Rolle sollte nur verwendet werden, um sehr dynamische und desktop-ähnliche Webanwendungen zu definieren. Die meisten mobilen und Desktop-Web-Apps _gelten nicht_ als Anwendungen für diesen Zweck.

```html
<div role="application" aria-label="…">…</div>
```

Durch die Spezifizierung der `application` Rolle wird angezeigt, dass dieses `div` Element und alle seine Nachkommen so behandelt werden sollen, als ob sie Teil einer Desktop-Anwendung sind.

## Beschreibung

Die `application` Rolle [Dokumentenstruktur Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#1._document_structure_roles), zeigt unterstützenden Technologien an, dass dieser Teil des Webinhalts Elemente enthält, die keinem anderen bekannten HTML-Element oder WAI-ARIA-Widget entsprechen. Jede Art von spezieller Interpretation von HTML-Strukturen und -Widgets sollte ausgesetzt werden, und die Kontrolle sollte vollständig an den Browser und die Webanwendung zur Handhabung von Maus-, Tastatur- oder Touch-Interaktionen übergeben werden.

In diesem Modus ist der Webautor vollständig verantwortlich für die Handhabung jedweder Tastatureingaben, Fokusmanagement und anderer Interaktionen und kann nicht davon ausgehen, dass unterstützende Technologien eine Verarbeitung auf ihrer Seite durchführen.

Wenn die durch die application Rolle umrissene Webanwendung Teile enthält, die _wie normaler Webinhalt_ behandelt werden sollten, sollte eine Rolle von [`document`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/document_role) oder [`article`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/article_role) verwendet werden, um solchen Inhalt zu umfassen.

### Hintergrund

Aus historischen Gründen, insbesondere auf Windows, haben Bildschirmlesegeräte und einige andere unterstützende Technologien (AT) traditionell den gesamten Webinhalt auf einmal vom Browser ergriffen, nachdem dieser das Laden abgeschlossen hat. Die ATs erstellen ihre eigene Repräsentation davon, die für einen sehbehinderten Benutzer am sinnvollsten ist, um den Inhalt zu konsumieren. Dies wird oft als _virtuelles Dokument_, _Durchsuchen-Modus_ oder ähnliche Begriffe bezeichnet. Das Dokument wird auf eine einspaltige Ansicht gestrafft. Ein Tastatur-Interaktionsmodell wird erstellt, das einem Textverarbeitungsprogramm sehr ähnlich ist, wo Benutzer zeilenweise, satzweise oder absatzweise lesen können. Die AT wird alle Semantiken wie Links, Überschriften, Formularelemente, Tabellen, Listen oder Bilder vorlesen.

Zusätzlich wurde im Laufe der Jahre eine Reihe von sogenannten _Schnellnavigationstasten_ etabliert, die es sehbehinderten Benutzern ermöglichen, über einen bestimmten Elementtyp durch eine Seite zu blättern. Solche Elemente umfassen üblicherweise Überschriften, Formularfelder, Listen, Tabellen, Links, Grafiken oder Landmark-Bereiche.

Damit all dies funktioniert, fangen ATs fast alle Tastatureingaben ab und verarbeiten sie selbst, ohne sie an den Browser oder andere Benutzeragenten weiterzugeben. Um mit einer Webseite interagieren zu können, wird ein Standardsatz von Widgets erkannt, bei dem beim Drücken einer bestimmten Taste (in der Regel die <kbd>Enter</kbd>-Taste) dieser Modus ausgeschaltet wird. Der Bildschirmlesegerätmodus, oft als _Formularmodus_ oder _Fokusmodus_ bezeichnet, lässt alle Tastatureingaben wieder an den Browser durch. <kbd>Escape</kbd> ist der häufigste Weg, um zum _Durchsuchen_ Modus zurückzukehren, aber innerhalb eines bestimmten `application` Abschnitts können einige Bildschirmlesegeräte andere Tasten erfordern, um diesen Modus absichtlich zu verlassen. Beispielsweise <kbd>NUMPAD PLUS</kbd> mit JAWS.

Die `application` Rolle ist dafür konzipiert, eine Möglichkeit für Widgets bereitzustellen, die nicht Teil des Standardsatzes sind, um für direkte Interaktion in ATs zugänglich zu sein, die sowohl _Durchsuchen_ als auch _Fokus_ Modi für die Interaktion mit Webinhalten verwenden. Die meisten gängigen Widgets haben erwartete Tastaturinteraktionsverhalten. Aufgrund dessen würde eine vom Webautor erstellte benutzerdefinierte Tastaturerfahrung eine verwirrende Erfahrung schaffen.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`document`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/document_role), [`article`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/article_role)
  - : Verwendet, um Teile der Anwendung anzuzeigen, die als normaler Webinhalt behandelt werden sollten
- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
  - : Wird verwendet, um den Fokus innerhalb der Anwendung zu steuern.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Wird verwendet, um den Namen der Anwendung oder den Zweck des Widgets bereitzustellen, das angezeigt wird.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Wird verwendet, um den idref eines Elements anzuzeigen, das zusätzliche Anweisungen zum Navigieren oder Bedienen dieses Elements enthält.
- [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)
  - : Wird verwendet, um der Anwendung einen aussagekräftigeren Rollentext für Bildschirmlesegeräte zu geben. Dies sollte lokalisiert sein.
- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
  - : Gibt an, dass ein Element sichtbar, aber deaktiviert ist
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
  - : Ein Verweis auf das Element, das die Fehlermeldung für das Element bereitstellt, auf dem es gesetzt ist
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Ist es auf `true` gesetzt, ist das Gruppenelement, das zu diesem Element gehört oder von ihm gesteuert wird, erweitert, oder `false`, wenn es minimiert ist.
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
  - : Gibt an, dass ein Popup, wie ein Menü oder Dialogfeld, vorhanden ist, das durch das Element ausgelöst werden kann.

### Tastatur-Interaktionen

Die Tastaturinteraktion steht vollständig unter der Kontrolle des Webautors und kann alles sein, was mit dem spezifischen Widget verknüpft ist, das implementiert wird. In einer Präsentationsanwendung könnte beispielsweise ein Widget erstellt werden, das die Pfeiltasten verwendet, um Elemente auf der Folie zu positionieren, und verwendet Audio-Feedback über eine ARIA-Live-Region, um die Position und den Überlappungsstatus mit anderen Objekten zu kommunizieren. Der Fokus wird über _aria-activedescendant_ verwaltet.

Die <kbd>Tab</kbd>, <kbd>Space</kbd> und <kbd>Enter</kbd> Tasten sowie <kbd>Escape</kbd> müssen von der Anwendung behandelt werden. Die einzige Ausnahme ist, wenn der Fokus auf ein Standard-Widget innerhalb der Anwendung gesetzt wird, das Tastaturnavigation vom Browser unterstützt, z.B. ein [input](/de/docs/Web/HTML/Element/input) Element.

### Erforderliche JavaScript-Funktionen

- keyPress
  - : Wird verwendet, um Tastatureingaben zu verarbeiten und den Fokus zu steuern
- Klick, Berührung
  - : Entsprechend für Ihr Widget handhaben
- Ändern von Attributswerten
  - : [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) wird verwendet, um den Fokus innerhalb des Anwendungscontainers zu steuern. Setzen Sie diese als Reaktion auf Tastatur- oder andere Anwendungsereignisse, die den Fokus oder den Interaktionspunkt ändern.

> [!NOTE]
> Die `application` Rolle hat kein zugehöriges HTML-Widget und ist daher vollkommen freiform. Der Autor der Anwendung muss die volle Verantwortung dafür übernehmen, die Benutzer nicht in einem Fokusfalle innerhalb von etwas festzuhalten, aus dem sie nicht herauskommen können. Alle Aspekte der Interaktion, einschließlich der Rückkehr zum normalen Webinhalt auf anderen Teilen der Seite, müssen gehandhabt werden. Verwenden Sie diese weise und vorsichtig und denken Sie daran, zu testen!

## Beispiele

Einige prominente Webanwendungen, die die application Rolle richtig verwenden oder verwendet haben, sind:

- Google Docs, Sheets und Slides
- CKEditor und TinyMCE WYSIWYG-Webeditoren, wie der auf dem Mozilla Developer Network verwendete
- Einige Teile von Gmail

## Barrierefreiheitsbedenken

Die unsachgemäße Verwendung der `application` Rolle kann ungewollt den Zugriff auf Informationen auf einer Webseite wegnehmen, daher seien Sie sehr vorsichtig bei der Verwendung. Überlegen Sie gründlich, ob Sie diese tatsächlich benötigen und nicht einfach einen Satz anderer bekannter Widgets verwenden können, um die gleiche Aufgabe zu erfüllen.

Falls verwendet, sollte die application Rolle zu dem kleinstmöglichen gemeinsamen Container hinzugefügt werden, nicht auf das `<body>`-Element, zum Beispiel. Testen Sie auch, was Sie geschrieben haben, mit unterstützender Technologie, um zu überprüfen, dass es wie beabsichtigt funktioniert.

## Spezifikationen

{{Specifications}}

## Vorrangordnung

Durch die Anwendung der `application` Rolle wird bewirkt, dass dieses und alle Nachkommenelemente dieses Elements wie Anwendungsinhalte und nicht als Webinhalte behandelt werden. Jegliche Lesemechanismen unterstützender Technologien, die für Webinhalte vorhanden sein könnten, werden nicht angewendet.

## Siehe auch

- [Wenn Sie die WAI-ARIA Rolle `application` verwenden, tun Sie dies bitte weise](https://www.marcozehe.de/if-you-use-the-wai-aria-role-application-please-do-so-wisely/) - Blogbeitrag von Marco Zehe
- [Verwendung der ARIA `application` Rolle](https://tink.uk/using-the-aria-application-role/) - von Léonie Watson
