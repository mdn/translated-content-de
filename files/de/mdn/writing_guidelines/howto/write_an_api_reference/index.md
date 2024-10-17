---
title: Wie man eine API-Referenz schreibt
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference
l10n:
  sourceCommit: acc6ec7d08ede0727a68cbc696e983c572940f62
---

{{MDNSidebar}}

Dieses Leitfaden führt Sie durch alles, was Sie wissen müssen, um eine API-Referenz auf MDN zu schreiben.

## Vorbereitung

Bevor Sie beginnen, eine API zu dokumentieren, gibt es einige Dinge, die Sie vorbereiten und im Voraus planen sollten, bevor Sie tatsächlich mit dem Schreiben beginnen.

### Vorausgesetztes Wissen

Es wird davon ausgegangen, dass Sie vor dem Lesen dieses Leitfadens über angemessenes Wissen verfügen über:

- Webtechnologien wie HTML, CSS und JavaScript. JavaScript ist am wichtigsten.
- Das Lesen von Webtechnologie-Spezifikationen. Sie werden diese häufig ansehen, während Sie APIs dokumentieren.

Alles andere kann man unterwegs lernen.

### Vorausgesetzte Ressourcen

Bevor Sie beginnen, eine API zu dokumentieren, sollten Sie Folgendes zur Verfügung haben:

1. Die neueste Spezifikation:
   Egal, ob es sich um eine W3C-Empfehlung oder einen frühen Entwurfsentwurf handelt, Sie sollten sich auf den neuesten verfügbaren Entwurf der Spezifikation beziehen, die diese API abdeckt (oder die Spezifikationen, die sie abdecken).
   Sie können es in der Regel durch eine Websuche finden. Die neueste Version wird oft von allen Versionen der Spezifikation verlinkt, gelistet unter "letzter Entwurf" oder ähnlich.
