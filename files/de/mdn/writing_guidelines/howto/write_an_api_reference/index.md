---
title: Wie man eine API-Referenz schreibt
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference
l10n:
  sourceCommit: 188594e189f5e73267faf2626adbb84d26128b15
---

{{MDNSidebar}}

Dieser Leitfaden führt Sie durch alles, was Sie wissen müssen, um eine API-Referenz auf MDN zu schreiben.

## Vorbereitung

Bevor Sie beginnen, eine API zu dokumentieren, sollten Sie einige Dinge vorbereiten und im Voraus planen, bevor Sie mit dem Schreiben beginnen.

### Vorausgesetztes Wissen

Es wird angenommen, dass Sie vor dem Lesen dieses Leitfadens über ein angemessenes Wissen in folgenden Bereichen verfügen:

- Webtechnologien wie HTML, CSS und JavaScript. JavaScript ist am wichtigsten.
- Lesen von Webtechnologie-Spezifikationen. Sie werden diese oft betrachten, wenn Sie APIs dokumentieren.

Alles andere kann unterwegs gelernt werden.

### Vorausgesetzte Ressourcen

Bevor Sie anfangen, eine API zu dokumentieren, sollten Sie Folgendes zur Verfügung haben:

1. Die neueste Spezifikation:
   Egal ob es sich um eine W3C-Empfehlung oder einen frühen Entwurf eines Editors handelt, Sie sollten sich auf den neuesten verfügbaren Entwurf der Spezifikation beziehen, die diese API abdeckt. Um sie zu finden, können Sie in der Regel eine Websuche durchführen. Die neueste Version wird oft von allen Versionen der Spezifikation aus verlinkt, die unter "neuesten Entwurf" oder ähnlich aufgeführt sind.
