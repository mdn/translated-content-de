---
title: Anleitung zum Schreiben einer API-Referenz
short-title: Schreiben einer API-Referenz
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

Dieser Leitfaden führt Sie durch alles, was Sie wissen müssen, um eine API-Referenz auf MDN zu schreiben.

## Vorbereitung

Bevor Sie mit der Dokumentation einer API beginnen, sollten Sie einige Dinge vorab vorbereiten und planen, bevor Sie tatsächlich mit dem Schreiben beginnen.

### Vorausgesetztes Wissen

Es wird angenommen, dass Sie, bevor Sie diesen Leitfaden lesen, über angemessenes Wissen in folgenden Bereichen verfügen:

- Webtechnologien wie HTML, CSS und JavaScript. JavaScript ist am wichtigsten.
- Lesen von Webtechnologie-Spezifikationen. Sie werden diese häufig lesen, während Sie APIs dokumentieren.

Alles andere kann unterwegs gelernt werden.

### Vorausgesetzte Ressourcen

Bevor Sie mit der Dokumentation einer API beginnen, sollten Sie Folgendes zur Verfügung haben:

1. Die neueste Spezifikation:
   Unabhängig davon, ob es sich um eine W3C-Empfehlung oder einen frühen Entwurf des Editors handelt, sollten Sie sich auf den neuesten verfügbaren Entwurf der Spezifikation beziehen, der die API abdeckt (oder Spezifikationen, die diese API abdecken).
   Um ihn zu finden, können Sie normalerweise eine Websuche durchführen. Die neueste Version wird oft in allen Versionen der Spezifikation verlinkt, die unter "letzter Entwurf" oder ähnlich aufgeführt sind.
