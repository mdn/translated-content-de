---
title: Wie man eine API-Referenz schreibt
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference
l10n:
  sourceCommit: 188594e189f5e73267faf2626adbb84d26128b15
---

{{MDNSidebar}}

Dieser Leitfaden führt Sie durch alles, was Sie wissen müssen, um eine API-Referenz auf MDN zu schreiben.

## Vorbereitung

Bevor Sie beginnen, eine API zu dokumentieren, gibt es einige Dinge, die Sie vorbereiten und im Voraus planen sollten, bevor Sie tatsächlich mit dem Schreiben beginnen.

### Erforderliches Wissen

Es wird angenommen, dass Sie vor dem Lesen dieses Leitfadens ein angemessenes Wissen über Folgendes haben:

- Webtechnologien wie HTML, CSS und JavaScript. JavaScript ist am wichtigsten.
- Lesen von Webtechnologie-Spezifikationen. Sie werden diese häufig betrachten, während Sie APIs dokumentieren.

Alles andere kann unterwegs gelernt werden.

### Notwendige Ressourcen

Bevor Sie beginnen, eine API zu dokumentieren, sollten Sie Folgendes zur Verfügung haben:

1. Die neueste Spezifikation:
   Egal ob es sich um eine W3C-Empfehlung oder einen frühen Entwurfsentwurf handelt, Sie sollten sich auf den neuesten verfügbaren Entwurf der Spezifikation beziehen, der diese API abdeckt (oder Spezifikationen, die diese API abdecken).
   Um sie zu finden, können Sie normalerweise eine Websuche durchführen. Die neueste Version wird oft in allen Versionen der Spezifikation verlinkt, unter "neuester Entwurf" oder ähnlich.
