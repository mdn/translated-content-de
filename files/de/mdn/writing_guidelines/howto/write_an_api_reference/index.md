---
title: Anleitung zum Schreiben einer API-Referenz
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{MDNSidebar}}

Dieser Leitfaden führt Sie durch alles, was Sie wissen müssen, um eine API-Referenz auf MDN zu schreiben.

## Vorbereitung

Bevor Sie mit der Dokumentation einer API beginnen, gibt es einige Dinge, die Sie vorab vorbereiten und planen sollten, bevor Sie mit dem eigentlichen Schreiben beginnen.

### Vorausgesetztes Wissen

Es wird angenommen, dass Sie, bevor Sie diesen Leitfaden lesen, ein angemessenes Wissen über folgende Themen haben:

- Webtechnologien wie HTML, CSS und JavaScript. JavaScript ist am wichtigsten.
- Lesen von Webtechnologie-Spezifikationen. Sie werden diese häufig betrachten, während Sie APIs dokumentieren.

Alles andere kann man im Laufe der Zeit lernen.

### Erforderliche Ressourcen

Bevor Sie mit der Dokumentation einer API beginnen, sollten Ihnen folgende Ressourcen zur Verfügung stehen:

1. Die neueste Spezifikation:
   Ob es sich um eine W3C-Empfehlung oder einen frühen Entwurf des Editors handelt, Sie sollten sich auf den neuesten verfügbaren Entwurf der Spezifikation beziehen, die die betreffende API abdeckt (oder Spezifikationen, die sie abdecken).
   Um diese zu finden, können Sie in der Regel im Web suchen. Die neueste Version wird oft unter allen Versionen der Spezifikation verlinkt, häufig unter „neueste Entwurf“ oder ähnlichem.