2. Die neuesten modernen Webbrowser:
   Diese sollten experimentelle/Alpha-Builds wie [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/)/[Chrome Canary](https://www.google.com/intl/en/chrome/canary/) sein, die wahrscheinlich eher die Funktionen unterstützen, die Sie dokumentieren.
   Dies ist besonders relevant, wenn Sie eine entstehende/experimentelle API dokumentieren.
3. Demos/Blog-Beiträge/andere Informationen: Finden Sie so viele Informationen wie möglich.
4. Nützliche technische Kontakte:
   Es ist wirklich nützlich, sich einen freundlichen technischen Kontakt zu verschaffen, um Fragen zur Spezifikation zu stellen, jemanden, der in die Standardisierung der API oder deren Implementierung in einem Browser involviert ist.
   Gute Orte, um diese zu finden, sind:

   - Ihr internes Firmenadressbuch, falls Sie für ein relevantes Unternehmen arbeiten.
   - Eine öffentliche Mailingliste, die an der Diskussion über diese API beteiligt ist, wie z.B. Mozillas [dev-platform](https://groups.google.com/a/mozilla.org/g/dev-platform/) oder eine W3C-Liste wie [public-webapps](https://lists.w3.org/Archives/Public/public-webapps/).
   - Die Spezifikation selbst. Zum Beispiel listet die [Web Audio API-Spezifikation](https://webaudio.github.io/web-audio-api/) die Autoren und deren Kontaktdaten oben auf.

### Nehmen Sie sich Zeit, um mit der API zu experimentieren

Sie werden im Laufe der Dokumentation einer API viele Male auf Demoprojekte zurückgreifen, aber es ist nützlich, zunächst Zeit darauf zu verwenden, sich mit der Funktionsweise der API vertraut zu machen – lernen Sie, was die Hauptschnittstellen/Eigenschaften/Methoden sind, was die primären Anwendungsfälle sind und wie Sie einfache Funktionen damit schreiben.

Wenn sich eine API ändert, müssen Sie darauf achten, dass bestehende Demos, auf die Sie verweisen oder von denen Sie lernen, nicht veraltet sind. Überprüfen Sie die Hauptkonstrukte, die in der Demo verwendet werden, um zu sehen, ob sie mit der neuesten Spezifikation übereinstimmen. Sie funktionieren möglicherweise auch nicht in aktuellen Browsern, aber dies ist kein sehr zuverlässiger Test, da oft alte Funktionen aus Gründen der Rückwärtskompatibilität weiterhin unterstützt werden.

> [!NOTE]
> Wenn die Spezifikation kürzlich aktualisiert wurde, sodass beispielsweise eine Methode jetzt anders definiert ist, aber die alte Methode weiterhin in Browsern funktioniert, müssen Sie oft beide im selben Abschnitt dokumentieren, sodass die alten und neuen Methoden abgedeckt werden.
> Wenn Sie Hilfe benötigen, verweisen Sie auf die Demos, die Sie gefunden haben, oder fragen Sie einen technischen Kontakt.

### Erstellen Sie eine Liste der Dokumente, die Sie schreiben oder aktualisieren müssen

Eine API-Referenz enthält im Allgemeinen die folgenden Seiten.
Sie finden weitere Details zu dem, was jede Seite enthält, Beispiele und Vorlagen in unserem Artikel zu [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types).
Bevor Sie beginnen, sollten Sie eine Liste aller Seiten, die Sie erstellen sollten, aufschreiben.

1. Übersichtsseite
2. Schnittstellenseiten
3. Konstruktorseiten
4. Methodenseiten
5. Eigenschaftsseiten
6. Ereignisseiten
7. Konzept-/Leitfaden-Seiten
8. Beispiele

> [!NOTE]
> In diesem Artikel werden wir auf die [Web Audio API](/de/docs/Web/API/Web_Audio_API) als Beispiel verweisen.

#### Übersichtsseiten

Eine einzelne API-Übersichtsseite wird verwendet, um die Rolle der API, ihre Top-Level-Schnittstellen, verwandte Funktionen, die in anderen Schnittstellen enthalten sind, und andere High-Level-Details zu beschreiben.
Ihr Name und Slug sollten der Name der API plus "API" am Ende sein. Sie wird auf der obersten Ebene der API-Referenz platziert, als ein Kind von [https://developer.mozilla.org/de/docs/Web/API](/de/docs/Web/API).

Beispiel:

- Titel: _Web Audio API_
- Slug: _Web_Audio_API_
- URL: [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API](/de/docs/Web/API/Web_Audio_API)

#### Schnittstellenseiten

Jede Schnittstelle wird auch ihre eigene Seite haben, die den Zweck der Schnittstelle beschreibt, alle Mitglieder (Konstruktoren, Methoden, Eigenschaften, etc., die sie enthält) auflistet und zeigt, mit welchen Browsern sie kompatibel ist.
Der Name und Slug einer Seite sollten der Name der Schnittstelle sein, genau wie in der Spezifikation geschrieben.
Jede Seite wird auf der obersten Ebene der API-Referenz platziert, als ein Kind von [https://developer.mozilla.org/de/docs/Web/API](/de/docs/Web/API).

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

- Wir dokumentieren Methoden, die auf dem Prototyp eines Objekts definiert sind, das diese Schnittstelle implementiert (Instanzmethoden), und Methoden, die auf der eigentlichen Klasse selbst definiert sind (statische Methoden).
  In den seltenen Fällen, dass beide auf derselben Schnittstelle existieren, sollten Sie sie in separaten Abschnitten auf der Seite auflisten (Statische Methoden/Instanzmethoden).
  Normalerweise existieren nur Instanzmethoden, in diesem Fall können Sie diese unter dem Titel "Methoden" auflisten.
- Wir dokumentieren keine geerbten Eigenschaften und Methoden der Schnittstelle: sie werden auf der jeweiligen Elternschnittstelle aufgelistet. Wir geben jedoch einen Hinweis auf deren Existenz.
- Wir dokumentieren Eigenschaften und Methoden, die in Mixins definiert sind. Bitte sehen Sie in der [Beitragsleitfaden für Mixins](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#mixins) für weitere Details nach.
- Spezielle Methoden wie der Stringifier (`toString()`) und der Jsonifier (`toJSON()`) werden ebenfalls aufgelistet, falls sie existieren.
- Benannte Konstruktoren (wie `Image()` für [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)) werden ebenfalls aufgelistet, falls relevant.

#### Konstruktorseiten

Jede Schnittstelle hat null oder einen Konstruktor, der auf einer Unterseite der Schnittstellenseite dokumentiert ist. Diese beschreibt den Zweck des Konstruktors und zeigt, wie seine Syntax aussieht, Anwendungsbeispiele, Browser-Kompatibilitätsinformationen etc. Ihr Slug ist der Name des Konstruktors, der genau derselbe Name wie der der Schnittstelle ist, und der Titel ist Schnittstellenname, Punkt, Konstruktorname, dann Klammern am Ende.

Beispiel:

- Titel: _AudioContext.AudioContext()_
- Slug: _AudioContext_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/AudioContext](/de/docs/Web/API/AudioContext/AudioContext)

#### Eigenschaftsseiten

Jede Schnittstelle hat null oder mehr Eigenschaften, die auf Unterseiten der Schnittstellenseite dokumentiert sind. Jede Seite beschreibt den Zweck der Eigenschaft und zeigt, wie deren Syntax aussieht, Anwendungsbeispiele, Browser-Kompatibilitätsinformationen etc. Ihr Slug ist der Name der Eigenschaft, und der Titel ist Schnittstellenname, Punkt, dann Eigenschaftsname.

Beispiele:

- Titel: _AudioContext.state_
- Slug: _state_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/state](/de/docs/Web/API/BaseAudioContext/state)

<!---->

#### Methodenseiten

Jede Schnittstelle hat null oder mehr Methoden, die auf Unterseiten der Schnittstellenseite dokumentiert sind. Jede Seite beschreibt den Zweck der Methode und zeigt, wie deren Syntax aussieht, Anwendungsbeispiele, Browser-Kompatibilitätsinformationen etc. Ihr Slug ist der Name der Methode, und der Titel ist Schnittstellenname, Punkt, Methodenname, dann Klammern.

Beispiele:

- Titel: _AudioContext.close()_
- Slug: _close_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/close](/de/docs/Web/API/AudioContext/close)

<!---->

- Titel: _AudioContext.createGain()_
- Slug: _createGain_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/createGain](/de/docs/Web/API/BaseAudioContext/createGain)

#### Ereignisseiten

Dokumentieren Sie Ereignisse als Unterseiten ihrer Zielschnittstellen und verwenden Sie den Slug _eventname_\_event mit dem Titel im Format `Interface: eventName event`.

Erstellen Sie keine Seiten für `on` Ereignishandler-Eigenschaften. Erwähnen Sie beide Möglichkeiten, um auf das Ereignis auf der `eventName_event`-Seite zuzugreifen.

Beispiel:

- Titel: XRSession: end event
- Slug: end_event
- URL: [https://developer.mozilla.org/de/docs/Web/XRSession/end_event](/de/docs/Web/API/XRSession/end_event)

#### Konzept-/Leitfaden-Seiten

Die meisten API-Referenzen haben mindestens einen Leitfaden und manchmal auch eine Konzeptseite dazu. Eine API-Referenz sollte mindestens einen Leitfaden enthalten, der "Verwendung der _name-of-api_" genannt wird, der eine grundlegende Anleitung zur Nutzung der API bietet. Komplexere APIs können mehrere Verwendungshinweise benötigen, um zu erklären, wie verschiedene Aspekte der API genutzt werden.

Falls erforderlich, können Sie auch einen Artikel zu den Konzepten mit dem Titel "_name-of-api_ concepts" einschließen, der die Theorie hinter allen Konzepten erklärt, die Entwickler verstehen sollten, um die API effektiv zu nutzen.

Diese Artikel sollten alle als Unterseiten der API-Übersichtsseite erstellt werden. Zum Beispiel hat die Web Audio vier Leitfäden und einen Konzeptartikel:

- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)

#### Beispiele

Sie sollten einige Beispiele erstellen, die zumindest die häufigsten Anwendungsfälle der API demonstrieren. Sie können diese überall platzieren, wo es angemessen ist, allerdings ist der empfohlene Ort das [MDN GitHub-Repo](https://github.com/mdn/).

#### Alle auflisten

Eine Liste all dieser Unterseiten zu erstellen, ist eine gute Möglichkeit, sie zu verfolgen. Zum Beispiel:

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

Jede Schnittstelle in der Liste hat eine separate Seite, die als Unterseite von `https://developer.mozilla.org/de/docs/Web/API` erstellt wurde; zum Beispiel wäre das Dokument für [`AudioContext`](/de/docs/Web/API/AudioContext) unter `https://developer.mozilla.org/de/docs/Web/API/AudioContext` zu finden. Jede [Schnittstellenseite](#schnittstellenseiten) erklärt, was diese Schnittstelle tut und bietet eine Liste der Methoden und Eigenschaften, die die Schnittstelle ausmachen. Anschließend wird jede Methode und Eigenschaft auf ihrer eigenen Seite dokumentiert, die als Unterseite der Schnittstelle erstellt wird, deren Mitglied sie ist. Zum Beispiel wird [`BaseAudioContext/currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) unter `https://developer.mozilla.org/de/docs/Web/API/AudioContext/currentTime` dokumentiert.

## Erstellung der Seiten

Nun erstellen Sie die benötigten Seiten gemäß den untenstehenden Strukturen. Unsere [MDN-Inhalts-README](https://github.com/mdn/content#adding-a-new-document) enthält Anleitungen zur Erstellung eines neuen Dokuments und unser [Leitfaden zu Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) enthält weitere Beispiele und Seitenvorlagen, die nützlich sein könnten.

### Struktur einer Übersichtsseite

API-Landingpages unterscheiden sich stark in der Länge, je nachdem, wie groß die API ist, aber sie werden alle im Wesentlichen die gleichen Funktionen haben. Siehe [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API](/de/docs/Web/API/Web_Audio_API) als Beispiel für eine große Landingpage.

Die Merkmale einer Landingpage sind unten aufgeführt:

1. **Beschreibung**: Der erste Absatz der Landingpage sollte eine kurze, prägnante Beschreibung des übergeordneten Zwecks der API bieten.
2. **Konzepte- und Nutzungsbereich**: Der nächste Abschnitt sollte "\[Name der API] Konzepte und Nutzung" betitelt werden und eine Übersicht über alle Hauptfunktionen bieten, die die API bereitstellt, welche Probleme sie löst und wie sie funktioniert – alles auf hohem Niveau. Dieser Abschnitt sollte ziemlich kurz sein und nicht auf Code- oder spezielle Implementierungsdetails eingehen.
3. **Liste der Schnittstellen**: Dieser Abschnitt sollte "\[Name der API] Schnittstellen" betitelt werden und Links zur Referenzseite für jede Schnittstelle der API bereitstellen, zusammen mit einer kurzen Beschreibung, was jede von ihnen macht. Siehe den Abschnitt "Referenzierung anderer API-Funktionen mit dem \\{{domxref}}-Makro" für eine schnellere Möglichkeit zum Erstellen neuer Seiten.
4. **Beispiele**: Dieser Abschnitt sollte ein oder zwei Anwendungsfälle für die API zeigen.
5. **Spezifikationstabelle**: An dieser Stelle müssen Sie eine Spezifikationstabelle einfügen – siehe den Abschnitt "Erstellen einer Spezifikationstabelle" für weitere Details.
6. **Browser-Kompatibilität**: Nun müssen Sie eine Browser-Kompatibilitätstabelle einfügen. Siehe [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Details.
7. **Siehe auch**: Der Abschnitt "Siehe auch" ist ein guter Ort, um weitere Links einzufügen, die beim Erlernen dieser Technologie nützlich sein können, einschließlich MDN (und externer) Tutorials, Beispiele, Bibliotheken etc.

### Struktur einer Schnittstellenseite

Nun sollten Sie bereit sein, Ihre Schnittstellenseiten zu schreiben. Jede Schnittstellenreferenzseite sollte die folgende Struktur einhalten:

1. **\\{{APIRef}}**: Fügen Sie das \\{{APIRef}}-Makro in die erste Zeile jeder Schnittstellenseite ein, einschließlich des Namens der API als Argument, z.B. \\{{APIRef("Web Audio API")}}. Dieses Makro dient dazu, ein Referenzmenü auf der linken Seite der Schnittstellenseite zu konstruieren, einschließlich Eigenschaften und Methoden sowie anderer Quicklinks, wie sie in der [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json)-Makro definiert sind (fragen Sie jemanden, der API zu einem vorhandenen GroupData-Eintrag hinzuzufügen oder einen neuen zu erstellen, wenn sie dort noch nicht aufgeführt ist). Das Menü wird so ähnlich aussehen wie im untenstehenden Screenshot.
   ![Dieser Screenshot zeigt ein vertikales Navigationsmenü für die OscillatorNode-Schnittstelle mit mehreren Unterlisten für Methoden und Eigenschaften, wie sie vom APIRef-Makro generiert wurden ](apiref-links.png)
2. **Feature-Status**: Ein [Banner, das den Featurestatus anzeigt](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners) (wie z.B. veraltet, nicht standardisiert, oder experimentell) wird bei Bedarf automatisch hinzugefügt. Dazu müssen Sie [den Status im Browser-compat-data-Repository aktualisieren](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
3. **Beschreibung**: Der erste Absatz der Schnittstellenseite sollte eine kurze prägnante Beschreibung des übergeordneten Zwecks der Schnittstelle bieten. Es kann auch sinnvoll sein, ein paar weitere Absätze einzufügen, falls zusätzliche Erklärungen erforderlich sind. Falls die Schnittstelle tatsächlich ein Wörterbuch ist, sollten Sie diesen Begriff anstelle von "Schnittstelle" verwenden.
4. **Vererbungsdiagramm:** Verwenden Sie das [`\{{InheritanceDiagram}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/InheritanceDiagram.ejs)-Makro, um ein SVG-Vererbungsdiagramm für die Schnittstelle einzubetten.
5. **Liste der Eigenschaften, Liste der Methoden**: Diese Abschnitte sollten "Eigenschaften" und "Methoden" betitelt werden und Links (unter Verwendung des \\{{domxref}}-Makros) zu einer Referenzseite für jede Eigenschaft/Methode der Schnittstelle bieten, zusammen mit einer Beschreibung, was jede von ihnen macht. Diese sollten mit [Beschreibung/Definitionslisten](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists) ausgezeichnet sein. Jede Beschreibung sollte kurz und prägnant sein – wenn möglich, in einem Satz. Siehe den Abschnitt "Referenzierung anderer API-Funktionen mit dem \\{{domxref}}-Makro" für eine schnellere Möglichkeit, Links zu anderen Seiten zu erstellen.

   Am Anfang beider Abschnitte, bevor die Liste der Eigenschaften/Methoden beginnt, geben Sie die Vererbung mit dem entsprechenden Satz an, kursiv:

   - _Diese Schnittstelle implementiert keine spezifischen Eigenschaften, erbt jedoch Eigenschaften von \\{{domxref("XYZ")}}, und \\{{domxref("XYZ2")}}._
   - _Diese Schnittstelle erbt auch Eigenschaften von \\{{domxref("XYZ")}}, und \\{{domxref("XYZ2")}}._
   - _Diese Schnittstelle implementiert keine spezifischen Methoden, erbt jedoch Methoden von \\{{domxref("XYZ")}}, und \\{{domxref("XYZ2")}}._
   - _Diese Schnittstelle erbt auch Methoden von \\{{domxref("XYZ")}}, und \\{{domxref("XYZ2")}}._

   > [!NOTE]
   > Eigenschaften, die schreibgeschützt sind, sollten das \\{{ReadOnlyInline}}-Makro haben, das ein schickes kleines "Schreibgeschützt"-Abzeichen erstellt, eingefügt in derselben Zeile wie ihre \\{{domxref}}-Links (nach der Verwendung der \\{{experimentalInline}}, \\{{non-standard_Inline}} und \\{{deprecatedInline}}-Makros, falls einige von diesen benötigt werden).

6. **Beispiele**: Fügen Sie eine Codeauflistung hinzu, um die typische Verwendung eines Hauptfeatures der API zu zeigen. Anstatt den gesamten Code aufzulisten, sollten Sie einen interessanten Ausschnitt davon auflisten. Für eine vollständige Codeauflistung könnten Sie ein [GitHub](https://github.com/)-Repo mit dem vollständigen Beispiel referenzieren und auch auf ein Live-Beispiel verlinken, das mit der [GitHub gh-pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)-Funktion erstellt wurde (sofern es nur clientseitigen Code verwendet). Wenn das Beispiel visuell ist, könnten Sie auch die MDN [Live Sample](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples)-Funktion verwenden, um es live und spielbar auf der Seite zu machen.
7. **Spezifikationstabelle**: An dieser Stelle müssen Sie eine Spezifikationstabelle einfügen – siehe den Abschnitt "Erstellen einer Spezifikationstabelle" für weitere Details.
8. **Browser-Kompatibilität**: Nun müssen Sie eine Browser-Kompatibilitätstabelle einfügen. Siehe [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Details.
9. **Polyfill**: Falls angemessen, fügen Sie diesen Abschnitt hinzu und bieten Sie Code für ein Polyfill, das die Verwendung der API auch in Browsern ermöglicht, die sie nicht implementieren. Wenn kein Polyfill existiert oder benötigt wird, lassen Sie diesen Abschnitt vollständig weg.
10. **Siehe auch**: Der Abschnitt "Siehe auch" ist ein ausgezeichneter Ort, um zusätzliche Links einzufügen, die nützlich sein könnten, wenn man mehr über diese Technologie lernen möchte, einschließlich MDN (und externer) Tutorials, Beispiele, Bibliotheken, etc. Wir haben eine großzügige Richtlinie für das Verlinken auf externe Quellen, aber beachten Sie:

    - Fügen Sie keine Seiten ein, die dieselben Informationen wie eine andere Seite auf MDN enthalten; verlinken Sie stattdessen auf diese Seite.
    - Geben Sie keine Autorennamen an – wir sind eine autoren-neutrale Dokumentationsseite. Verlinken Sie auf das Dokument; der Autorenname wird dort angezeigt.
    - Achten Sie besonders auf Blog-Beiträge: Diese neigen dazu, veraltet zu werden (veraltete Syntax, falsche Kompatibilitätsinformationen). Verlinken Sie auf sie nur, wenn sie einen klaren Mehrwert haben, der in einem gepflegten Dokument nicht zu finden ist.
    - Verwenden Sie keine Aktionsverben wie "Siehe … für mehr Informationen" oder "Klicken Sie auf …", Sie wissen nicht, ob Ihr Leser in der Lage ist, zu sehen oder auf den Link zu klicken (wie in einer Papier- version des Dokuments).

#### Beispiele für Schnittstellenseiten

Dies sind einige beispielhafte Beispiele für Schnittstellenseiten:

- [`Request`](/de/docs/Web/API/Request) von der [Fetch API](/de/docs/Web/API/Fetch_API).
- [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) von der [Web Speech API](/de/docs/Web/API/Web_Speech_API).

### Struktur einer Eigenschaftsseite

Erstellen Sie Ihre Eigenschaftsseiten als Unterseiten der Schnittstelle, auf der sie implementiert sind. Kopieren Sie die Struktur einer anderen Eigenschaftsseite, um als Basis für Ihre neue Seite zu dienen.

Bearbeiten Sie den Namen der Eigenschaftsseite, um dem Konvention `Interface.property_name` zu folgen.

Eigenschaftsseiten müssen die folgenden Abschnitte haben:

1. **Titel**: Der Titel der Seite muss **InterfaceName.propertyName** sein. Der Name der Schnittstelle muss mit einem Großbuchstaben beginnen. Obwohl eine Schnittstelle in JavaScript auf dem Prototyp von Objekten implementiert ist, fügen wir in den Titel kein `.prototype.` ein, wie wir es in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) tun.
2. **\\{{APIRef}}**: Fügen Sie das \\{{APIRef}}-Makro in die erste Zeile jeder Eigenschaftsseite ein, einschließlich des Namens der API als Argument, z.B. \\{{APIRef("Web Audio API")}}. Dieses Makro dient dazu, ein Referenzmenü auf der linken Seite der Schnittstellenseite zu konstruieren, einschließlich Eigenschaften und Methoden sowie anderer Quicklinks, wie sie in der [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json)-Makro definiert sind (fragen Sie jemanden, der API zu einem vorhandenen GroupData-Eintrag hinzuzufügen oder einen neuen zu erstellen, wenn sie dort noch nicht aufgeführt ist). Das Menü wird so ähnlich aussehen wie im untenstehenden Screenshot.
   ![Dieser Screenshot zeigt ein vertikales Navigationsmenü für die OscillatorNode-Schnittstelle mit mehreren Unterlisten für Methoden und Eigenschaften, wie sie vom APIRef-Makro generiert wurden ](apiref-links.png)
3. **Feature-Status**: Ein [Banner, das den Featurestatus anzeigt](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners) (wie z.B. veraltet, nicht standardisiert, oder experimentell) wird bei Bedarf automatisch hinzugefügt. Dazu müssen Sie [den Status im Browser-compat-data-Repository aktualisieren](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).

4. **Beschreibung**: Der erste Absatz der Eigenschaftsseite sollte eine kurze, prägnante Beschreibung des übergeordneten Zwecks der Eigenschaft bieten. Es kann auch sinnvoll sein, ein paar weitere Absätze einzufügen, falls zusätzliche Erklärungen erforderlich sind. Offensichtliche zusätzliche Informationen einzuschließen, sind ihr Standard-/Anfangswert und ob sie schreibgeschützt ist oder nicht. Die Struktur des ersten Satzes muss sein:

   - Für schreibgeschützte Eigenschaften:
     - : Die **`InterfaceName.property`** schreibgeschützte Eigenschaft gibt eine \\{{domxref("type")}} zurück, die …
   - Für andere Eigenschaften:
     - : Die **`InterfaceName.property`** Eigenschaft ist eine \\{{domxref("type")}}, die …

   > **Hinweis:** `InterfaceName.property` sollte im `<code>`-Tag sein und sollte beim ersten Mal zusätzlich fett (`<strong>`) sein, wenn es verwendet wird.

5. **Wert**: Der Wertabschnitt enthält eine Beschreibung des Wertes der Eigenschaft. Dieser sollte den Datentyp der Eigenschaft und das, was er darstellt, enthalten. Für ein Beispiel siehe [`SpeechRecognition.grammars`](/de/docs/Web/API/SpeechRecognition/grammars)

6. **Beispiele**: Fügen Sie eine Codeauflistung hinzu, um die typische Verwendung der betreffenden Eigenschaft zu zeigen. Sie sollten mit einem einfachen Beispiel beginnen, das zeigt, wie ein Objekt des Typs erstellt wird und wie auf die Eigenschaft zugegriffen wird. Komplexere Beispiele können nach einem solchen Beispiel hinzugefügt werden. In diesen zusätzlichen Beispielen sollten Sie anstatt den gesamten Code aufzulisten, einen interessanten Ausschnitt auflisten. Für eine vollständige Codeauflistung können Sie auf ein [GitHub](https://github.com/)-Repo referenzieren, das das vollständige Beispiel enthält, und könnten auch auf ein Live-Beispiel verlinken, das mit der [GitHub gh-pages-Funktion](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) erstellt wurde (sofern es nur clientseitigen Code verwendet). Wenn das Beispiel visuell ist, können Sie auch die MDN [Live Sample](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples)-Funktion verwenden, um es live und spielbar auf der Seite zu machen.
7. **Spezifikationstabelle**: An dieser Stelle müssen Sie eine Spezifikationstabelle einfügen – siehe den Abschnitt "Erstellen einer Spezifikationstabelle" für weitere Details.
8. **Browser-Kompatibilität**: Nun müssen Sie eine Browser-Kompatibilitätstabelle einfügen. Siehe [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Details.
9. **Siehe auch**: Der Abschnitt "Siehe auch" ist ein guter Ort, um zusätzliche Links einzufügen, die beim Verwenden dieser Technologie nützlich sein könnten: wie Methoden und Eigenschaften, die von einer Änderung dieser Eigenschaft betroffen sind oder Ereignisse, die in Bezug dazu ausgelöst werden. Weitere Links, die beim Erlernen dieser Technologie nützlich sein könnten, einschließlich MDN (und externer) Anleitungen, Beispiele, Bibliotheken, … können hinzugefügt werden, obwohl es sinnvoll sein kann, diese auf der Schnittstellenreferenzseite statt auf der Eigenschaftsseite hinzuzufügen.

#### Beispiele für Eigenschaftsseiten

Dies sind einige beispielhafte Beispiele für Eigenschaftsseiten:

- [`Request.method`](/de/docs/Web/API/Request/method) von der [Fetch API](/de/docs/Web/API/Fetch_API).
- [`SpeechSynthesis.speaking`](/de/docs/Web/API/SpeechSynthesis/speaking) von der [Web Speech API](/de/docs/Web/API/Web_Speech_API).

### Struktur einer Methodenseite

Erstellen Sie Ihre Methodenseiten als Unterseiten der Schnittstelle, auf der sie implementiert sind. Kopieren Sie die Struktur einer anderen Methodenseite, um als Basis für Ihre neue Seite zu dienen.

Methodenseiten benötigen die folgenden Abschnitte:

1. **Titel**: Der Titel der Seite muss **InterfaceName.method()** (mit den abschließenden Klammern) sein, aber der Slug (das Ende der Seiten-URL) darf die Klammern nicht enthalten. Auch der Name der Schnittstelle muss mit einem Großbuchstaben beginnen. Obwohl eine Schnittstelle in JavaScript auf dem Prototyp von Objekten implementiert ist, fügen wir im Titel kein `.prototype.` ein, wie wir es in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) tun.
2. **\\{{APIRef}}**: Fügen Sie das \\{{APIRef}}-Makro in die erste Zeile jeder Methodenseite ein, einschließlich des Namens der API als Argument, z.B. \\{{APIRef("Web Audio API")}}. Dieses Makro dient dazu, ein Referenzmenü auf der linken Seite der Schnittstellenseite zu konstruieren, einschließlich Eigenschaften und Methoden sowie anderer Quicklinks, wie sie in der [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json)-Makro definiert sind (fragen Sie jemanden, der API zu einem vorhandenen GroupData-Eintrag hinzuzufügen oder einen neuen zu erstellen, wenn sie dort noch nicht aufgeführt ist). Das Menü wird so ähnlich aussehen wie im untenstehenden Screenshot.
   ![Dieser Screenshot zeigt ein vertikales Navigationsmenü für die OscillatorNode-Schnittstelle mit mehreren Unterlisten für Methoden und Eigenschaften, wie sie vom APIRef-Makro generiert wurden ](apiref-links.png)
3. **Feature-Status**: Ein [Banner, das den Featurestatus anzeigt](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners) (wie z.B. veraltet, nicht standardisiert, oder experimentell) wird bei Bedarf automatisch hinzugefügt. Dazu müssen Sie [den Status im Browser-compat-data-Repository aktualisieren](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).

4. **Beschreibung**: Der erste Absatz der Methodenseite sollte eine kurze prägnante Beschreibung des übergeordneten Zwecks der Methode bieten. Es kann auch sinnvoll sein, ein paar weitere Absätze einzufügen, falls zusätzliche Erklärungen relevant sind. Offensichtliche zusätzliche Informationen einzuschließen, sind ihre Standard-Parameterwerte, jede Theorie, auf die sich die Methode stützt, und was die Parameterwerte bewirken.

   - Der Beginn des ersten Satzes muss die folgende Struktur haben:
     - : Die **`InterfaceName.method()`** Methode der Schnittstelle …

   > **Hinweis:** `InterfaceName.method()` sollte im `<code>`-Tag sein und beim ersten Mal auch fett (`<strong>`) sein, wenn es verwendet wird.

5. **Syntax**: Der Syntaxabschnitt sollte ein 2–3 Zeilen Beispiel enthalten – normalerweise nur die Konstruktion der Schnittstelle, dann der Aufruf der Schnittstellenmethode.

   - Die Syntax sollte die Form haben:
     - : method(param1, param2, …)

   Der Syntaxabschnitt sollte drei Unterabschnitte enthalten (siehe [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign) für ein Beispiel):

   - "Parameter": Dies sollte eine Definitionsliste (oder ungeordnete Liste) enthalten, die die verschiedenen Parameter, die die Methode nimmt, benennt und beschreibt. Sie sollten das {{optional_inline}}-Makro neben dem Parametername verwenden, wenn es sich um optionale Parameter handelt. Falls es keine Parameter gibt, sollte dieser Abschnitt weggelassen werden.
   - "Rückgabewert": Dies sollte angeben, welchen Rückgabewert die Methode hat, sei es ein einfacher Wert wie ein Double oder Boolean oder ein komplexerer Wert wie ein anderes Schnittstellenobjekt. In diesem Fall können Sie das \\{{domxref}}-Makro verwenden, um auf die MDN-API-Seite zu verlinken, die diese Schnittstelle behandelt (falls vorhanden). Eine Methode könnte nichts zurückgeben, in diesem Fall sollte der Rückgabewert als "\\{{jsxref('undefined')}}" geschrieben werden (was auf der gerenderten Seite so aussehen wird: {{jsxref("undefined")}}).
   - "Ausnahmen": Dies sollte die verschiedenen Ausnahmen auflisten, die beim Aufrufen der Methode ausgelöst werden können, und unter welchen Umständen dies geschieht. Falls es keine Ausnahmen gibt, sollte dieser Abschnitt weggelassen werden.

6. **Beispiele**: Fügen Sie eine Codeauflistung hinzu, um die typische Verwendung der betreffenden Methode zu zeigen. Anstatt den gesamten Code aufzulisten, sollten Sie einen interessanten Ausschnitt davon auflisten. Für eine vollständige Codeauflistung sollten Sie auf ein [GitHub](https://github.com/)-Repo verweisen, das das vollständige Beispiel enthält, und könnten auch auf ein Live-Beispiel verlinken, das mit der [GitHub gh-pages-Funktion](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) erstellt wurde (sofern es nur clientseitigen Code verwendet). Wenn das Beispiel visuell ist, können Sie auch die MDN [Live Sample](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples)-Funktion verwenden, um es live und spielbar auf der Seite zu machen.
7. **Spezifikationstabelle**: An dieser Stelle müssen Sie eine Spezifikationstabelle einfügen – siehe den Abschnitt "Erstellen einer Spezifikationstabelle" für weitere Details.
8. **Browser-Kompatibilität**: Nun müssen Sie eine Browser-Kompatibilitätstabelle einfügen. Siehe [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Details.

#### Beispiele für Methodenseiten

Dies sind einige beispielhafte Beispiele für Methodenseiten:

- [`Document.getAnimations`](/de/docs/Web/API/Document/getAnimations) von der [Web Animations API](/de/docs/Web/API/Web_Animations_API).
- [`fetch()`](/de/docs/Web/API/Window/fetch) von der [Fetch API](/de/docs/Web/API/Fetch_API).

## Seitenleisten

Sobald Sie Ihre API-Referenzseiten erstellt haben, möchten Sie die richtigen Seitenleisten einfügen, um die Seiten miteinander zu verknüpfen. Unser [Leitfaden zu API-Referenzseitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) erklärt, wie das geht.