2. Die neuesten modernen Webbrowser:
   Diese sollten experimentelle/Alpha-Builds wie [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/)/[Chrome Canary](https://www.google.com/intl/en/chrome/canary/) sein, die wahrscheinlichere Chancen haben, die Funktionen zu unterstützen, die Sie dokumentieren. Dies ist besonders relevant, wenn Sie eine aufkommende/experimentelle API dokumentieren.
3. Demos/Blogbeiträge/andere Informationen: Finden Sie so viel Informationen wie möglich.
4. Nützliche technische Kontakte:
   Es ist wirklich nützlich, einen freundlichen technischen Kontakt zu finden, an den Sie Fragen zur Spezifikation stellen können, jemanden, der an der Standardisierung der API beteiligt ist oder sie in einem Browser implementiert. Gute Orte, um solche Kontakte zu finden, sind:

   - Ihr internes Firmenadressbuch, wenn Sie für ein relevantes Unternehmen arbeiten.
   - Eine öffentliche Mailingliste, die in die Diskussion dieser API involviert ist, wie Mozillas [dev-platform](https://groups.google.com/a/mozilla.org/g/dev-platform/) oder eine W3C-Liste wie [public-webapps](https://lists.w3.org/Archives/Public/public-webapps/).
   - Die Spezifikation selbst. Zum Beispiel listet die [Web Audio API Spezifikation](https://webaudio.github.io/web-audio-api/) die Autoren und ihre Kontaktdaten oben auf.

### Nehmen Sie sich Zeit, um mit der API zu experimentieren

Sie werden im Laufe der Dokumentation einer API viele Male zurückkehren, um Demos zu erstellen, aber es ist nützlich, zunächst Zeit damit zu verbringen, sich mit der Funktionsweise der API vertraut zu machen — lernen Sie, was die Hauptschnittstellen/Eigenschaften/Methoden sind, welche die primären Anwendungsfälle sind und wie man einfache Funktionen damit schreibt.

Wenn sich eine API geändert hat, müssen Sie vorsichtig sein, damit bestehende Demos, auf die Sie sich beziehen oder von denen Sie lernen, nicht veraltet sind. Überprüfen Sie die Hauptkonstrukte, die in der Demo verwendet werden, um zu sehen, ob sie mit der neuesten Spezifikation übereinstimmen. Sie funktionieren möglicherweise auch nicht in aktuellen Browsern, aber dies ist kein sehr zuverlässiger Test, da die alten Funktionen oft weiterhin aus Gründen der Rückwärtskompatibilität unterstützt werden.

> [!NOTE]
> Wenn die Spezifikation kürzlich aktualisiert wurde, sodass beispielsweise eine Methode jetzt anders definiert ist, die alte Methode aber weiterhin in Browsern funktioniert, müssen Sie oft beide an derselben Stelle dokumentieren, sodass die alten und neuen Methoden abgedeckt sind. Wenn Sie Hilfe benötigen, beziehen Sie sich auf Demos, die Sie gefunden haben, oder fragen Sie einen technischen Kontakt.

### Erstellen Sie die Liste der Dokumente, die Sie schreiben oder aktualisieren müssen

Eine API-Referenz enthält in der Regel die folgenden Seiten. Sie finden weitere Details zu den Inhalten jeder Seite, Beispiele und Vorlagen in unserem Artikel [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types). Bevor Sie beginnen, sollten Sie eine Liste aller zu erstellenden Seiten notieren.

1. Übersichtseite
2. Schnittstellenseiten
3. Konstruktor-Seiten
4. Methodenseiten
5. Eigenschaftsseiten
6. Ereignisseiten
7. Konzept-/Leitfaden-Seiten
8. Beispiele

> [!NOTE]
> In diesem Artikel werden wir Beispiele aus der [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwenden.

#### Übersichtsseiten

Eine einzelne API-Übersichtsseite wird verwendet, um die Rolle der API, ihre Top-Level-Schnittstellen, verwandte Funktionen, die in anderen Schnittstellen enthalten sind, und andere allgemeine Details zu beschreiben. Name und Slug sollten der Name der API plus "API" sein. Sie wird auf der obersten Ebene der API-Referenz platziert, als Kind von [https://developer.mozilla.org/de/docs/Web/API](/de/docs/Web/API).

Beispiel:

- Titel: _Web Audio API_
- Slug: _Web_Audio_API_
- URL: [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API](/de/docs/Web/API/Web_Audio_API)

#### Schnittstellenseiten

Jede Schnittstelle hat auch ihre eigene Seite, auf der der Zweck der Schnittstelle beschrieben wird, alle Mitglieder (Konstruktoren, Methoden, Eigenschaften usw.) aufgelistet werden und gezeigt wird, mit welchen Browsern sie kompatibel ist. Der Name und Slug einer Seite sollte der Name der Schnittstelle sein, genau wie in der Spezifikation geschrieben. Jede Seite wird auf der obersten Ebene der API-Referenz platziert, als Kind von [https://developer.mozilla.org/de/docs/Web/API](/de/docs/Web/API).

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

- Wir dokumentieren Methoden, die auf dem Prototyp eines Objekts definiert sind, das diese Schnittstelle implementiert (Instanzmethoden), und Methoden, die auf der eigentlichen Klasse selbst definiert sind (statische Methoden). In den seltenen Fällen, dass beide auf derselben Schnittstelle existieren, sollten Sie sie in separaten Abschnitten auf der Seite auflisten (statische Methoden/Instanzmethoden). Normalerweise existieren nur Instanzmethoden, in diesem Fall können Sie diese unter dem Titel "Methoden" aufführen.
- Wir dokumentieren keine geerbten Eigenschaften und Methoden der Schnittstelle: Sie sind auf der jeweiligen übergeordneten Schnittstelle aufgelistet. Wir weisen jedoch auf ihre Existenz hin.
- Wir dokumentieren Eigenschaften und Methoden, die in Mixins definiert sind. Bitte sehen Sie sich den [Beitragsleitfaden für Mixins](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#mixins) für weitere Details an.
- Spezielle Methoden wie der Stringifier (`toString()`) und der Jsonizer (`toJSON()`) werden ebenfalls aufgelistet, falls sie existieren.
- Benannte Konstruktoren (wie `Image()` für [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)) werden ebenfalls aufgelistet, falls relevant.

#### Konstruktor-Seiten

Jede Schnittstelle hat null oder einen Konstruktor, der auf einer Unterseite der Schnittstellenseite dokumentiert ist. Er beschreibt den Zweck des Konstruktors und zeigt, wie seine Syntax aussieht, beispielhafte Nutzung, Informationen zur Browser-Kompatibilität usw. Der Slug ist der Name des Konstruktors, der genau der Name der Schnittstelle ist, und der Titel ist Schnittstellenname, Punkt, Konstruktorname, dann Klammern am Ende.

Beispiel:

- Titel: _AudioContext.AudioContext()_
- Slug: _AudioContext_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/AudioContext](/de/docs/Web/API/AudioContext/AudioContext)

#### Eigenschaftsseiten

Jede Schnittstelle hat null oder mehr Eigenschaften, die auf Unterseiten der Schnittstellenseite dokumentiert sind. Jede Seite beschreibt den Zweck der Eigenschaft und zeigt, wie ihre Syntax aussieht, beispielhafte Nutzung, Informationen zur Browser-Kompatibilität usw. Der Slug ist der Name der Eigenschaft, und der Titel ist Schnittstellenname, Punkt, dann Eigenschaftsname.

Beispiele:

- Titel: _AudioContext.state_
- Slug: _state_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/state](/de/docs/Web/API/BaseAudioContext/state)

<!---->

#### Methodenseiten

Jede Schnittstelle hat null oder mehr Methoden, die auf Unterseiten der Schnittstellenseite dokumentiert sind. Jede Seite beschreibt den Zweck der Methode und zeigt, wie ihre Syntax aussieht, beispielhafte Nutzung, Informationen zur Browser-Kompatibilität usw. Der Slug ist der Name der Methode, und der Titel ist Schnittstellenname, Punkt, Methodenname, dann Klammern.

Beispiele:

- Titel: _AudioContext.close()_
- Slug: _close_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/close](/de/docs/Web/API/AudioContext/close)

<!---->

- Titel: _AudioContext.createGain()_
- Slug: _createGain_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/createGain](/de/docs/Web/API/BaseAudioContext/createGain)

#### Ereignisseiten

Dokumentieren Sie Ereignisse als Unterseiten ihrer Zielschnittstellen und verwenden Sie den Slug _eventname_\_event mit dem Titel `Interface: eventName event`.

Erstellen Sie keine Seiten für `on`-Ereignishandler-Eigenschaften. Erwähnen Sie beide Möglichkeiten, auf das Ereignis zuzugreifen, auf der Seite `eventName_event`.

Beispiel:

- Titel: XRSession: end event
- Slug: end_event
- URL: [https://developer.mozilla.org/de/docs/Web/XRSession/end_event](/de/docs/Web/API/XRSession/end_event)

#### Konzept-/Leitfaden-Seiten

Die meisten API-Referenzen haben mindestens einen Leitfaden und manchmal auch eine Konzeptseite zur Begleitung. Ein Minimum sollte eine API-Referenz einen Leitfaden enthalten, der "Verwendung der _name-der-api_" heißt, der eine grundlegende Anleitung gibt, wie die API zu verwenden ist. Komplexere APIs benötigen möglicherweise mehrere Nutzungshinweise, um zu erklären, wie verschiedene Aspekte der API verwendet werden.

Falls erforderlich, können Sie auch einen Konzeptartikel namens "_name-der-api_ Konzepte" einschließen, der die Theorie hinter allen Konzepten erklärt, die Entwickler verstehen sollten, um die API effektiv zu nutzen.

Diese Artikel sollten alle als Unterseiten der API-Übersichtsseite erstellt werden. Beispielsweise hat das Web Audio vier Leitfäden und einen Konzeptartikel:

- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)

#### Beispiele

Sie sollten einige Beispiele erstellen, die mindestens die häufigsten Anwendungsfälle der API demonstrieren. Sie können diese an jedem geeigneten Ort platzieren, obwohl der empfohlene Ort das [MDN GitHub-Repo](https://github.com/mdn/) ist.

#### Liste aller Seiten

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

Jede Schnittstelle in der Liste hat eine separate Seite, die als Unterseite von `https://developer.mozilla.org/de/docs/Web/API` erstellt wird; zum Beispiel würde das Dokument für [`AudioContext`](/de/docs/Web/API/AudioContext) unter `https://developer.mozilla.org/de/docs/Web/API/AudioContext` zu finden sein. Jede [Schnittstellenseite](#schnittstellenseiten) erklärt, was diese Schnittstelle tut und bietet eine Liste der Methoden und Eigenschaften, die die Schnittstelle ausmachen. Dann wird jede Methode und Eigenschaft auf ihrer eigenen Seite dokumentiert, die als Unterseite der Schnittstelle erstellt wird, deren Mitglied sie ist. Zum Beispiel wird [`BaseAudioContext/currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) unter `https://developer.mozilla.org/de/docs/Web/API/AudioContext/currentTime` dokumentiert.

## Erstellen der Seiten

Erstellen Sie nun die benötigten Seiten gemäß den unten stehenden Strukturen. Unsere [MDN-Inhalts-README](https://github.com/mdn/content#adding-a-new-document) enthält Anweisungen zum Erstellen eines neuen Dokuments, und unser Leitfaden [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) enthält weitere Beispiele und Seitenschablonen, die nützlich sein könnten.

### Struktur einer Überblicksseite

API-Landingpages unterscheiden sich stark in ihrer Länge, je nachdem, wie groß die API ist, aber sie haben im Grunde alle die gleichen Merkmale. Sehen Sie [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API](/de/docs/Web/API/Web_Audio_API) für ein Beispiel einer großen Landingpage.

Die Merkmale einer Landingpage sind unten aufgeführt:

1. **Beschreibung**: Der erste Absatz der Landingpage sollte eine kurze, prägnante Beschreibung des übergeordneten Zwecks der API bieten.
2. **Konzepte und Nutzung Abschnitt**: Der nächste Abschnitt sollte den Titel "\[API-Name] Konzepte und Nutzung" tragen und einen Überblick über alle Hauptfunktionen geben, die die API bereitstellt, welche Probleme sie löst und wie sie funktioniert — alles auf einem hohen Level. Dieser Abschnitt sollte ziemlich kurz sein und nicht in Code oder spezifische Implementierungsdetails gehen.
3. **Liste der Schnittstellen**: Dieser Abschnitt sollte den Titel "\[API-Name] Schnittstellen" tragen und Links zur Referenzseite für jede Schnittstelle enthalten, die die API bildet, zusammen mit einer kurzen Beschreibung dessen, was jede von ihnen tut. Siehe den Abschnitt "Referenzieren anderer API-Funktionen mit dem \\{{domxref}} Makro" für einen schnelleren Weg, um neue Seiten zu erstellen.
4. **Beispiele**: Dieser Abschnitt sollte ein oder zwei einfache Anwendungsfälle für die API zeigen.
5. **Spezifikationstabellen**: An diesem Punkt müssen Sie eine Spezifikationstabelle einfügen — siehe den Abschnitt "Erstellen einer Spezifikationstabelle" für weitere Details.
6. **Browser-Kompatibilität**: Jetzt müssen Sie eine Tabelle zur Browser-Kompatibilität einfügen. Siehe [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Details.
7. **Siehe auch**: Der Abschnitt "Siehe auch" ist ein guter Ort, um weitere Links aufzunehmen, die nützlich sein könnten, wenn Sie mehr über diese Technologie erfahren, einschließlich MDN (und externer) Tutorials, Beispiele, Bibliotheken usw.

### Struktur einer Schnittstellenseite

Jetzt sollten Sie bereit sein, Ihre Schnittstellenseiten zu schreiben. Jede Schnittstellenreferenzseite sollte die folgende Struktur aufweisen:

1. **\\{{APIRef}}**: Fügen Sie das \\{{APIRef}} Makro in der ersten Zeile jeder Schnittstellenseite ein, einschließlich des Namens der API als Argument, so zum Beispiel \\{{APIRef("Web Audio API")}}. Dieses Makro dient dazu, ein Referenzmenü auf der linken Seite der Schnittstellenseite zu konstruieren, einschließlich Eigenschaften und Methoden und anderer schneller Links, wie im [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) Makro definiert (bitten Sie jemanden, Ihre API zu einem bestehenden GroupData-Eintrag hinzuzufügen oder einen neuen zu erstellen, wenn sie dort noch nicht aufgeführt ist). Das Menü wird ungefähr wie der untenstehende Screenshot aussehen.
   ![Dieser Screenshot zeigt ein vertikales Navigationsmenü für die Schnittstelle OscillatorNode, mit mehreren Unterlisten für Methoden und Eigenschaften, wie sie vom APIRef-Makro generiert werden](apiref-links.png)
2. **Funktionsstatus**: Ein [Banner, das den Funktionsstatus anzeigt](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners) (wie veraltet, nicht standardisiert oder experimentell), wird bei Bedarf automatisch hinzugefügt. Dafür müssen Sie [den Status im Browser-Kompatibilitäts-Datenrepository aktualisieren](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
3. **Beschreibung**: Der erste Absatz der Schnittstellenseite sollte eine kurze, prägnante Beschreibung des übergeordneten Zwecks der Schnittstelle bieten. Sie können auch ein oder zwei weitere Absätze hinzufügen, wenn eine zusätzliche Beschreibung erforderlich ist. Wenn die Schnittstelle tatsächlich ein Wörterbuch ist, sollten Sie diesen Begriff anstelle von "Schnittstelle" verwenden.
4. **Vererbungsdiagramm:** Verwenden Sie das [`\{{InheritanceDiagram}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/InheritanceDiagram.ejs) Makro, um ein SVG-Vererbungsdiagramm für die Schnittstelle einzubetten.
5. **Liste der Eigenschaften, Liste der Methoden**: Diese Abschnitte sollten den Titel "Eigenschaften" und "Methoden" tragen und Links (mithilfe des \\{{domxref}} Makros) zu einer Referenzseite für jede Eigenschaft/Methode der Schnittstelle enthalten, zusammen mit einer Beschreibung dessen, was jede von ihnen tut. Diese sollten mit [Beschreibung-/Definitionslisten](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists) ausgezeichnet werden. Jede Beschreibung sollte kurz und präzise sein — wenn möglich, ein Satz. Siehe den Abschnitt "Referenzieren anderer API-Funktionen mit dem \\{{domxref}} Makro" für einen schnelleren Weg, um Links zu anderen Seiten zu erstellen.

   Am Anfang beider Abschnitte, vor dem Beginn der Liste der Eigenschaften/Methoden, geben Sie die Vererbung mit dem passenden Satz an, in Kursivschrift:

   - _Diese Schnittstelle implementiert keine spezifischen Eigenschaften, sondern erbt Eigenschaften von \\{{domxref("XYZ")}}, und \\{{domxref("XYZ2")}}._
   - _Diese Schnittstelle erbt auch Eigenschaften von \\{{domxref("XYZ")}}, und \\{{domxref("XYZ2")}}._
   - _Diese Schnittstelle implementiert keine spezifischen Methoden, sondern erbt Methoden von \\{{domxref("XYZ")}}, und \\{{domxref("XYZ2")}}._
   - _Diese Schnittstelle erbt auch Methoden von \\{{domxref("XYZ")}}, und \\{{domxref("XYZ2")}}._

   > [!NOTE]
   > Eigenschaften, die schreibgeschützt sind, sollten das \\{{ReadOnlyInline}} Makro enthalten, das ein kleines "Read only" Abzeichen erstellt, auf derselben Linie wie ihre \\{{domxref}} Links (nach der Nutzung des \\{{experimentalInline}}, \\{{non-standard_Inline}} und \\{{deprecatedInline}} Makros, wenn einige dieser Makros benötigt werden).

6. **Beispiele**: Fügen Sie eine Code-Auflistung ein, um die typische Nutzung einer Hauptfunktion der API zu zeigen. Anstatt den gesamten Code aufzulisten, sollten Sie einen interessanten Teil davon auflisten. Für eine vollständige Code-Auflistung könnten Sie auf ein [GitHub](https://github.com/) Repository verweisen, das das vollständige Beispiel enthält, und Sie könnten auch auf ein Live-Beispiel verlinken, das mit der [GitHub gh-pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) Funktion erstellt wurde (solange es nur clientseitigen Code verwendet, natürlich.) Wenn das Beispiel visuell ist, könnten Sie auch das MDN [Live Sample](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) Feature nutzen, um es live und spielbar auf der Seite zu machen.
7. **Spezifikationstabellen**: An diesem Punkt müssen Sie eine Spezifikationstabelle einfügen — siehe den Abschnitt "Erstellen einer Spezifikationstabelle" für weitere Details.
8. **Browser-Kompatibilität**: Jetzt müssen Sie eine Tabelle zur Browser-Kompatibilität einfügen. Siehe [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Details.
9. **Polyfill**: Falls sinnvoll, fügen Sie diesen Abschnitt hinzu, indem Sie Code für ein Polyfill bereitstellen, der es ermöglicht, die API auch in Browsern zu verwenden, die sie nicht implementieren. Wenn kein Polyfill existiert oder benötigt wird, lassen Sie diesen Abschnitt ganz weg.
10. **Siehe auch**: Der Abschnitt "Siehe auch" ist ein guter Ort, um weitere Links aufzunehmen, die nützlich sein könnten, wenn Sie mehr über diese Technologie erfahren, einschließlich MDN (und externer) Tutorials, Beispiele, Bibliotheken usw. Wir haben eine großzügige Richtlinie für das Verlinken zu externen Quellen, aber beachten Sie Folgendes:

    - Fügen Sie keine Seiten hinzu, die die gleiche Information wie eine andere Seite im MDN enthalten; verlinken Sie stattdessen auf diese Seite.
    - Setzen Sie keine Autorennamen — wir sind eine schreiberneutrale Dokumentationsseite. Verlinken Sie auf das Dokument; der Autorenname wird dort angezeigt.
    - Achten Sie besonders auf Blogbeiträge: Sie neigen dazu, veraltet zu sein (alte Syntax, falsche Kompati