2. Die neuesten modernen Webbrowser:
   Diese sollten experimentelle/Alpha-Versionen sein, wie zum Beispiel [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/)/[Chrome Canary](https://www.google.com/intl/en/chrome/canary/), die eher die Funktionen unterstützen, die Sie dokumentieren.
   Dies ist besonders wichtig, wenn Sie eine neue/experimentelle API dokumentieren.
3. Demos/Blog-Posts/andere Informationen: Finden Sie so viele Informationen, wie Sie können.
4. Nützliche technische Kontakte:
   Es ist wirklich hilfreich, einen freundlichen technischen Kontakt zu finden, um Fragen zur Spezifikation zu stellen, jemanden, der an der Standardisierung der API beteiligt ist, oder an deren Implementierung in einem Browser.
   Gute Orte, um diese Personen zu finden, sind:

   - Ihr internes Firmenadressbuch, wenn Sie für ein entsprechendes Unternehmen arbeiten.
   - Eine öffentliche Mailingliste, die in die Diskussion über diese API eingebunden ist, wie Mozilla's [dev-platform](https://groups.google.com/a/mozilla.org/g/dev-platform/) oder eine W3C-Liste wie [public-webapps](https://lists.w3.org/Archives/Public/public-webapps/).
   - Die Spezifikation selbst. Beispielsweise listet die [Web Audio API Spezifikation](https://webaudio.github.io/web-audio-api/) die Autoren und deren Kontaktdaten oben auf.

### Nehmen Sie sich Zeit, um mit der API zu spielen

Sie werden im Laufe der Dokumentation einer API viele Male zurückkehren, um Demos zu erstellen, aber es ist nützlich, damit zu beginnen, sich mit der Funktionsweise der API vertraut zu machen — lernen Sie, was die Hauptschnittstellen/Eigenschaften/Methoden sind, was die primären Anwendungsfälle sind und wie man einfache Funktionen mit ihr schreibt.

Wenn sich eine API geändert hat, müssen Sie darauf achten, dass bestehende Demos, auf die Sie sich beziehen oder von denen Sie lernen, nicht veraltet sind. Überprüfen Sie die Hauptkonstruktionen, die in der Demo verwendet werden, um zu sehen, ob sie mit der neuesten Spezifikation übereinstimmen. Sie funktionieren möglicherweise auch nicht in aktuellen Browsern, aber dies ist kein sehr zuverlässiger Test, da die alten Funktionen oft aus Gründen der Abwärtskompatibilität weiterhin unterstützt werden.

> [!HINWEIS]
> Wenn die Spezifikation kürzlich aktualisiert wurde, sodass beispielsweise eine Methode jetzt anders definiert ist, aber die alte Methode noch in Browsern funktioniert, müssen Sie oftmals beide an der gleichen Stelle dokumentieren, damit sowohl die alte als auch die neue Methode abgedeckt werden.
> Wenn Sie Hilfe benötigen, beziehen Sie sich auf Demos, die Sie gefunden haben, oder fragen Sie einen technischen Kontakt.

### Erstellen Sie die Liste der Dokumente, die Sie schreiben oder aktualisieren müssen

Eine API-Referenz wird im Allgemeinen die folgenden Seiten enthalten.
Weitere Details darüber, was jede Seite enthält, Beispiele und Vorlagen finden Sie in unserem Artikel [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types).
Bevor Sie beginnen, sollten Sie eine Liste aller Seiten schreiben, die Sie erstellen sollten.

1. Überblicksseite
2. Schnittstellenseiten
3. Konstruktorseiten
4. Methodenseiten
5. Eigenschaftsseiten
6. Ereignisseiten
7. Konzept/Leitfaden-Seiten
8. Beispiele

> [!HINWEIS]
> Wir werden in diesem Artikel auf die [Web Audio API](/de/docs/Web/API/Web_Audio_API) für Beispiele verweisen.

#### Überblicksseiten

Eine einzelne API-Überblicksseite wird verwendet, um die Rolle der API, ihre High-Level-Schnittstellen, verwandte Funktionen, die in anderen Schnittstellen enthalten sind, und andere hochrangige Details zu beschreiben.
Ihr Name und Slug sollte der Name der API plus "API" am Ende sein. Sie wird auf der obersten Ebene der API-Referenz platziert, als Kind von [https://developer.mozilla.org/de/docs/Web/API](/de/docs/Web/API).

Beispiel:

- Titel: _Web Audio API_
- Slug: _Web_Audio_API_
- URL: [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API](/de/docs/Web/API/Web_Audio_API)

#### Schnittstellenseiten

Jede Schnittstelle wird ebenfalls ihre eigene Seite haben, auf der der Zweck der Schnittstelle beschrieben wird, jede enthaltene Komponente (Konstruktoren, Methoden, Eigenschaften usw.), und angezeigt wird, mit welchen Browsern sie kompatibel ist.
Der Name und der Slug einer Seite sollten der Name der Schnittstelle sein, genau wie in der Spezifikation geschrieben.
Jede Seite wird auf der obersten Ebene der API-Referenz platziert, als Kind von [https://developer.mozilla.org/de/docs/Web/API](/de/docs/Web/API).

Beispiele:

- Titel: _AudioContext_
- Slug: _AudioContext_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext](/de/docs/Web/API/AudioContext)

<!---->

- Titel: _AudioNode_
- Slug: _AudioNode_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioNode](/de/docs/Web/API/AudioNode)

> [!HINWEIS]
> Wir dokumentieren jedes Mitglied, das in der Schnittstelle vorkommt. Sie sollten die folgenden Regeln beachten:

- Wir dokumentieren Methoden, die auf dem Prototyp eines Objekts definiert sind, das diese Schnittstelle implementiert (Instanzmethoden), und Methoden, die auf der tatsächlichen Klasse selbst definiert sind (statische Methoden).
  In den seltenen Fällen, in denen beide auf derselben Schnittstelle existieren, sollten Sie sie in separaten Abschnitten auf der Seite auflisten (Statische Methoden/Instanzmethoden).
  Normalerweise existieren nur Instanzmethoden, in diesem Fall können Sie diese unter dem Titel "Methoden" auflisten.
- Wir dokumentieren keine geerbten Eigenschaften und Methoden der Schnittstelle: Diese sind auf der jeweiligen Elternschnittstelle aufgelistet. Wir weisen jedoch auf ihre Existenz hin.
- Wir dokumentieren Eigenschaften und Methoden, die in Mixins definiert sind. Bitte sehen Sie sich den [Beitragsleitfaden für Mixins](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#mixins) für weitere Details an.
- Spezielle Methoden wie der Stringifizierer (`toString()`) und der Jsonifizierer (`toJSON()`) werden ebenfalls aufgeführt, wenn sie existieren.
- Benannte Konstruktoren (wie `Image()` für [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)) werden ebenfalls aufgelistet, wenn relevant.

#### Konstruktorseiten

Jede Schnittstelle hat null oder einen Konstruktor, der auf einer Unterseite der Schnittstellenseite dokumentiert wird. Sie beschreibt den Zweck des Konstruktors und zeigt, wie seine Syntax aussieht, Anwendungsbeispiele, Browser-Kompatibilitätsinformationen usw. Der Slug ist der Name des Konstruktors, der genau derselbe wie der Name der Schnittstelle ist, und der Titel ist der Schnittstellenname, Punkt, Konstruktionsname dann Klammern am Ende.

Beispiel:

- Titel: _AudioContext.AudioContext()_
- Slug: _AudioContext_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/AudioContext](/de/docs/Web/API/AudioContext/AudioContext)

#### Eigenschaftsseiten

Jede Schnittstelle hat null oder mehr Eigenschaften, die auf Unterseiten der Schnittstellenseite dokumentiert werden. Jede Seite beschreibt den Zweck der Eigenschaft und zeigt, wie ihre Syntax aussieht, Anwendungsbeispiele, Browser-Kompatibilitätsinformationen usw. Der Slug ist der Name der Eigenschaft, und der Titel ist der Schnittstellenname, Punkt, dann der Eigenschaftsname.

Beispiele:

- Titel: _AudioContext.state_
- Slug: _state_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/state](/de/docs/Web/API/BaseAudioContext/state)

<!---->

#### Methodenseiten

Jede Schnittstelle hat null oder mehr Methoden, die auf Unterseiten der Schnittstellenseite dokumentiert werden. Jede Seite beschreibt den Zweck der Methode und zeigt, wie ihre Syntax aussieht, Anwendungsbeispiele, Browser-Kompatibilitätsinformationen usw. Der Slug ist der Name der Methode, und der Titel ist der Schnittstellenname, Punkt, Methodenname, dann Klammern.

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

Erstellen Sie keine Seiten für `on` Ereignishandler-Eigenschaften. Erwähnen Sie beide Wege, das Ereignis auf der `eventName_event` Seite zuzugreifen.

Beispiel:

- Titel: XRSession: end event
- Slug: end_event
- URL: [https://developer.mozilla.org/de/docs/Web/XRSession/end_event](/de/docs/Web/API/XRSession/end_event)

#### Konzept/Leitfaden-Seiten

Die meisten API-Referenzen haben mindestens einen Leitfaden und manchmal auch eine Konzeptseite, die diesen begleitet. Mindestens sollte eine API-Referenz einen Leitfaden enthalten, der "Verwendung der _name-of-api_" genannt wird und einen grundlegenden Leitfaden dafür bietet, wie die API verwendet wird. Komplexere APIs können mehrere Nutzungsleitfäden erfordern, um zu erklären, wie verschiedene Aspekte der API verwendet werden.

Wenn erforderlich, können Sie auch einen Konzeptartikel einschließen, der "_name-of-api_ Konzepte" genannt wird und eine Erklärung der Theorie hinter den Konzepten bietet, die Entwickler verstehen sollten, um die API effektiv zu nutzen.

Diese Artikel sollten alle als Unterseiten der API-Überblicksseite erstellt werden. Zum Beispiel hat das Web Audio vier Leitfäden und einen Konzeptartikel:

- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)

#### Beispiele

Sie sollten einige Beispiele erstellen, die mindestens die gebräuchlichsten Anwendungsfälle der API demonstrieren. Sie können diese überall platzieren, wo es angemessen ist, obwohl der empfohlene Ort das [MDN GitHub Repo](https://github.com/mdn/) ist.

#### Alle auflisten

Das Erstellen einer Liste all dieser Unterseiten ist eine gute Methode, um diese zu verfolgen. Beispiel:

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

Jede Schnittstelle in der Liste hat eine separate Seite erstellt, die als Unterseite von `https://developer.mozilla.org/de/docs/Web/API` fungiert; zum Beispiel würde das Dokument für [`AudioContext`](/de/docs/Web/API/AudioContext) unter `https://developer.mozilla.org/de/docs/Web/API/AudioContext` gefunden werden. Jede [Schnittstellenseite](#schnittstellenseiten) erklärt, was diese Schnittstelle tut und bietet eine Liste der Methoden und Eigenschaften, die die Schnittstelle bilden. Dann wird jede Methode und Eigenschaft auf ihrer eigenen Seite dokumentiert, die als Unterseite der Schnittstelle erstellt wird, zu der sie gehört. Zum Beispiel wird [`BaseAudioContext/currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) bei `https://developer.mozilla.org/de/docs/Web/API/AudioContext/currentTime` dokumentiert.

## Erstellen Sie die Seiten

Erstellen Sie jetzt die Seiten, die Sie benötigen, gemäß der untenstehenden Struktur. Unser [MDN Inhalt README](https://github.com/mdn/content#adding-a-new-document) enthält Anleitungen zum Erstellen eines neuen Dokuments, und unser [Leitfaden für Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) enthält weitere Beispiele und Seitenvorlagen, die nützlich sein könnten.

### Struktur einer Überblicksseite

API-Landingpages werden sich stark in der Länge unterscheiden, je nachdem wie groß die API ist, aber sie werden alle im Grunde die gleichen Merkmale haben. Siehe [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API](/de/docs/Web/API/Web_Audio_API) für ein Beispiel einer großen Landingpage.

Die Merkmale einer Landingpage sind unten umrissen:

1. **Beschreibung**: der erste Absatz der Landingpage sollte eine kurze, prägnante Beschreibung des übergeordneten Zwecks der API bieten.
2. **Konzepte und Nutzung Abschnitt**: Der nächste Abschnitt sollte mit "[name der API] Konzepte und Nutzung" betitelt werden und einen Überblick über alle Hauptfunktionen bieten, die die API bietet, welche Probleme sie löst und wie sie funktioniert — alles auf einem hohen Niveau. Dieser Abschnitt sollte ziemlich kurz sein und nicht auf Code oder spezifische Implementierungsdetails eingehen.
3. **Liste der Schnittstellen**: Dieser Abschnitt sollte mit "[name der API] Schnittstellen" betitelt werden und Links zur Referenzseite für jede Schnittstelle, die die API bildet, zusammen mit einer kurzen Beschreibung dessen, was jede tut, bieten. Siehe den Abschnitt "Referenzieren anderer API-Features mit dem \\{{domxref}} Makro" für einen schnelleren Weg neue Seiten zu erstellen.
4. **Beispiele**: Dieser Abschnitt sollte ein einfaches Anwendungsfall oder zwei für die API zeigen.
5. **Spezifikationstabelle**: An diesem Punkt müssen Sie eine Spezifikationstabelle einfügen — siehe den Abschnitt "Erstellen einer Spezifikationsreferenztabelle" für mehr Details.
6. **Browser-Kompatibilität**: Jetzt müssen Sie eine Browser-Kompatibilitätstabelle einfügen. Siehe [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Details.
7. **See also**: Der Abschnitt "See also" ist ein guter Platz, um weitere Links, die beim Lernen über diese Technologie nützlich sein könnten, einzuschließen, einschließlich MDN (und externer) Tutorials, Beispiele, Bibliotheken, etc.

### Struktur einer Schnittstellenseite

Jetzt sollten Sie bereit sein, Ihre Schnittstellenseiten zu schreiben. Jede Schnittstellenreferenzseite sollte die folgende Struktur aufweisen:

1. **\\{{APIRef}}**: Fügen Sie die \\{{APIRef}} Makro in der ersten Zeile jeder Schnittstellenseite ein, einschließlich des Namens der API als Argument, also zum Beispiel \\{{APIRef("Web Audio API")}}. Dieses Makro dient dazu, ein Referenzmenü links von der Schnittstellenseite zu konstruieren, das Eigenschaften und Methoden enthält, sowie andere Schnelllinks, die im [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) Makro definiert sind (bitten Sie jemanden, Ihre API zu einem bestehenden GroupData Eintrag hinzuzufügen oder einen neuen zu erstellen, falls sie dort nicht bereits aufgeführt ist). Das Menü wird etwa wie der untenstehende Screenshot aussehen.
   ![Dieser Screenshot zeigt ein vertikales Navigationsmenü für die OscillatorNode-Schnittstelle, mit mehreren Unterlisten für Methoden und Eigenschaften, wie es vom APIRef-Makro generiert wurde.](apiref-links.png)
2. **Funktionsstatus**: Ein [Banner, das den Funktionsstatus anzeigt](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners) (wie veraltet, nicht standardisiert, oder experimentell) wird automatisch hinzugefügt, falls nötig. Dafür müssen Sie [den Status im Browser-compat-data Repository aktualisieren](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
3. **Beschreibung**: der erste Absatz der Schnittstellenseite sollte eine kurze prägnante Beschreibung des übergeordneten Zwecks der Schnittstelle bieten. Sie möchten vielleicht auch ein paar zusätzliche Absätze einschließen, falls eine zusätzliche Beschreibung benötigt wird. Falls die Schnittstelle tatsächlich ein Wörterbuch ist, sollten Sie diesen Begriff statt des Begriffs "Schnittstelle" verwenden.
4. **Vererbungsdiagramm:** Verwenden Sie das [`\{{InheritanceDiagram}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/InheritanceDiagram.ejs) Makro, um ein SVG Vererbungsdiagramm für die Schnittstelle einzubetten.
5. **Liste der Eigenschaften, Liste der Methoden**: Diese Abschnitte sollten "Eigenschaften" und "Methoden" betitelt werden und Links (unter Verwendung des \\{{domxref}} Makros) zu einer Referenzseite für jede Eigenschaft/Methode dieser Schnittstelle, zusammen mit einer Beschreibung dessen, was jede tut, bieten. Diese sollten mit [Beschreibung/Definition Listen](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists) markiert werden. Jede Beschreibung sollte kurz und prägnant sein — ein Satz, wenn möglich. Siehe den Abschnitt "Referenzieren anderer API-Features mit dem \\{{domxref}} Makro" für einen schnelleren Weg, Links zu anderen Seiten zu erstellen.

   Zu Beginn beider Abschnitte, vor Beginn der Liste der Eigenschaften/Methoden, geben Sie die Vererbung mit dem entsprechenden Satz, in Kursivschrift, an:

   - _Diese Schnittstelle implementiert keine spezifischen Eigenschaften, erbt jedoch Eigenschaften von \\{{domxref("XYZ")}}, und \\{{domxref("XYZ2")}}._
   - _Diese Schnittstelle erbt auch Eigenschaften von \\{{domxref("XYZ")}}, und \\{{domxref("XYZ2")}}._
   - _Diese Schnittstelle implementiert keine spezifischen Methoden, erbt jedoch Methoden von \\{{domxref("XYZ")}}, und \\{{domxref("XYZ2")}}._
   - _Diese Schnittstelle erbt auch Methoden von \\{{domxref("XYZ")}}, und \\{{domxref("XYZ2")}}._

   > [!HINWEIS]
   > Eigenschaften, die nur lesbar sind, sollten das \\{{ReadOnlyInline}} Makro, das ein kleines "Nur Lesen" Abzeichen erstellt, auf derselben Zeile ihrer \\{{domxref}} Links (nach der Verwendung der \\{{experimentalInline}}, \\{{non-standard_Inline}} und \\{{deprecatedInline}} Makros, falls einige dieser benötigt werden) enthalten.

6. **Beispiele**: Fügen Sie eine Codeliste ein, die die typische Verwendung eines Hauptmerkmals der API zeigt. Anstatt den gesamten Code aufzulisten, sollten Sie einen interessanten Ausschnitt davon listen. Für eine vollständige Codeliste können Sie ein [GitHub](https://github.com/) Repo, das das vollständige Beispiel enthält, referenzieren, und Sie können auch ein Live-Beispiel verlinken, das mit [GitHub gh-pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) erstellt wurde (solange es natürlich nur clientseitigen Code verwendet). Wenn das Beispiel visuell ist, können Sie auch das MDN [Live Sample](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) Feature verwenden, um es live und spielbar auf der Seite zu machen.
7. **Spezifikationstabelle**: An diesem Punkt müssen Sie eine Spezifikationstabelle einfügen — siehe den Abschnitt "Erstellen einer Spezifikationsreferenztabelle" für mehr Details.
8. **Browser-Kompatibilität**: Jetzt müssen Sie eine Browser-Kompatibilitätstabelle einfügen. Siehe [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Details.
9. **Polyfill**: Wenn relevant, fügen Sie diesen Abschnitt hinzu, indem Sie einen Code für ein Polyfill bereitstellen, der es ermöglicht, die API auch in Browsern zu verwenden, die sie nicht implementieren. Wenn kein Polyfill existiert oder benötigt wird, lassen Sie diesen Abschnitt ganz weg.
10. **See also**: Der Abschnitt "See also" ist ein guter Platz, um weitere Links, die beim Lernen über diese Technologie nützlich sein könnten, einzuschließen, einschließlich MDN (und externer) Tutorials, Beispiele, Bibliotheken, etc. Wir haben eine liberale Richtlinie für das Verlinken zu externen Quellen, aber beachten Sie Folgendes:

    - Schließen Sie keine Seiten mit den gleichen Informationen wie eine andere Seite auf MDN ein; verlinken Sie stattdessen auf diese Seite.
    - Geben Sie keine Autorennamen an — wir sind eine dokumentationsneutrale Website. Verlinken Sie auf das Dokument; der Autorenname wird dort angezeigt.
    - Achten Sie besonders auf Blogposts: sie neigen dazu, veraltet zu werden (alte Syntax, falsche Kompatibilitätsinformationen). Verlinken Sie nur auf sie, wenn sie einen klaren Mehrwert bieten, der in einem gepflegten Dokument nicht gefunden werden kann.
    - Verwenden Sie keine Handlungsverben wie "Siehe … für mehr Informationen" oder "Klicken Sie auf …", Sie wissen nicht, ob Ihr Leser in der Lage ist, den Link zu sehen oder zu klicken (wie auf einer Papier-Version des Dokuments).

#### Schnittstellen-Seitenbeispiele

Folgende sind beispielhafte Beispiele von Schnittstellenseiten:

- [`Request`](/de/docs/Web/API/Request) aus der [Fetch API](/de/docs/Web/API/Fetch_API).
- [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) aus der [Web Speech API](/de/docs/Web/API/Web_Speech_API).

### Struktur einer Eigenschaftsseite

Erstellen Sie Ihre Eigenschaftsseiten als Unterseiten der Schnittstelle, auf der sie implementiert sind. Kopieren Sie die Struktur einer anderen Eigenschaftsseite, um die Grundlage für Ihre neue Seite zu bilden.

Bearbeiten Sie den Eigenschaftsseitennamen so, dass er dem Konvention `Interface.property_name` folgt.

Eigenschaftsseiten müssen die folgenden Abschnitte haben:

1. **Titel**: der Titel der Seite muss **InterfaceName.propertyName** sein. Der Schnittstellenname muss mit einem Großbuchstaben beginnen. Obwohl eine Schnittstelle in JavaScript auf dem Prototyp von Objekten implementiert wird, beinhalten wir `.prototype.` nicht im Titel, wie wir es in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) tun.
2. **\\{{APIRef}}**: Fügen Sie die \\{{APIRef}} Makro in die erste Zeile jeder Eigenschaftsseite ein, einschließlich des Namens der API als Argument, also zum Beispiel \\{{APIRef("Web Audio API")}}. Dieses Makro dient dazu, ein Referenzmenü links von der Schnittstellenseite zu konstruieren, das Eigenschaften und Methoden enthält, sowie andere Schnelllinks, die im [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) Makro definiert sind (bitten Sie jemanden, Ihre API zu einem bestehenden GroupData Eintrag hinzuzufügen oder einen neuen zu erstellen, falls sie dort nicht bereits aufgeführt ist). Das Menü wird etwa wie der untenstehende Screenshot aussehen.
   ![Dieser Screenshot zeigt ein vertikales Navigationsmenü für die OscillatorNode-Schnittstelle, mit mehreren Unterlisten für Methoden und Eigenschaften, wie es vom APIRef-Makro generiert wurde.](apiref-links.png)
3. **Funktionsstatus**: Ein [Banner, das den Funktionsstatus anzeigt](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners) (wie veraltet, nicht standardisiert, oder experimentell) wird automatisch hinzugefügt, falls nötig. Dafür müssen Sie [den Status im Browser-compat-data Repository aktualisieren](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).

4. **Beschreibung**: der erste Absatz der Eigenschaftsseite sollte eine kurze, prägnante Beschreibung des übergeordneten Zwecks der Eigenschaft bieten. Sie möchten vielleicht auch ein paar zusätzliche Absätze einschließen, falls eine zusätzliche Beschreibung benötigt wird. Offensichtliche zusätzliche Informationen, die eingeschlossen werden sollten, sind sein Standard-/Anfangswert und ob es nur lesbar ist oder nicht. Die Struktur des ersten Satzes muss sein:

   - Für nur lesbare Eigenschaften
     - : Die **`InterfaceName.property`** schreibgeschützte Eigenschaft gibt einen \\{{domxref("type")}} zurück, der ...
   - Für andere Eigenschaften
     - : Die **`InterfaceName.property`** Eigenschaft ist ein \\{{domxref("type")}}, der ...

   > **Hinweis:** `InterfaceName.property` sollte in `<code>` sein und zusätzlich sollte es in fett (`<strong>`) gesetzt sein, wenn es zum ersten Mal verwendet wird.

5. **Wert**: Der Wertabschnitt wird eine Beschreibung des Wertes der Eigenschaft enthalten. Dies sollte den Datentyp der Eigenschaft und das, was er repräsentiert, enthalten. Für ein Beispiel siehe [`SpeechRecognition.grammars`](/de/docs/Web/API/SpeechRecognition/grammars).

6. **Beispiele**: Fügen Sie eine Codeliste ein, die die typische Verwendung der betreffenden Eigenschaft zeigt. Sie sollten mit einem einfachen Beispiel beginnen, das zeigt, wie ein Objekt des Typs erstellt wird und wie auf die Eigenschaft zugegriffen wird. Komplexere Beispiele können nach einem solchen Beispiel hinzugefügt werden. In diesen zusätzlichen Beispielen, anstatt den gesamten Code aufzulisten, sollten Sie einen interessanten Ausschnitt davon listen. Für eine vollständige Codeliste können Sie ein [GitHub](https://github.com/) Repo, das das vollständige Beispiel enthält, referenzieren, und Sie können auch ein Live-Beispiel verlinken, das mit [GitHub gh-pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) erstellt wurde (solange es natürlich nur clientseitigen Code verwendet). Wenn das Beispiel visuell ist, können Sie auch das MDN [Live Sample](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) Feature verwenden, um es live und spielbar auf der Seite zu machen.
7. **Spezifikationstabelle**: An diesem Punkt müssen Sie eine Spezifikationstabelle einfügen — siehe den Abschnitt "Erstellen einer Spezifikationsreferenztabelle" für mehr Details.
8. **Browser-Kompatibilität**: Jetzt müssen Sie eine Browser-Kompatibilitätstabelle einfügen. Siehe [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Details.
9. **See also**: Der Abschnitt "See also" ist ein guter Platz, um weitere Links, die nützlich sein könnten, wenn diese Technologie verwendet wird, einzuschließen: wie Methoden und Eigenschaften, die von einer Änderung dieser Eigenschaft beeinflusst werden oder Ereignisse, die im Zusammenhang damit ausgelöst werden. Weitere Links, die nützlich sein könnten, um über diese Technologie zu lernen, einschließlich MDN (und externer) Tutorials, Beispiele, Bibliotheken,… können hinzugefügt werden, obwohl es nützlich sein könnte, diese stattdessen auf der Schnittstellenreferenzseite hinzuzufügen.

#### Eigenschaftsseitenbeispiele

Folgende sind beispielhafte Beispiele von Eigenschaftsseiten:

- [`Request.method`](/de/docs/Web/API/Request/method) aus der [Fetch API](/de/docs/Web/API/Fetch_API).
- [`SpeechSynthesis.speaking`](/de/docs/Web/API/SpeechSynthesis/speaking) aus der [Web Speech API](/de/docs/Web/API/Web_Speech_API).

### Struktur einer Methodenseite

Erstellen Sie Ihre Methodenseiten als Unterseiten der Schnittstelle, auf der sie implementiert sind. Kopieren Sie die Struktur einer anderen Methodenseite, um die Grundlage für Ihre neue Seite zu bilden.

Methodenseiten benötigen die folgenden Abschnitte:

1. **Titel**: der Titel der Seite muss **InterfaceName.method()** sein (mit den beiden abschließenden Klammern), aber der Slug (das Ende der Seiten-URL) darf keine Klammern enthalten. Der Schnittstellenname muss mit einem Großbuchstaben beginnen. Obwohl eine Schnittstelle in JavaScript auf dem Prototyp von Objekten implementiert wird, beinhalten wir `.prototype.` nicht im Titel, wie wir es in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) tun.
2. **\\{{APIRef}}**: Fügen Sie die \\{{APIRef}} Makro in die erste Zeile jeder Methodenseite ein, einschließlich des Namens der API als Argument, also zum Beispiel \\{{APIRef("Web Audio API")}}. Dieses Makro dient dazu, ein Referenzmenü links von der Schnittstellenseite zu konstruieren, das Eigenschaften und Methoden enthält, sowie andere Schnelllinks, die im [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) Makro definiert sind (bitten Sie jemanden, Ihre API zu einem bestehenden GroupData Eintrag hinzuzufügen oder einen neuen zu erstellen, falls sie dort nicht bereits aufgeführt ist). Das Menü wird etwa wie der untenstehende Screenshot aussehen.
   ![Dieser Screenshot zeigt ein vertikales Navigationsmenü für die OscillatorNode-Schnittstelle, mit mehreren Unterlisten für Methoden und Eigenschaften, wie es vom APIRef-Makro generiert wurde.](apiref-links.png)
3. **Funktionsstatus**: Ein [Banner, das den Funktionsstatus anzeigt](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners) (wie veraltet, nicht standardisiert, oder experimentell) wird automatisch hinzugefügt, falls nötig. Dafür müssen Sie [den Status im Browser-compat-data Repository aktualisieren](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).

4. **Beschreibung**: Der erste Absatz der Methodenseite sollte eine kurze prägnante Beschreibung des übergeordneten Zwecks der Methode bieten. Sie möchten vielleicht auch ein paar zusätzliche Absätze einschließen, falls eine zusätzliche Beschreibung benötigt wird. Offensichtliche zusätzliche Informationen, die eingeschlossen werden sollten, sind ihre Standardparameterwerte, jede Theorie, auf die die Methode beruht, und was die Parameterwerte bedeuten.

   - Der Anfang des ersten Satzes muss die folgende Struktur haben:
     - : Die **`InterfaceName.method()`** Schnittstellenmethode …

   > **Hinweis:** `InterfaceName.method()` sollte im `<code>` sein und auch im Fett (`<strong>`) gesetzt sein, wenn sie zum ersten Mal verwendet wird.

5. **Syntax**: Der Syntaxabschnitt sollte ein 2–3 Zeilen Beispiel enthalten — normalerweise nur die Konstruktion der Schnittstelle, dann das Aufrufen der Schnittstellenmethode.

   - Die Syntax sollte die Form haben:
     - : methode(param1, param2, …)

   Der Syntaxabschnitt sollte drei Unterabschnitte enthalten (siehe [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign) für ein Beispiel):

   - "Parameter": Dies sollte eine Definitionsliste (oder ungeordnete Liste) enthalten, die die verschiedenen Parameter, die die Methode nimmt, benennt und beschreibt. Sie sollten das {{optional_inline}} Makro neben dem Parameternamen enthalten, falls es sich um optionale Parameter handelt. Wenn es keine Parameter gibt, sollte dieser Abschnitt weggelassen werden.
   - "Rückgabewert": Dies sollte angeben, welche Rückgabewert die Methode hat, sei es ein einfacher Wert wie ein Double oder Boolean, oder ein komplexerer Wert wie ein anderes Schnittstellenobjekt, in welchem Fall Sie das \\{{domxref}} Makro verwenden können, um auf die MDN API-Seite, die diese Schnittstelle behandelt, zu verlinken (falls vorhanden). Eine Methode könnte nichts zurückgeben, in welchem Fall der Rückgabewert als "\\{{jsxref('undefined')}}" geschrieben werden sollte (was in der gerenderten Seite wie folgt aussehen wird: {{jsxref("undefined")}}).
   - "Ausnahmen": Dies sollte die verschiedenen Ausnahmen auflisten, die ausgelöst werden können, wenn die Methode aufgerufen wird, und unter welchen Umständen. Wenn es keine Ausnahmen gibt, sollte dieser Abschnitt weggelassen werden.

6. **Beispiele**: Fügen Sie eine Codeliste ein, die die typische Verwendung der betreffenden Methode zeigt. Anstatt den gesamten Code aufzulisten, sollten Sie einen interessanten Ausschnitt davon listen. Für eine vollständige Codeliste sollten Sie ein [GitHub](https://github.com/) Repo, das das vollständige Beispiel enthält, referenzieren, und Sie können auch ein Live-Beispiel verlinken, das mit [GitHub gh-pages feature](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) erstellt wurde (solange es natürlich nur clientseitigen Code verwendet). Wenn das Beispiel visuell ist, können Sie auch das MDN [Live Sample](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) Feature verwenden, um es live und spielbar auf der Seite zu machen.
7. **Spezifikationstabelle**: An diesem Punkt müssen Sie eine Spezifikationstabelle einfügen — siehe den Abschnitt "Erstellen einer Spezifikationsreferenztabelle" für mehr Details.
8. **Browser-Kompatibilität**: Jetzt müssen Sie eine Browser-Kompatibilitätstabelle einfügen. Siehe [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Details.

#### Methodenseitenbeispiele

Folgende sind beispielhafte Beispiele von Methodenseiten:

- [`Document.getAnimations`](/de/docs/Web/API/Document/getAnimations) aus der [Web Animations API](/de/docs/Web/API/Web_Animations_API).
- [`fetch()`](/de/docs/Web/API/Window/fetch) aus der [Fetch API](/de/docs/Web/API/Fetch_API).

## Seitenleisten

Sobald Sie Ihre API-Referenzseiten erstellt haben, möchten Sie die richtigen Seitenleisten darauf einfügen, um die Seiten miteinander zu verbinden. Unser [Leitfaden für API-Referenz-Seitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) erklärt, wie das geht.