2. Die neuesten modernen Webbrowser:
   Diese sollten experimentelle/Alpha-Builds sein, wie etwa [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/)/[Chrome Canary](https://www.google.com/intl/en/chrome/canary/), die eher die Funktionen unterstützen, die Sie dokumentieren.
   Dies ist besonders wichtig, wenn Sie eine neue/experimentelle API dokumentieren.
3. Demos/Blog-Posts/sonstige Informationen: Suchen Sie nach so vielen Informationen wie möglich.
4. Nützliche technische Kontakte:
   Es ist sehr nützlich, einen freundlichen technischen Kontakt zu finden, der Fragen zur Spezifikation beantworten kann, idealerweise jemand, der an der Standardisierung der API beteiligt ist oder ihrer Implementierung in einem Browser.
   Gute Anlaufstellen sind:

   - Ihr internes Firmenadressbuch, wenn Sie für ein relevantes Unternehmen arbeiten.
   - Eine öffentliche Mailingliste, die an der Diskussion um die betreffende API beteiligt ist, wie Mozillas [dev-platform](https://groups.google.com/a/mozilla.org/g/dev-platform/) oder eine W3C-Liste wie [public-webapps](https://lists.w3.org/Archives/Public/public-webapps/).
   - Die Spezifikation selbst. Zum Beispiel listet die [Web Audio API Spezifikation](https://webaudio.github.io/web-audio-api/) die Autoren und deren Kontaktdaten oben auf.

### Nehmen Sie sich Zeit, um mit der API zu experimentieren

Sie werden während der Dokumentation einer API viele Male Demos erstellen, aber es ist nützlich, damit zu beginnen, sich damit vertraut zu machen, wie die API funktioniert — lernen Sie, welche die wichtigsten Schnittstellen/Eigenschaften/Methoden sind, welche primären Anwendungsfälle existieren und wie man einfache Funktionalitäten damit schreibt.

Wenn sich eine API geändert hat, müssen Sie darauf achten, dass vorhandene Demos, auf die Sie sich beziehen oder von denen Sie lernen, nicht veraltet sind. Überprüfen Sie die Hauptkonstrukte, die in der Demo verwendet werden, um festzustellen, ob sie mit der neuesten Spezifikation übereinstimmen. Sie könnten auch in aktuellen Browsern nicht funktionieren, aber dies ist kein sehr zuverlässiger Test, da alte Funktionen oft aus Gründen der Rückwärtskompatibilität weiterhin unterstützt werden.

> [!NOTE]
> Wenn die Spezifikation kürzlich aktualisiert wurde, sodass beispielsweise eine Methode jetzt anders definiert ist, die alte Methode aber noch in Browsern funktioniert, müssen Sie oft beide an derselben Stelle dokumentieren, damit sowohl die alte als auch die neue Methode abgedeckt sind.
> Wenn Sie Hilfe benötigen, beziehen Sie sich auf die gefundenen Demos oder fragen Sie einen technischen Kontakt.

### Erstellen Sie die Liste der Dokumente, die Sie schreiben oder aktualisieren müssen

Eine API-Referenz enthält in der Regel die folgenden Seiten.
Sie finden weitere Details zu den Inhalten der einzelnen Seiten, Beispiele und Vorlagen in unserem Artikel über [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types).
Bevor Sie beginnen, sollten Sie eine Liste aller Seiten erstellen, die Sie erstellen sollten.

1. Überblicksseite
2. Schnittstellenseiten
3. Konstruktorseiten
4. Methodenseiten
5. Eigenschaftsseiten
6. Ereignisseiten
7. Konzept-/Leitfadenseiten
8. Beispiele

> [!NOTE]
> In diesem Artikel beziehen wir uns auf die [Web Audio API](/de/docs/Web/API/Web_Audio_API) als Beispiel.

#### Überblicksseiten

Eine einzelne API-Überblicksseite wird verwendet, um die Rolle der API zu beschreiben, ihre obersten Schnittstellen, verwandte Funktionen, die in anderen Schnittstellen enthalten sind, und andere Details auf hoher Ebene.
Ihr Name und Slug sollten der Name der API plus „API“ am Ende sein. Sie wird auf der obersten Ebene der API-Referenz platziert, als Kind von [https://developer.mozilla.org/de/docs/Web/API](/de/docs/Web/API).

Beispiel:

- Titel: _Web Audio API_
- Slug: _Web_Audio_API_
- URL: [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API](/de/docs/Web/API/Web_Audio_API)

#### Schnittstellenseiten

Jede Schnittstelle wird auch ihre eigene Seite haben, die den Zweck der Schnittstelle beschreibt, alle Mitglieder auflistet (Konstruktoren, Methoden, Eigenschaften usw., die sie enthält), und zeigt, mit welchen Browsern sie kompatibel ist.
Der Name und Slug einer Seite sollten exakt so geschrieben sein wie in der Spezifikation.
Jede Seite wird auf der obersten Ebene der API-Referenz platziert, als Kind von [https://developer.mozilla.org/de/docs/Web/API](/de/docs/Web/API).

Beispiele:

- Titel: _AudioContext_
- Slug: _AudioContext_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext](/de/docs/Web/API/AudioContext)

<!---->

- Titel: _AudioNode_
- Slug: _AudioNode_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioNode](/de/docs/Web/API/AudioNode)

> [!NOTE]
> Wir dokumentieren jedes Mitglied, das in der Schnittstelle erscheint. Sie sollten die folgenden Regeln beachten:

- Wir dokumentieren Methoden, die im Prototyp eines Objekts definiert sind, das diese Schnittstelle implementiert (Instanzmethoden), und Methoden, die auf der eigentlichen Klasse selbst definiert sind (statische Methoden).
  In den seltenen Fällen, dass beide auf derselben Schnittstelle existieren, sollten Sie sie in separaten Abschnitten auf der Seite auflisten (Statische Methoden/Instanzmethoden).
  Normalerweise existieren nur Instanzmethoden, in diesem Fall können Sie diese unter dem Titel „Methoden“ platzieren.
- Wir dokumentieren keine geerbten Eigenschaften und Methoden der Schnittstelle: Sie sind in der jeweiligen Elterschnittstelle aufgelistet. Wir weisen jedoch auf deren Existenz hin.
- Wir dokumentieren Eigenschaften und Methoden, die in Mixins definiert sind. Bitte sehen Sie sich die [Beitragsrichtlinien für Mixins](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#mixins) für weitere Details an.
- Spezielle Methoden wie der Stringifier (`toString()`) und der Jsonifier (`toJSON()`) werden ebenfalls aufgelistet, falls sie existieren.
- Benannte Konstruktoren (wie `Image()` für [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)) werden ebenfalls aufgelistet, falls relevant.

#### Konstruktorseiten

Jede Schnittstelle hat null oder einen Konstruktor, der auf einer Unterseite der Schnittstellenseite dokumentiert wird. Sie beschreibt den Zweck des Konstruktors und zeigt, wie seine Syntax aussieht, Beispiele für die Nutzung, Informationen zur Browser-Kompatibilität usw. Der Slug ist der Name des Konstruktors, der genau mit dem Schnittstellennamen übereinstimmt, und der Titel ist der Schnittstellenname, Punkt, Konstruktorname, dann Klammern am Ende.

Beispiel:

- Titel: _AudioContext.AudioContext()_
- Slug: _AudioContext_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/AudioContext](/de/docs/Web/API/AudioContext/AudioContext)

#### Eigenschaftsseiten

Jede Schnittstelle hat null oder mehr Eigenschaften, die auf Unterseiten der Schnittstellenseite dokumentiert werden. Jede Seite beschreibt den Zweck der Eigenschaft und zeigt, wie ihre Syntax aussieht, Beispiele für die Nutzung, Informationen zur Browser-Kompatibilität usw. Der Slug ist der Name der Eigenschaft, und der Titel ist der Schnittstellenname, Punkt, dann der Eigenschaftsname.

Beispiele:

- Titel: _AudioContext.state_
- Slug: _state_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/state](/de/docs/Web/API/BaseAudioContext/state)

<!---->

#### Methodenseiten

Jede Schnittstelle hat null oder mehr Methoden, die auf Unterseiten der Schnittstellenseite dokumentiert werden. Jede Seite beschreibt den Zweck der Methode und zeigt, wie ihre Syntax aussieht, Beispiele für die Nutzung, Informationen zur Browser-Kompatibilität usw. Der Slug ist der Name der Methode, und der Titel ist Schnittstellenname, Punkt, Methodenname, dann Klammern.

Beispiele:

- Titel: _AudioContext.close()_
- Slug: _close_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/close](/de/docs/Web/API/AudioContext/close)

<!---->

- Titel: _AudioContext.createGain()_
- Slug: _createGain_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/createGain](/de/docs/Web/API/BaseAudioContext/createGain)