2. Die neuesten modernen Webbrowser:
   Diese sollten experimentelle/Alpha-Versionen wie [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/) oder [Chrome Canary](https://www.google.com/intl/en/chrome/canary/) sein, die eher die von Ihnen dokumentierten Funktionen unterstützen.
   Dies ist besonders relevant, wenn Sie eine neue/experimentelle API dokumentieren.
3. Demos/Blogposts/Weitere Informationen: Finden Sie so viele Informationen wie möglich.
4. Nützliche technische Kontakte:
   Es ist sehr nützlich, einen freundlichen technischen Kontakt zu finden, dem Sie Fragen zur Spezifikation stellen können, jemanden, der an der Standardisierung der API beteiligt ist oder sie in einem Browser implementiert.
   Gute Orte, um sie zu finden, sind:

   - Ihr internes Firmenadressbuch, wenn Sie für ein entsprechendes Unternehmen arbeiten.
   - Eine öffentliche Mailingliste, die an der Diskussion dieser API beteiligt ist, wie Mozillas [dev-platform](https://groups.google.com/a/mozilla.org/g/dev-platform/) oder eine W3C-Liste wie [public-webapps](https://lists.w3.org/Archives/Public/public-webapps/).
   - Die Spezifikation selbst. Beispielsweise listet die [Web Audio API-Spezifikation](https://webaudio.github.io/web-audio-api/) die Autoren und ihre Kontaktdaten oben auf.

### Nehmen Sie sich Zeit, um mit der API zu experimentieren

Sie werden während des Dokumentierens einer API häufig zurückkehren, um Demos zu erstellen, aber es ist nützlich, zunächst Zeit damit zu verbringen, sich mit der Funktionsweise der API vertraut zu machen – lernen Sie, was die Hauptschnittstellen/Eigenschaften/Methoden sind, was die primären Anwendungsfälle sind und wie man einfache Funktionalitäten mit ihr schreibt.

Wenn sich eine API geändert hat, müssen Sie darauf achten, dass vorhandene Demos, auf die Sie sich beziehen oder von denen Sie lernen, nicht veraltet sind. Überprüfen Sie die Hauptkonstruktionen, die in der Demo verwendet werden, um festzustellen, ob sie der neuesten Spezifikation entsprechen. Sie funktionieren möglicherweise auch nicht in aktuellen Browsern, aber dies ist kein sehr zuverlässiger Test, da oft die alten Funktionen weiterhin für die Rückwärtskompatibilität unterstützt werden.

> [!NOTE]
> Wenn die Spezifikation kürzlich aktualisiert wurde, sodass beispielsweise eine Methode jetzt anders definiert ist, die alte Methode jedoch noch in Browsern funktioniert, müssen Sie oft beide an derselben Stelle dokumentieren, damit die alten und neuen Methoden abgedeckt sind.
> Wenn Sie Hilfe benötigen, beziehen Sie sich auf die gefundenen Demos oder fragen Sie einen technischen Kontakt.

### Erstellen Sie die Liste der Dokumente, die Sie schreiben oder aktualisieren müssen

Eine API-Referenz enthält im Allgemeinen die folgenden Seiten.
Details zu den Inhalten jeder Seite, Beispiele und Vorlagen finden Sie in unserem Artikel [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types). Bevor Sie beginnen, sollten Sie eine Liste aller Seiten aufschreiben, die Sie erstellen sollten.

1. Übersichtsseite
2. Schnittstellenseiten
3. Konstruktorsseiten
4. Methodenseiten
5. Eigenschaftsseiten
6. Ereignisseiten
7. Konzept-/Leitfaden-Seiten
8. Beispiele

> [!NOTE]
> Wir werden in diesem Artikel auf die [Web Audio API](/de/docs/Web/API/Web_Audio_API) für Beispiele verweisen.

#### Übersichtsseiten

Eine einzelne API-Übersichtsseite wird verwendet, um die Rolle der API, ihre Top-Level-Schnittstellen, verwandte Funktionen, die in anderen Schnittstellen enthalten sind, und andere hochrangige Details zu beschreiben.
Ihr Name und ihre Slug sollten der Name der API plus "API" am Ende sein. Sie wird auf der obersten Ebene der API-Referenz platziert, als Kind von [https://developer.mozilla.org/de/docs/Web/API](/de/docs/Web/API).

Beispiel:

- Titel: _Web Audio API_
- Slug: _Web_Audio_API_
- URL: [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API](/de/docs/Web/API/Web_Audio_API)

#### Schnittstellenseiten

Jede Schnittstelle wird auch ihre eigene Seite haben, die den Zweck der Schnittstelle beschreibt, alle Mitglieder (Konstruktoren, Methoden, Eigenschaften usw., die sie enthält) auflistet und zeigt, mit welchen Browsern sie kompatibel ist.
Der Name und Slug einer Seite sollte der Name der Schnittstelle sein, genau wie in der Spezifikation geschrieben.
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
> Wir dokumentieren jedes Mitglied, das in der Schnittstelle erscheint. Sie sollten sich die folgenden Regeln merken:

- Wir dokumentieren Methoden, die auf dem Prototyp eines Objekts definiert sind, das diese Schnittstelle implementiert (Instanzmethoden), sowie Methoden, die auf der tatsächlichen Klasse selbst definiert sind (statische Methoden).
  In den seltenen Fällen, in denen sie beide auf derselben Schnittstelle existieren, sollten Sie sie in separaten Abschnitten auf der Seite auflisten (Statische Methoden/Instanzmethoden).
  In der Regel existieren nur Instanzmethoden, in diesem Fall können Sie diese unter dem Titel "Methoden" auflisten.
- Wir dokumentieren keine geerbten Eigenschaften und Methoden der Schnittstelle: Sie sind auf der jeweiligen übergeordneten Schnittstelle aufgeführt. Wir deuten jedoch auf ihre Existenz hin.
- Wir dokumentieren Eigenschaften und Methoden, die in Mixins definiert sind. Bitte beachten Sie den [Beitragsleitfaden für Mixins](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#mixins) für weitere Details.
- Spezielle Methoden wie der Stringifier (`toString()`) und der Jsonizer (`toJSON()`) werden ebenfalls aufgelistet, falls sie existieren.
- Benannte Konstruktoren (wie `Image()` für {{domxref("HTMLImageElement")}}) werden ebenfalls aufgelistet, falls relevant.

#### Konstruktorsseiten

Jede Schnittstelle hat null oder einen Konstruktor, der auf einer Unterseite der Schnittstellenseite dokumentiert ist. Er beschreibt den Zweck des Konstruktors und zeigt, wie seine Syntax aussieht, Anwendungsbeispiele, Informationen zur Browserkompatibilität usw. Sein Slug ist der Name des Konstruktors, der genau derselbe wie der Name der Schnittstelle ist, und der Titel ist Schnittstellenname, Punkt, Konstruktorname, dann Klammern am Ende.

Beispiel:

- Titel: _AudioContext.AudioContext()_
- Slug: _AudioContext_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/AudioContext](/de/docs/Web/API/AudioContext/AudioContext)

#### Eigenschaftsseiten

Jede Schnittstelle hat null oder mehr Eigenschaften, dokumentiert auf Unterseiten der Schnittstellenseite. Jede Seite beschreibt den Zweck der Eigenschaft und zeigt, wie ihre Syntax aussieht, Anwendungsbeispiele, Informationen zur Browserkompatibilität usw. Ihr Slug ist der Name der Eigenschaft, und der Titel ist Schnittstellenname, Punkt, dann Eigenschaftsname.

Beispiele:

- Titel: _AudioContext.state_
- Slug: _state_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/state](/de/docs/Web/API/BaseAudioContext/state)

<!---->

#### Methodenseiten

Jede Schnittstelle hat null oder mehr Methoden, dokumentiert auf Unterseiten der Schnittstellenseite. Jede Seite beschreibt den Zweck der Methode und zeigt, wie ihre Syntax aussieht, Anwendungsbeispiele, Informationen zur Browserkompatibilität usw. Ihr Slug ist der Name der Methode, und der Titel ist Schnittstellenname, Punkt, Methodenname, dann Klammern.

Beispiele:

- Titel: _AudioContext.close()_
- Slug: _close_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/close](/de/docs/Web/API/AudioContext/close)

<!---->

- Titel: _AudioContext.createGain()_
- Slug: _createGain_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/createGain](/de/docs/Web/API/BaseAudioContext/createGain)

#### Ereignisseiten

Dokumentieren Sie Ereignisse als Unterseiten ihrer Ziel-Schnittstellen und verwenden Sie den Slug _eventname_\_event mit dem Titel auf `Interface: eventName event` eingestellt.

Erstellen Sie keine Seiten für `on` Ereignishandler Eigenschaften. Erwähnen Sie beide Möglichkeiten, um auf das Ereignis auf der `eventName_event`-Seite zuzugreifen.

Beispiel:

- Titel: XRSession: end event
- Slug: end_event
- URL: [https://developer.mozilla.org/de/docs/Web/XRSession/end_event](/de/docs/Web/API/XRSession/end_event)

#### Konzept-/Leitfaden-Seiten

Die meisten API-Referenzen haben mindestens einen Leitfaden und manchmal auch eine Konzeptseite, die ihn begleitet. Eine API-Referenz sollte mindestens einen Leitfaden namens "Using the _name-of-api_" enthalten, der einen grundlegenden Leitfaden zur Nutzung der API bietet. Komplexere APIs erfordern möglicherweise mehrere Anwendungsleitfäden, um zu erklären, wie verschiedene Aspekte der API verwendet werden.

Falls erforderlich, können Sie auch einen Konzeptartikel namens "_name-of-api_ concepts" einschließen, der Erklärungen zur Theorie hinter Konzepten bietet, die Entwickler verstehen sollten, um sie effektiv zu nutzen.

Diese Artikel sollten alle als Unterseiten der API-Übersichtsseite erstellt werden. Zum Beispiel hat die Web Audio API vier Leitfäden und einen Konzeptartikel:

- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)

#### Beispiele

Sie sollten einige Beispiele erstellen, die zumindest die häufigsten Anwendungsfälle der API demonstrieren. Sie können diese überall platzieren, wo es angemessen ist, obwohl der empfohlene Ort das [MDN GitHub-Repo](https://github.com/mdn/) ist.

#### Alle auflisten

Eine Liste dieser Unterseiten zu erstellen, ist eine gute Möglichkeit, sie zu verfolgen. Zum Beispiel:

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
- Events (Liste aktualisieren)

  - start
  - end
  - …

Jede Schnittstelle in der Liste hat eine separate Seite, die als Unterseite von `https://developer.mozilla.org/de/docs/Web/API` erstellt wird; beispielsweise würde das Dokument für {{domxref("AudioContext")}} unter `https://developer.mozilla.org/de/docs/Web/API/AudioContext` lokalisiert sein. Jede [Schnittstellen-Seite](#schnittstellenseiten) erklärt, was diese Schnittstelle macht, und bietet eine Liste der Methoden und Eigenschaften, die die Schnittstelle umfassen. Dann wird jede Methode und Eigenschaft auf ihrer eigenen Seite dokumentiert, die als Unterseite der Schnittstelle, deren Mitglied sie ist, erstellt wird. Zum Beispiel wird {{domxref("BaseAudioContext/currentTime")}} unter `https://developer.mozilla.org/de/docs/Web/API/AudioContext/currentTime` dokumentiert.

## Seiten erstellen

Erstellen Sie nun die Seiten, die Sie benötigen, gemäß den folgenden Strukturen. Unser [MDN-Content-README](https://github.com/mdn/content#adding-a-new-document) enthält Anweisungen zum Erstellen eines neuen Dokuments, und unser Leitfaden [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) hält weitere Beispiele und Seitentemplates bereit, die nützlich sein könnten.

### Struktur einer Übersichtsseite

API-Einstiegsseiten unterscheiden sich stark in ihrer Länge, abhängig davon, wie groß die API ist, aber sie haben alle im Wesentlichen die gleichen Merkmale. Siehe [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API](/de/docs/Web/API/Web_Audio_API) für ein Beispiel einer großen Einstiegsseite.

Die Merkmale einer Einstiegsseite sind unten aufgeführt:

1. **Beschreibung**: Der erste Absatz der Einstiegsseite sollte eine kurze, prägnante Beschreibung des übergeordneten Zwecks der API liefern.
2. **Konzepte und Gebrauchsanweisungen**: Der nächste Abschnitt sollte "\[Name der API] Konzepte und Gebrauchsanweisungen" betitelt sein und einen Überblick über alle Hauptfunktionen bieten, die die API bereitstellt, welche Probleme sie löst und wie sie funktioniert - alles auf hoher Ebene. Dieser Abschnitt sollte ziemlich kurz sein und nicht auf Code oder spezifische Implementierungsdetails eingehen.
3. **Liste der Schnittstellen**: Dieser Abschnitt sollte "\[Name der API] Schnittstellen" betitelt sein und Links zur Referenzseite für jede Schnittstelle, die die API bildet, sowie eine kurze Beschreibung dessen, was jede einzelne tut, bereitstellen. Siehe den Abschnitt "Referenzierung anderer API-Funktionen mit dem \\{{domxref}}-Makro" für eine schnellere Möglichkeit zum Erstellen neuer Seiten.

4. **Beispiele**: Dieser Abschnitt sollte ein einfaches Anwendungsbeispiel oder zwei für die API zeigen.
5. **Spezifikationstabelle**: Zu diesem Zeitpunkt müssen Sie eine spezifikationsbezogene Tabelle einfügen - siehe den Abschnitt "Eine Spezifikationstabelle erstellen" für weitere Details.
6. **Browserkompatibilität**: Jetzt müssen Sie eine Tabelle für die Browserkompatibilität einfügen. Weitere Details hierzu finden Sie in den [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
7. **Siehe auch**: Der "Siehe auch"-Abschnitt ist ein guter Ort, um weitere Links einzufügen, die nützlich sein könnten, wenn man mehr über diese Technologie lernen möchte, einschließlich MDN (und externer) Tutorials, Beispiele, Bibliotheken usw.

### Struktur einer Schnittstellenseite

Jetzt sollten Sie bereit sein, Ihre Schnittstellenseiten zu schreiben. Jede Schnittstellen-Referenzseite sollte die folgende Struktur einhalten:

1. **\\{{APIRef}}**: Fügen Sie in der ersten Zeile jeder Schnittstellenseite das Makro \\{{APIRef}} ein, einschließlich des Namens der API als Argument, also zum Beispiel \\{{APIRef("Web Audio API")}}. Dieses Makro dient dazu, ein Referenzmenü auf der linken Seite der Schnittstellenseite zu erstellen, einschließlich Eigenschaften und Methoden sowie weiterer Schnelllinks, wie sie im [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json)-Makro definiert sind (bitten Sie jemanden, Ihre API zu einem vorhandenen GroupData-Eintrag hinzuzufügen oder einen neuen zu erstellen, wenn sie dort noch nicht aufgeführt ist). Das Menü wird ungefähr wie im Screenshot unten aussehen.
   ![Dieser Screenshot zeigt ein vertikales Navigationsmenü für die Schnittstelle OscillatorNode, mit mehreren Unterlisten für Methoden und Eigenschaften, wie sie vom APIRef-Makro generiert wurden.](apiref-links.png)
2. **Merkmalsstatus**: Ein [Banner, das den Merkmalsstatus angibt](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners) (wie veraltet, nicht standard oder experimentell) wird bei Bedarf automatisch hinzugefügt. Dazu müssen Sie [den Status im browser-compat-data-Repository aktualisieren](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
3. **Beschreibung**: Der erste Absatz der Schnittstellenseite sollte eine kurze, prägnante Beschreibung des übergeordneten Zwecks der Schnittstelle liefern. Sie möchten vielleicht auch ein paar zusätzliche Absätze hinzufügen, falls zusätzliche Beschreibung erforderlich ist. Wenn die Schnittstelle tatsächlich ein Wörterbuch ist, sollten Sie diesen Begriff anstelle von "Schnittstelle" verwenden.
4. **Vererbungsdiagramm:** Verwenden Sie das [`\{{InheritanceDiagram}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/InheritanceDiagram.ejs)-Makro, um ein SVG-Vererbungsdiagramm für die Schnittstelle einzufügen.
5. **Liste der Eigenschaften, Liste der Methoden**: Diese Abschnitte sollten "Eigenschaften" und "Methoden" betitelt sein und Links (unter Verwendung des \\{{domxref}}-Makros) zu einer Referenzseite für jede Eigenschaft/Methode dieser Schnittstelle sowie eine Beschreibung dessen, was jede einzelne macht, bereitstellen. Diese sollten mit [Beschreibung-/Definitionslisten](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists) gekennzeichnet werden. Jede Beschreibung sollte kurz und prägnant sein – ein Satz, wenn möglich. Siehe den Abschnitt "Referenzierung anderer API-Funktionen mit dem \\{{domxref}}-Makro" für eine schnellere Möglichkeit, Links zu anderen Seiten zu erstellen.

   Zu Beginn beider Abschnitte, bevor mit der Auflistung der Eigenschaften/Methoden begonnen wird, geben Sie die Vererbung mit der entsprechenden Satzstruktur an, in Kursivschrift:

   - _Diese Schnittstelle implementiert keine spezifischen Eigenschaften, erbt jedoch Eigenschaften von \\{{domxref("XYZ")}} und \\{{domxref("XYZ2")}}._
   - _Diese Schnittstelle erbt auch Eigenschaften von \\{{domxref("XYZ")}} und \\{{domxref("XYZ2")}}._
   - _Diese Schnittstelle implementiert keine spezifischen Methoden, erbt jedoch Methoden von \\{{domxref("XYZ")}} und \\{{domxref("XYZ2")}}._
   - _Diese Schnittstelle erbt auch Methoden von \\{{domxref("XYZ")}} und \\{{domxref("XYZ2")}}._

   > [!NOTE]
   > Eigenschaften, die schreibgeschützt sind, sollten das \\{{ReadOnlyInline}}-Makro enthalten, das ein kleines "Read only"-Badge erstellt, das in der gleichen Zeile wie ihre \\{{domxref}}-Links (nach der Verwendung der \\{{experimentalInline}}, \\{{non-standard_Inline}} und \\{{deprecatedInline}}-Makros, falls einige dieser benötigt werden) eingefügt wird.

6. **Beispiele**: Fügen Sie eine Codeauflistung ein, die eine typische Nutzung eines Hauptmerkmals der API zeigt. Anstatt den gesamten Code aufzulisten, sollten Sie eine interessante Teilmenge davon auflisten. Für eine vollständige Codeauflistung könnten Sie auf ein [GitHub](https://github.com/)-Repo verweisen, das das vollständige Beispiel enthält, und Sie könnten auch auf ein Live-Beispiel verlinken, das mit Hilfe der [GitHub gh-pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)-Funktion erstellt wurde (sofern es natürlich nur clientseitigen Code verwendet). Wenn das Beispiel visuell ist, könnten Sie auch die MDN-[Live Sample](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples)-Funktion verwenden, um es live und interaktiv auf der Seite zu machen.
7. **Spezifikationstabelle**: Zu diesem Zeitpunkt müssen Sie eine spezifikationsbezogene Tabelle einfügen – siehe den Abschnitt "Eine Spezifikationstabelle erstellen" für weitere Details.
8. **Browserkompatibilität**: Nun müssen Sie eine Tabelle für die Browserkompatibilität einfügen. Weitere Details hierzu finden Sie in den [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
9. **Polyfill**: Falls zutreffend, fügen Sie diesen Abschnitt ein, in dem ein Code für ein Polyfill bereitgestellt wird, das es ermöglicht, die API auch auf Browsern zu verwenden, die sie nicht implementieren. Wenn kein Polyfill existiert oder benötigt wird, lassen Sie diesen Abschnitt vollständig weg.
10. **Siehe auch**: Der Abschnitt "Siehe auch" ist ein guter Ort, um weitere Links einzufügen, die nützlich sein könnten, wenn man mehr über diese Technologie lernen möchte, einschließlich MDN (und externer) Tutorials, Beispiele, Bibliotheken usw. Wir haben eine großzügige Politik für das Verlinken zu externen Quellen, aber beachten Sie Folgendes:

    - Schließen Sie keine Seiten mit denselben Informationen wie eine andere Seite auf dem MDN ein; verlinken Sie stattdessen zu dieser Seite.
    - Geben Sie keine Autorennamen an – wir sind eine autoren-neutrale Dokumentationsseite. Verlinken Sie zum Dokument; der Autorenname wird dort angezeigt.
    - Achten Sie besonders auf Blogbeiträge: Diese tendieren dazu, veraltet zu sein (alte Syntax, falsche Kompatibilitätsinformationen). Verlinken Sie sie nur, wenn sie einen klaren Mehrwert bieten, den man in einem gepflegten Dokument nicht findet.
    - Verwenden Sie keine Aktionsverben wie "Siehe … für mehr Informationen" oder "Klicken Sie auf …", da Sie nicht wissen, ob Ihr Leser in der Lage ist, den Link zu sehen oder darauf zu klicken (wie in einer Papierfassung des Dokuments).

#### Beispiele für Schnittstellenseiten

Die folgenden sind beispielhafte Beispiele für Schnittstellenseiten:

- {{domxref("Request")}} von der [Fetch API](/de/docs/Web/API/Fetch_API).
- {{domxref("SpeechSynthesis")}} von der [Web Speech API](/de/docs/Web/API/Web_Speech_API).

### Struktur einer Eigenschaftsseite

Erstellen Sie Ihre Eigenschaftsseiten als Unterseiten der Schnittstelle, auf der sie implementiert sind. Kopieren Sie die Struktur einer anderen Eigenschaftsseite, um sie als Grundlage für Ihre neue Seite zu verwenden.

Bearbeiten Sie den Namen der Eigenschaftsseite, um dem Konvention `Interface.property_name` zu folgen.

Eigenschaftsseiten müssen die folgenden Abschnitte haben:

1. **Titel**: Der Titel der Seite muss **InterfaceName.propertyName** sein. Der Schnittstellenname muss mit einem Großbuchstaben beginnen. Obwohl eine Schnittstelle in JavaScript auf dem Prototyp von Objekten implementiert wird, nehmen wir kein `.prototype.` in den Titel auf, wie wir es in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) tun.
2. **\\{{APIRef}}**: Fügen Sie in der ersten Zeile jeder Eigenschaftsseite das Makro \\{{APIRef}} ein, einschließlich des Namens der API als Argument, z. B. \\{{APIRef("Web Audio API")}}. Dieses Makro dient dazu, ein Referenzmenü auf der linken Seite der Schnittstellenseite zu erstellen, einschließlich Eigenschaften und Methoden sowie weiterer Schnelllinks, wie sie im [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json)-Makro definiert sind (bitten Sie jemanden, Ihre API zu einem vorhandenen GroupData-Eintrag hinzuzufügen oder einen neuen zu erstellen, wenn sie dort noch nicht aufgeführt ist). Das Menü wird ungefähr wie im Screenshot unten aussehen.
   ![Dieser Screenshot zeigt ein vertikales Navigationsmenü für die Schnittstelle OscillatorNode, mit mehreren Unterlisten für Methoden und Eigenschaften, wie sie vom APIRef-Makro generiert wurden.](apiref-links.png)
3. **Merkmalsstatus**: Ein [Banner, das den Merkmalsstatus angibt](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners) (wie veraltet, nicht standard oder experimentell) wird bei Bedarf automatisch hinzugefügt. Dazu müssen Sie [den Status im browser-compat-data-Repository aktualisieren](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).

4. **Beschreibung**: Der erste Absatz der Eigenschaftsseite sollte eine kurze, prägnante Beschreibung des übergeordneten Zwecks der Eigenschaft liefern. Sie möchten vielleicht auch ein paar zusätzliche Absätze hinzufügen, falls zusätzliche Beschreibung erforderlich ist. Offensichtliche zusätzliche Informationen sind ihr Standard-/Initialwert und ob sie schreibgeschützt ist oder nicht. Die Struktur des ersten Satzes muss sein:

   - Für schreibgeschützte Eigenschaften
     - : Die schreibgeschützte Eigenschaft **`InterfaceName.property`** gibt ein \\{{domxref("type")}} zurück, das…
   - Für andere Eigenschaften
     - : Die Eigenschaft **`InterfaceName.property`** ist ein \\{{domxref("type")}}, das…

   > **Hinweis:** `InterfaceName.property` sollte in `<code>` stehen und zusätzlich beim ersten Gebrauch fett sein (`<strong>`).

5. **Wert**: Der Wertabschnitt enthält eine Beschreibung des Werts der Eigenschaft. Dies sollte den Datentyp der Eigenschaft und das, was sie darstellt, enthalten. Für ein Beispiel siehe {{domxref("SpeechRecognition.grammars")}}.

6. **Beispiele**: Fügen Sie eine Codeauflistung ein, die eine typische Nutzung der betreffenden Eigenschaft zeigt. Sie sollten mit einem einfachen Beispiel beginnen, das zeigt, wie ein Objekt des Typs erstellt wird und wie auf die Eigenschaft zugegriffen wird. Komplexere Beispiele können nach einem solchen Beispiel hinzugefügt werden. In diesen zusätzlichen Beispielen sollten Sie anstatt den gesamten Code aufzulisten, eine interessante Teilmenge davon auflisten. Für eine vollständige Codeauflistung können Sie auf ein [GitHub](https://github.com/)-Repo verweisen, das das vollständige Beispiel enthält, und Sie könnten auch auf ein Live-Beispiel verlinken, das mit Hilfe der [GitHub gh-pages feature](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)-Funktion erstellt wurde (sofern es natürlich nur clientseitigen Code verwendet). Wenn das Beispiel visuell ist, könnten Sie auch die MDN [Live Sample](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples)-Funktion verwenden, um es live und interaktiv auf der Seite zu machen.
7. **Spezifikationstabelle**: An dieser Stelle müssen Sie eine spezifikationsbezogene Tabelle einfügen - siehe den Abschnitt "Eine Spezifikationstabelle erstellen" für weitere Details.
8. **Browserkompatibilität**: Jetzt müssen Sie eine Tabelle für die Browserkompatibilität einfügen. Weitere Details hierzu finden Sie in den [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
9. **Siehe auch**: Der Abschnitt "Siehe auch" ist ein guter Ort, um weitere Links einzufügen, die nützlich sein könnten, wenn man mehr über die Nutzung dieser Technologie lernen möchte: wie Methoden und Eigenschaften, die von einer Änderung dieser Eigenschaft betroffen sind, oder Ereignisse, die in Bezug auf sie ausgelöst werden. Mehr Links, die nützlich sein könnten, um mehr über diese Technologie zu lernen, einschließlich MDN (und externer) Tutorials, Beispiele, Bibliotheken, … können hinzugefügt werden, obwohl es nützlich sein könnte, sie stattdessen auf der Referenzseite der Schnittstelle hinzuzufügen.

#### Beispiele für Eigenschaftsseiten

Die folgenden sind beispielhafte Beispiele für Eigenschaftsseiten:

- {{domxref("Request.method")}} von der [Fetch API](/de/docs/Web/API/Fetch_API).
- {{domxref("SpeechSynthesis.speaking")}} von der [Web Speech API](/de/docs/Web/API/Web_Speech_API).

### Struktur einer Methodenseite

Erstellen Sie Ihre Methodenseiten als Unterseiten der Schnittstelle, auf der sie implementiert sind. Kopieren Sie die Struktur einer anderen Methodenseite, um sie als Grundlage für Ihre neue Seite zu verwenden.

Methodenseiten benötigen die folgenden Abschnitte:

1. **Titel**: Der Titel der Seite muss **InterfaceName.method()** sein (mit den beiden abschließenden Klammern), aber der Slug (das Ende der Seiten-URL) darf die Klammern nicht enthalten. Der Schnittstellenname muss mit einem Großbuchstaben beginnen. Obwohl eine Schnittstelle in JavaScript auf dem Prototyp von Objekten implementiert wird, setzen wir kein `.prototype.` in den Titel ein, wie wir es in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) tun.
2. **\\{{APIRef}}**: Fügen Sie in der ersten Zeile jeder Methodenseite das Makro \\{{APIRef}} ein, einschließlich des Namens der API als Argument, z. B. \\{{APIRef("Web Audio API")}}. Dieses Makro dient dazu, ein Referenzmenü auf der linken Seite der Schnittstellenseite zu erstellen, einschließlich Eigenschaften und Methoden sowie weiterer Schnelllinks, wie sie im [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json)-Makro definiert sind (bitten Sie jemanden, Ihre API zu einem vorhandenen GroupData-Eintrag hinzuzufügen oder einen neuen zu erstellen, wenn sie dort noch nicht aufgeführt ist). Das Menü wird ungefähr wie im Screenshot unten aussehen.
   ![Dieser Screenshot zeigt ein vertikales Navigationsmenü für die Schnittstelle OscillatorNode, mit mehreren Unterlisten für Methoden und Eigenschaften, wie sie vom APIRef-Makro generiert wurden.](apiref-links.png)
3. **Merkmalsstatus**: Ein [Banner, das den Merkmalsstatus angibt](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners) (wie veraltet, nicht standard oder experimentell) wird bei Bedarf automatisch hinzugefügt. Dazu müssen Sie [den Status im browser-compat-data-Repository aktualisieren](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).

4. **Beschreibung**: Der erste Absatz der Methodenseite sollte eine kurze, prägnante Beschreibung des übergeordneten Zwecks der Methode liefern. Sie möchten vielleicht auch ein paar zusätzliche Absätze hinzufügen, falls zusätzliche Beschreibung erforderlich ist. Offensichtliche zusätzliche Informationen sind die Standardparameterwerte, jede Theorie, auf die die Methode basiert, und was die Parameterwerte tun.

   - Der Anfang des ersten Satzes muss folgende Struktur haben:
     - : Die Methode **`InterfaceName.method()`** Schnittstelle …

   > **Hinweis:** `InterfaceName.method()` sollte in `<code>` stehen und sollte auch beim ersten Gebrauch fett sein (`<strong>`).

5. **Syntax**: Der Syntaxabschnitt sollte ein 2–3 Zeilen langes Beispiel enthalten – in der Regel nur die Konstruktion der Schnittstelle, dann der Aufruf der Schnittstellenmethode.

   - Die Syntax sollte die folgende Form haben:
     - : method(param1, param2, …)

   Der Syntaxabschnitt sollte drei Unterabschnitte enthalten (siehe {{domxref("SubtleCrypto.sign()")}} für ein Beispiel):

   - "Parameter": Dies sollte eine Definitionsliste (oder eine ungeordnete Liste) enthalten, die die verschiedenen Parameter benennt und beschreibt, die die Methode benötigt. Sie sollten das {{optional_inline}}-Makro neben dem Parameternamen einfügen, wenn es sich um optionale Parameter handelt. Wenn keine Parameter vorhanden sind, sollte dieser Abschnitt weggelassen werden.
   - "Rückgabewert": Dies sollte angeben, welchen Rückgabewert die Methode hat, sei es ein einfacher Wert wie ein Double oder Boolean, oder ein komplexerer Wert wie ein anderes Schnittstellenobjekt, in welchem Fall Sie das \\{{domxref}}-Makro verwenden können, um auf die MDN-API-Seite zu verlinken, die diese Schnittstelle behandelt (falls vorhanden). Eine Methode könnte nichts zurückgeben, in diesem Fall sollte der Rückgabewert als "\\{{jsxref('undefined')}}" geschrieben werden (was auf der gerenderten Seite so aussieht: {{jsxref("undefined")}}).
   - "Ausnahmen": Dies sollte die verschiedenen Ausnahmen auflisten, die beim Aufrufen der Methode ausgelöst werden können, und unter welchen Umständen sie auftreten. Wenn keine Ausnahmen vorliegen, sollte dieser Abschnitt weggelassen werden.

6. **Beispiele**: Fügen Sie eine Codeauflistung ein, die die typische Nutzung der fraglichen Methode zeigt. Anstatt den gesamten Code aufzulisten, sollten Sie eine interessante Teilmenge davon auflisten. Für eine vollständige Codeauflistung sollten Sie auf ein [GitHub](https://github.com/)-Repo verweisen, das das vollständige Beispiel enthält, und Sie könnten auch auf ein Live-Beispiel, das mit der [GitHub gh-pages feature](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) erstellt wurde, verlinken (sofern es natürlich nur clientseitigen Code verwendet). Wenn das Beispiel visuell ist, könnten Sie auch die MDN [Live Sample](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples)-Funktion verwenden, um es live und interaktiv auf der Seite zu machen.
7. **Spezifikationstabelle**: An dieser Stelle müssen Sie eine spezifikationsbezogene Tabelle einfügen – siehe den Abschnitt "Eine Spezifikationstabelle erstellen" für weitere Details.
8. **Browserkompatibilität**: Jetzt müssen Sie eine Tabelle für die Browserkompatibilität einfügen. Weitere Details hierzu finden Sie in den [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).

#### Beispiele für Methodenseiten

Die folgenden sind beispielhafte Beispiele für Methodenseiten:

- {{domxref("Document.getAnimations")}} von der [Web Animations API](/de/docs/Web/API/Web_Animations_API).
- {{domxref("Window/fetch", "fetch()")}} von der [Fetch API](/de/docs/Web/API/Fetch_API).

## Seitenleisten

Nachdem Sie Ihre API-Referenzseiten erstellt haben, sollten Sie die richtigen Seitenleisten einfügen, um die Seiten miteinander zu verknüpfen. Unser Leitfaden zu [API-Referenz-Seitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) erklärt, wie.