#### Ereignisseiten

Dokumentieren Sie Ereignisse als Unterseiten ihrer Zielschnittstellen und verwenden Sie den Slug _eventname_\_event mit dem Titel eingestellt auf `Interface: eventName event`.

Erstellen Sie keine Seiten für `on` Ereignis-Handler-Eigenschaften. Erwähnen Sie beide Möglichkeiten, das Ereignis auf der `eventName_event`-Seite zuzugreifen.

Beispiel:

- Titel: XRSession: end event
- Slug: end_event
- URL: [https://developer.mozilla.org/de/docs/Web/XRSession/end_event](/de/docs/Web/API/XRSession/end_event)

#### Konzept-/Leitfadenseiten

Die meisten API-Referenzen haben mindestens einen Leitfaden und manchmal auch eine Konzeptseite dazu. Mindestens eine API-Referenz sollte einen Leitfaden mit dem Titel "Verwendung der _name-der-api_" enthalten, der eine grundsätzliche Anleitung zur Nutzung der API bietet. Komplexere APIs erfordern möglicherweise mehrere Nutzungsleitfäden, um zu erklären, wie man verschiedene Aspekte der API verwendet.

Falls erforderlich, können Sie auch einen Konzeptartikel mit dem Titel "_name-der-api_ Konzepte" hinzufügen, der die Theorie hinter Konzepten erklärt, die Entwickler verstehen sollten, um die API effektiv zu verwenden.

Diese Artikel sollten alle als Unterseiten der API-Überblicksseite erstellt werden. Zum Beispiel hat die Web Audio API vier Leitfäden und einen Konzeptartikel:

- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)

#### Beispiele

Sie sollten einige Beispiele erstellen, die mindestens die gebräuchlichsten Anwendungsfälle der API demonstrieren. Sie können diese überall dort platzieren, wo es angemessen ist, obwohl der empfohlene Ort das [MDN GitHub Repo](https://github.com/mdn/) ist.

#### Liste aller erstellen

Eine Liste aller dieser Unterseiten zu erstellen, ist eine gute Möglichkeit, sie zu verfolgen. Zum Beispiel:

- Web_Audio_API
- AudioContext

  - AudioContext.currentTime
  - AudioContext.destination
  - AudioContext.listener
  - …
  - AudioContext.createBuffer()
  - AudioContext.createBufferSource()
  - …

- AudioNode

  - AudioNode.context
  - AudioNode.numberOfInputs
  - AudioNode.numberOfOutputs
  - …
  - AudioNode.connect(Param)
  - …

- AudioParam
- Ereignisse (Liste aktualisieren)

  - start
  - end
  - …

Jede Schnittstelle in der Liste hat eine separate Seite, die für sie als Unterseite von `https://developer.mozilla.org/de/docs/Web/API` erstellt wird; beispielsweise wäre das Dokument für [`AudioContext`](/de/docs/Web/API/AudioContext) unter `https://developer.mozilla.org/de/docs/Web/API/AudioContext` zu finden. Jede [Schnittstellenseite](#schnittstellenseiten) erklärt, was diese Schnittstelle tut, und bietet eine Liste der Methoden und Eigenschaften, die die Schnittstelle bildet. Dann wird jede Methode und Eigenschaft auf ihrer eigenen Seite dokumentiert, die als Unterseite der Schnittstelle erstellt wird, zu der sie gehört. Zum Beispiel wird [`BaseAudioContext/currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) unter `https://developer.mozilla.org/de/docs/Web/API/AudioContext/currentTime` dokumentiert.

## Erstellen der Seiten

Erstellen Sie nun die Seiten, die Sie benötigen, gemäß den nachstehenden Strukturen. Unsere [MDN-Inhalts-README](https://github.com/mdn/content#adding-a-new-document) enthält Anleitungen zum Erstellen eines neuen Dokuments, und unser [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) Leitfaden enthält weitere Beispiele und Seitenschablonen, die nützlich sein könnten.

### Struktur einer Überblicksseite

API-Landingpages werden sich je nach Größe der API stark in der Länge unterscheiden, aber sie werden alle im Wesentlichen die gleichen Merkmale aufweisen. Siehe [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API](/de/docs/Web/API/Web_Audio_API) für ein Beispiel einer großen Landingpage.

Die Merkmale einer Landingpage sind unten beschrieben:

1. **Beschreibung**: der erste Absatz der Landingpage sollte eine kurze, prägnante Beschreibung des übergeordneten Zwecks der API liefern.
2. **Konzepte und Anwendungsbereich**: Der nächste Abschnitt sollte den Titel „\[Name der API]-Konzepte und -Anwendung“ tragen und einen Überblick über alle Hauptfunktionen der API geben, welche Probleme sie löst und wie sie funktioniert — alles auf hohem Niveau. Dieser Abschnitt sollte relativ kurz sein und nicht in Code oder spezifische Implementierungsdetails gehen.
3. **Liste von Schnittstellen**: Dieser Abschnitt sollte den Titel „\[Name der API]-Schnittstellen“ tragen und Links zur Referenzseite für jede Schnittstelle, die die API ausmacht, bereitstellen, zusammen mit einer kurzen Beschreibung dessen, was jede von ihnen tut. Siehe den Abschnitt „Referenzieren anderer API-Funktionen mit dem \\{{domxref}}-Makro“ für eine schnellere Möglichkeit, neue Seiten zu erstellen.
4. **Beispiele**: Dieser Abschnitt sollte einen oder zwei Anwendungsfälle für die API zeigen.
5. **Spezifikationstabelle**: An dieser Stelle müssen Sie eine Spezifikationstabelle einfügen — siehe den Abschnitt „Erstellen einer Spezifikationstabelle“ für weitere Details.
6. **Browser-Kompatibilität**: Nun müssen Sie eine Browser-Kompatibilitätstabelle einfügen. Siehe [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Details.
7. **Siehe auch**: Der Abschnitt „Siehe auch“ ist ein guter Ort, um weiterführende Links aufzunehmen, die beim Erlernen dieser Technologie nützlich sein könnten, einschließlich MDN (und externer) Tutorials, Beispiele, Bibliotheken usw.

### Struktur einer Schnittstellenseite

Jetzt sollten Sie bereit sein, mit dem Schreiben Ihrer Schnittstellenseiten zu beginnen. Jede Schnittstellenreferenzseite sollte die folgende Struktur beachten:

1. **\\{{APIRef}}**: Fügen Sie das \\{{APIRef}}-Makro in die erste Zeile jeder Schnittstellenseite ein und geben Sie den Namen der API als Argument an, also zum Beispiel \\{{APIRef("Web Audio API")}}. Dieses Makro dient dazu, ein Referenzmenü auf der linken Seite der Schnittstellenseite zu erstellen, das Eigenschaften und Methoden sowie andere Schnelllinks enthält, wie in der [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json)-Makro beschrieben (bitten Sie jemanden, Ihre API zu einem vorhandenen GroupData-Eintrag hinzuzufügen oder einen neuen Eintrag zu erstellen, wenn sie dort noch nicht aufgeführt ist). Das Menü wird so aussehen wie der untenstehende Screenshot.
   ![Dieser Screenshot zeigt ein vertikales Navigationsmenü für die OscillatorNode-Schnittstelle mit mehreren Unterlisten für Methoden und Eigenschaften, wie sie vom APIRef-Makro erstellt wurden](apiref-links.png)
2. **Funktionsstatus**: Ein [Banner, das den Funktionsstatus anzeigt](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners) (z.B. veraltet, nicht standardisiert oder experimentell) wird automatisch hinzugefügt, falls nötig. Dazu müssen Sie [den Status im browser-compat-data-Repository aktualisieren](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
3. **Beschreibung**: Der erste Absatz der Schnittstellenseite sollte eine kurze, prägnante Beschreibung des übergeordneten Zwecks der Schnittstelle liefern. Sie möchten vielleicht auch ein paar weitere Absätze hinzufügen, wenn zusätzliche Beschreibung erforderlich ist. Wenn die Schnittstelle tatsächlich ein Wörterbuch ist, sollten Sie diesen Begriff anstelle von „Schnittstelle“ verwenden.
4. **Vererbungsdiagramm:** Verwenden Sie das [`\{{InheritanceDiagram}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/InheritanceDiagram.ejs)-Makro, um ein SVG-Vererbungsdiagramm für die Schnittstelle einzubetten.
5. **Liste der Eigenschaften, Liste der Methoden**: Diese Abschnitte sollten die Titel „Eigenschaften“ und „Methoden“ tragen und Links (unter Verwendung des \\{{domxref}}-Makros) zu einer Referenzseite für jede Eigenschaft/Methode dieser Schnittstelle bereitstellen, zusammen mit einer Beschreibung dessen, was jede von ihnen tut. Diese sollten unter Verwendung von [Beschreibung/Definitionslisten](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists) ausgezeichnet werden. Jede Beschreibung sollte kurz und prägnant sein — wenn möglich, ein Satz. Siehe den Abschnitt „Referenzieren anderer API-Funktionen mit dem \\{{domxref}}-Makro“ für eine schnellere Möglichkeit, Links zu anderen Seiten zu erstellen.

   Zu Beginn beider Abschnitte, vor Beginn der Liste der Eigenschaften/Methoden, geben Sie die Vererbung mit dem entsprechenden Satz an, kursiv:

   - _Diese Schnittstelle implementiert keine spezifischen Eigenschaften, sondern erbt Eigenschaften von \\{{domxref("XYZ")}}, und \\{{domxref("XYZ2")}}._
   - _Diese Schnittstelle erbt ebenfalls Eigenschaften von \\{{domxref("XYZ")}}, und \\{{domxref("XYZ2")}}._
   - _Diese Schnittstelle implementiert keine spezifischen Methoden, erbt aber Methoden von \\{{domxref("XYZ")}}, und \\{{domxref("XYZ2")}}._
   - _Diese Schnittstelle erbt ebenfalls Methoden von \\{{domxref("XYZ")}}, und \\{{domxref("XYZ2")}}._

   > [!NOTE]
   > Eigenschaften, die nur gelesen werden können, sollten das \\{{ReadOnlyInline}}-Makro enthalten, das ein hübsches kleines „Nur lesen“-Abzeichen erstellt, das in derselben Zeile wie die \\{{domxref}}-Links enthalten ist (nach der Verwendung der \\{{experimentalInline}}, \\{{non-standard_Inline}} und \\{{deprecatedInline}}-Makros, falls einige davon benötigt werden).

6. **Beispiele**: Fügen Sie eine Code-Auflistung ein, um die typische Verwendung einer Hauptfunktion der API zu zeigen. Anstelle des Auflistens des gesamten Codes sollten Sie einen interessanten Ausschnitt davon auflisten. Für eine vollständige Code-Auflistung könnten Sie auf ein [GitHub](https://github.com/)-Repo mit dem vollständigen Beispiel verweisen und könnten auch auf ein Live-Beispiel verlinken, das mit der [GitHub gh-pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)-Funktion erstellt wurde (sofern es natürlich nur client-seitigen Code verwendet). Wenn das Beispiel visuell ist, könnten Sie auch das MDN [Live Sample](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples)-Feature verwenden, um es live und auf der Seite spielbar zu machen.
7. **Spezifikationstabelle**: An dieser Stelle müssen Sie eine Spezifikationstabelle einfügen — siehe den Abschnitt „Erstellen einer Spezifikationstabelle“ für weitere Details.
8. **Browser-Kompatibilität**: Nun müssen Sie eine Browser-Kompatibilitätstabelle einfügen. Siehe [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Details.
9. **Polyfill**: Falls zutreffend, fügen Sie diesen Abschnitt hinzu, um Code für eine Polyfill bereitzustellen, mit der die API auch auf Browsern verwendet werden kann, die sie nicht implementieren. Wenn kein Polyfill existiert oder notwendig ist, lassen Sie diesen Abschnitt komplett weg.
10. **Siehe auch**: Der Abschnitt „Siehe auch“ ist ein guter Ort, um weiterführende Links aufzunehmen, die beim Erlernen dieser Technologie nützlich sein könnten, einschließlich MDN (und externer) Tutorials, Beispiele, Bibliotheken usw. Wir haben eine großzügige Richtlinie zum Verlinken externen Quellen, aber beachten Sie:

    - Schließen Sie keine Seiten mit denselben Informationen wie eine andere Seite im MDN ein; verlinken Sie stattdessen diese Seite.
    - Nennen Sie keine Autorennamen — wir sind eine dokumentationsseitenschreibende Plattform, die neutral zur Autorschaft ist. Verlinken Sie das Dokument; der Autorenname wird dort angezeigt.
    - Achten Sie besonders auf Blogbeiträge: Sie neigen dazu, veraltet zu werden (alte Syntax, falsche Kompatibilitätsinformationen). Verlinken Sie sie nur, wenn sie einen klaren Mehrwert bieten, der in keinem gepflegten Dokument zu finden ist.
    - Verwenden Sie keine Handlungsverben wie „Siehe ... für weitere Informationen“ oder „Klicken Sie auf ...“, denn Sie wissen nicht, ob Ihr Leser in der Lage ist, den Link zu sehen oder darauf zu klicken (wie bei einer Papierversion des Dokuments).

#### Beispiele für Schnittstellenseiten

Die folgenden sind beispielhafte Beispiele für Schnittstellenseiten:

- [`Request`](/de/docs/Web/API/Request) von der [Fetch API](/de/docs/Web/API/Fetch_API).
- [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) von der [Web Speech API](/de/docs/Web/API/Web_Speech_API).

### Struktur einer Eigenschaftsseite

Erstellen Sie Ihre Eigenschaftsseiten als Unterseiten der Schnittstelle, auf der sie implementiert sind. Kopieren Sie die Struktur einer anderen Eigenschaftsseite, um als Grundlage für Ihre neue Seite zu dienen.

Bearbeiten Sie den Seitennamen der Eigenschaft, um das Konventionsformat `Interface.property_name` zu befolgen.

Eigenschaftsseiten müssen die folgenden Abschnitte haben:

1. **Titel**: Der Titel der Seite muss **InterfaceName.propertyName** sein. Der Schnittstellenname muss mit einem Großbuchstaben beginnen. Obwohl eine Schnittstelle in JavaScript im Prototyp von Objekten implementiert wird, fügen wir kein `.prototype.` im Titel ein, wie wir es im [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) machen.
2. **\\{{APIRef}}**: Fügen Sie das \\{{APIRef}}-Makro in die erste Zeile jeder Eigenschaftsseite ein und geben Sie den Namen der API als Argument an, zum Beispiel \\{{APIRef("Web Audio API")}}. Dieses Makro dient dazu, ein Referenzmenü auf der linken Seite der Schnittstellenseite zu erstellen, das Eigenschaften und Methoden sowie andere Schnelllinks enthält, wie in der [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json)-Makro beschrieben (bitten Sie jemanden, Ihre API zu einem vorhandenen GroupData-Eintrag hinzuzufügen oder einen neuen Eintrag zu erstellen, wenn sie dort noch nicht aufgeführt ist). Das Menü wird so aussehen wie der untenstehende Screenshot.
   ![Dieser Screenshot zeigt ein vertikales Navigationsmenü für die OscillatorNode-Schnittstelle mit mehreren Unterlisten für Methoden und Eigenschaften, wie sie vom APIRef-Makro erstellt wurden](apiref-links.png)
3. **Funktionsstatus**: Ein [Banner, das den Funktionsstatus anzeigt](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners) (z.B. veraltet, nicht standardisiert oder experimentell) wird automatisch hinzugefügt, falls nötig. Dazu müssen Sie [den Status im browser-compat-data-Repository aktualisieren](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).

4. **Beschreibung**: Der erste Absatz der Eigenschaftsseite sollte eine kurze, prägnante Beschreibung des übergeordneten Zwecks der Eigenschaft liefern. Sie möchten vielleicht auch ein paar weitere Absätze hinzufügen, wenn zusätzliche Beschreibung erforderlich ist. Offensichtliche zusätzliche Informationen sind ihr Standard-/Anfangswert und ob sie schreibgeschützt ist oder nicht. Die Struktur des ersten Satzes muss sein:

   - Für schreibgeschützte Eigenschaften
     - : Die schreibgeschützte Eigenschaft **`InterfaceName.property`** gibt einen \\{{domxref("Typ")}} zurück, der …
   - Für andere Eigenschaften
     - : Die Eigenschaft **`InterfaceName.property`** ist ein \\{{domxref("Typ")}}, der …

   > **Hinweis:** `InterfaceName.property` sollte in `<code>` stehen und sollte zusätzlich beim ersten Auftauchen fett (`<strong>`) formatiert sein.

5. **Wert**: Der Wert-Abschnitt wird eine Beschreibung des Wertes der Eigenschaft enthalten. Dies sollte den Datentyp der Eigenschaft und das, was sie darstellt, enthalten. Für ein Beispiel siehe [`SpeechRecognition.grammars`](/de/docs/Web/API/SpeechRecognition/grammars)

6. **Beispiele**: Fügen Sie eine Code-Auflistung ein, um die typische Verwendung der betreffenden Eigenschaft darzustellen. Sie sollten mit einem einfachen Beispiel beginnen, das zeigt, wie ein Objekt des Typs erstellt wird und wie man auf die Eigenschaft zugreift. Komplexere Beispiele können nach einem solchen Beispiel hinzugefügt werden. In diesen weiteren Beispielen sollten Sie anstelle des Auflistens des gesamten Codes einen interessanten Ausschnitt davon auflisten. Für eine komplette Code-Auflistung könnten Sie auf ein [GitHub](https://github.com/)-Repo mit dem vollständigen Beispiel verweisen, und Sie könnten auch auf ein Live-Beispiel verlinken, das mit der [GitHub gh-pages feature](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) erstellt wurde (sofern es nur clientseitigen Code verwendet). Wenn das Beispiel visuell ist, könnten Sie auch das MDN [Live Sample](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples)-Feature verwenden, um es live und spielbar zu machen.
7. **Spezifikationstabelle**: An dieser Stelle müssen Sie eine Spezifikationstabelle einfügen — siehe den Abschnitt „Erstellen einer Spezifikationstabelle“ für weitere Details.
8. **Browser-Kompatibilität**: Nun müssen Sie eine Browser-Kompatibilitätstabelle einfügen. Siehe [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Details.
9. **Siehe auch**: Der Abschnitt „Siehe auch“ ist ein guter Ort, um weiterführende Links aufzunehmen, die bei der Verwendung dieser Technologie nützlich sein könnten: wie Methoden und Eigenschaften, die von einer Änderung dieser Eigenschaft betroffen sind, oder Ereignisse, die damit verbunden sind. Weitere nützliche Links, die beim Lernen über diese Technologie hilfreich sind, einschließlich MDN (und externer) Tutorials, Beispiele, Bibliotheken,... können hinzugefügt werden, obwohl es nützlich sein kann, darüber nachzudenken, sie stattdessen auf der Schnittstellenreferenzseite hinzuzufügen.

#### Beispiele für Eigenschaftsseiten

Die folgenden sind beispielhafte Beispiele für Eigenschaftsseiten:

- [`Request.method`](/de/docs/Web/API/Request/method) von der [Fetch API](/de/docs/Web/API/Fetch_API).
- [`SpeechSynthesis.speaking`](/de/docs/Web/API/SpeechSynthesis/speaking) von der [Web Speech API](/de/docs/Web/API/Web_Speech_API).

### Struktur einer Methodenseite

Erstellen Sie Ihre Methodenseiten als Unterseiten der Schnittstelle, auf der sie implementiert sind. Kopieren Sie die Struktur einer anderen Methodenseite, um als Grundlage für Ihre neue Seite zu dienen.

Methodenseiten benötigen die folgenden Abschnitte:

1. **Titel**: Der Titel der Seite muss **InterfaceName.method()** sein (mit den abschließenden Klammern), aber der Slug (das Ende der Seiten-URL) darf die Klammern nicht enthalten. Außerdem muss der Schnittstellenname mit einem Großbuchstaben beginnen. Obwohl eine Schnittstelle in JavaScript im Prototyp von Objekten implementiert wird, setzten wir kein `.prototype.` im Titel ein, wie wir es im [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) machen.
2. **\\{{APIRef}}**: Fügen Sie das \\{{APIRef}}-Makro in die erste Zeile jeder Methodenseite ein und geben Sie den Namen der API als Argument an, zum Beispiel \\{{APIRef("Web Audio API")}}. Dieses Makro dient dazu, ein Referenzmenü auf der linken Seite der Schnittstellenseite zu erstellen, das Eigenschaften und Methoden sowie andere Schnelllinks enthält, wie in der [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json)-Makro beschrieben (bitten Sie jemanden, Ihre API zu einem vorhandenen GroupData-Eintrag hinzuzufügen oder einen neuen Eintrag zu erstellen, wenn sie dort noch nicht aufgeführt ist). Das Menü wird so aussehen wie der untenstehende Screenshot.
   ![Dieser Screenshot zeigt ein vertikales Navigationsmenü für die OscillatorNode-Schnittstelle mit mehreren Unterlisten für Methoden und Eigenschaften, wie sie vom APIRef-Makro erstellt wurden](apiref-links.png)
3. **Funktionsstatus**: Ein [Banner, das den Funktionsstatus anzeigt](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners) (z.B. veraltet, nicht standardisiert oder experimentell) wird automatisch hinzugefügt, falls nötig. Dazu müssen Sie [den Status im browser-compat-data-Repository aktualisieren](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).

4. **Beschreibung**: Der erste Absatz der Methodenseite sollte eine kurze, prägnante Beschreibung des übergeordneten Zwecks der Methode liefern. Sie möchten vielleicht auch ein paar weitere Absätze hinzufügen, wenn zusätzliche Beschreibung erforderlich ist. Offensichtliche zusätzliche Informationen sind ihre Standardparameterwerte, jede Theorie, auf die sich die Methode stützt, und was die Parameterwerte bewirken.

   - Der Beginn des ersten Satzes muss die folgende Struktur befolgen:
     - : Die Schnittstellenmethode **`InterfaceName.method()`**…

   > **Hinweis:** `InterfaceName.method()` sollte in `<code>` stehen, und sollte zusätzlich beim ersten Auftauchen fett (`<strong>`) formatiert sein.

5. **Syntax**: Der Syntax-Abschnitt sollte ein 2–3 Zeilen Beispiel enthalten — normalerweise nur die Konstruktion der Schnittstelle und dann das Aufrufen der Schnittstellenmethode.

   - Die Syntax sollte die Form haben:
     - : method(param1, param2, …)

   Der Syntax-Abschnitt sollte drei Unterabschnitte enthalten (siehe [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign) für ein Beispiel):

   - „Parameter“: Dies sollte eine Definitionsliste (oder eine ungeordnete Liste) enthalten, die die verschiedenen Parameter, die die Methode annimmt, benennt und beschreibt. Das \\{{optional_inline}}-Makro sollte neben dem Parameternamen verwendet werden, im Fall optionaler Parameter. Wenn es keine Parameter gibt, sollte dieser Abschnitt weggelassen werden.
   - „Rückgabewert“: Dies sollte sagen, welchen Rückgabewert die Methode hat, sei es ein einfacher Wert wie ein double oder boolean, oder ein komplexerer Wert wie ein anderes Schnittstellenobjekt, in diesem Fall können Sie das \\{{domxref}}-Makro verwenden, um auf die MDN-API-Seite, die diese Schnittstelle behandelt, zu verweisen (falls sie existiert). Eine Methode könnte nichts zurückgeben, in diesem Fall sollte der Rückgabewert als "\\{{jsxref('undefined')}}" geschrieben werden (was so auf der gerenderten Seite aussieht: {{jsxref("undefined")}}).
   - „Ausnahmen“: Dies sollte die verschiedenen Ausnahmen auflisten, die beim Aufrufen der Methode auftreten können, und unter welchen Umständen dies geschieht. Wenn es keine Ausnahmen gibt, sollte dieser Abschnitt weggelassen werden.

6. **Beispiele**: Fügen Sie eine Code-Auflistung ein, um die typische Verwendung der betreffenden Methode darzustellen. Anstelle des Auflistens des gesamten Codes sollten Sie einen interessanten Ausschnitt davon auflisten. Für eine vollständige Code-Auflistung sollten Sie auf ein [GitHub](https://github.com/)-Repo mit dem vollständigen Beispiel verweisen, und Sie könnten auch auf ein Live-Beispiel verlinken, das mit der [GitHub gh-pages feature](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) erstellt wurde (sofern es nur clientseitigen Code verwendet). Wenn das Beispiel visuell ist, könnten Sie auch das MDN [Live Sample](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples)-Feature verwenden, um es live und spielbar zu machen.
7. **Spezifikationstabelle**: An dieser Stelle müssen Sie eine Spezifikationstabelle einfügen — siehe den Abschnitt „Erstellen einer Spezifikationstabelle“ für weitere Details.
8. **Browser-Kompatibilität**: Nun müssen Sie eine Browser-Kompatibilitätstabelle einfügen. Siehe [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Details.

#### Beispiele für Methodenseiten

Die folgenden sind beispielhafte Beispiele für Methodenseiten:

- [`Document.getAnimations`](/de/docs/Web/API/Document/getAnimations) von der [Web Animations API](/de/docs/Web/API/Web_Animations_API).
- [`fetch()`](/de/docs/Web/API/Window/fetch) von der [Fetch API](/de/docs/Web/API/Fetch_API).

## Seitenleisten

Sobald Sie Ihre API-Referenzseiten erstellt haben, möchten Sie die korrekten Seitenleisten einfügen, um die Seiten miteinander zu verknüpfen. Unser [API-Referenzseitenleistenleitfaden](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) erklärt wie.
