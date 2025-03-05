---
title: Anleitung zum Schreiben einer API-Referenz
short-title: Schreiben einer API-Referenz
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference
l10n:
  sourceCommit: 359403526b7b802cdb09b90acf28577b959076d0
---

Dieser Leitfaden führt Sie durch alles, was Sie wissen müssen, um eine API-Referenz auf MDN zu schreiben.

## Vorbereitung

Bevor Sie mit der Dokumentation einer API beginnen, sollten Sie einige Dinge im Voraus vorbereiten und planen, bevor Sie tatsächlich mit dem Schreiben beginnen.

### Vorausgesetztes Wissen

Es wird angenommen, dass Sie vor dem Lesen dieses Leitfadens ein fundiertes Wissen über Folgendes haben:

- Webtechnologien wie HTML, CSS und JavaScript. JavaScript ist am wichtigsten.
- Lesen von Spezifikationen zu Webtechnologien. Sie werden diese oft anschauen, während Sie APIs dokumentieren.

Alles andere kann unterwegs gelernt werden.

### Vorausgesetzte Ressourcen

Bevor Sie mit der Dokumentation einer API beginnen, sollten Sie Folgendes zur Verfügung haben:

1. Die neueste Spezifikation:
   Egal, ob es sich um eine W3C-Empfehlung oder einen frühen Editor-Entwurf handelt, Sie sollten sich auf den neuesten verfügbaren Entwurf der Spezifikation beziehen, der (oder die) diese API abdeckt.
   Um sie zu finden, können Sie normalerweise eine Websuche durchführen. Die neueste Version wird oft von allen Versionen der Spezifikation aus verlinkt, die unter "neuester Entwurf" oder ähnlichem aufgeführt sind.
2. Die neuesten modernen Webbrowser:
   Diese sollten experimentelle/Alpha-Builds sein, wie [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/) / [Chrome Canary](https://www.google.com/intl/en/chrome/canary/), die eher die Funktionen unterstützen, die Sie dokumentieren.
   Dies ist besonders relevant, wenn Sie eine neue/experimentelle API dokumentieren.
3. Demos/Blog-Beiträge/sonstige Informationen: Suchen Sie so viele Informationen wie möglich.
4. Nützliche Ingenieur-Kontakte:
   Es ist wirklich nützlich, einen freundlichen Ingenieur-Kontakt zu finden, den Sie Fragen zur Spezifikation stellen können, jemanden, der an der Standardisierung der API oder deren Implementierung in einem Browser beteiligt ist.
   Gute Orte, um diese zu finden, sind:

   - Ihr internes Firmen-Adressbuch, wenn Sie für ein entsprechendes Unternehmen arbeiten.
   - Eine öffentliche Mailingliste, die an der Diskussion dieser API beteiligt ist, wie Mozillas [dev-platform](https://groups.google.com/a/mozilla.org/g/dev-platform/) oder eine W3C-Liste wie [public-webapps](https://lists.w3.org/Archives/Public/public-webapps/).
   - Die Spezifikation selbst. Zum Beispiel listet die [Web Audio API Spec](https://webaudio.github.io/web-audio-api/) die Autoren und deren Kontaktdaten oben auf.

### Nehmen Sie sich Zeit, um mit der API zu experimentieren

Sie werden im Laufe der Dokumentation einer API viele Male zurückkehren, um Demos zu erstellen, aber es ist nützlich, damit zu beginnen, sich mit der Funktionsweise der API vertraut zu machen – lernen Sie, was die Hauptschnittstellen/Eigenschaften/Methoden sind, was die primären Anwendungsfälle sind und wie man einfache Funktionalitäten damit schreibt.

Wenn sich eine API geändert hat, müssen Sie darauf achten, dass bestehende Demos, auf die Sie sich beziehen oder von denen Sie lernen, nicht veraltet sind. Prüfen Sie die Hauptkonstrukte, die in der Demo verwendet werden, um zu sehen, ob sie mit der neuesten Spezifikation übereinstimmen. Sie funktionieren möglicherweise auch nicht in aktuellen Browsern, aber dies ist kein sehr zuverlässiger Test, da oft alte Funktionen aus Gründen der Abwärtskompatibilität weiterhin unterstützt werden.

> [!NOTE]
> Wenn die Spezifikation kürzlich aktualisiert wurde, sodass beispielsweise eine Methode nun anders definiert ist, aber die alte Methode in Browsern weiterhin funktioniert, müssen Sie oft beide an derselben Stelle dokumentieren, damit die alten und neuen Methoden abgedeckt sind.
> Wenn Sie Hilfe benötigen, beziehen Sie sich auf von Ihnen gefundene Demos oder fragen Sie einen Ingenieur-Kontakt.

### Erstellen Sie die Liste der Dokumente, die Sie schreiben oder aktualisieren müssen

Eine API-Referenz wird im Allgemeinen die folgenden Seiten enthalten. Weitere Details zu den Inhalten der einzelnen Seiten, Beispiele und Vorlagen finden Sie in unserem Artikel [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types). Bevor Sie beginnen, sollten Sie eine Liste aller Seiten aufschreiben, die Sie erstellen sollten.

1. Übersichtsseite
2. Schnittstellenseiten
3. Konstruktorseiten
4. Methodenseiten
5. Eigenschaftsseiten
6. Ereignisseiten
7. Konzept-/Leitfadenseiten
8. Beispiele

> [!NOTE]
> Wir werden in diesem Artikel auf die [Web Audio API](/de/docs/Web/API/Web_Audio_API) als Beispiel verweisen.

#### Übersichtsseiten

Eine einzelne API-Übersichtsseite wird verwendet, um die Rolle der API, ihre Top-Level-Schnittstellen, in anderen Schnittstellen enthaltene verwandte Funktionen und andere hochrangige Details zu beschreiben. Ihr Name und Slug sollte der Name der API plus „API“ am Ende sein. Sie wird auf der obersten Ebene der API-Referenz als Kind von [https://developer.mozilla.org/de/docs/Web/API](/de/docs/Web/API) platziert.

Beispiel:

- Titel: _Web Audio API_
- Slug: _Web_Audio_API_
- URL: [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API](/de/docs/Web/API/Web_Audio_API)

#### Schnittstellenseiten

Jede Schnittstelle wird ebenfalls eine eigene Seite haben, auf der der Zweck der Schnittstelle beschrieben, alle Mitglieder (Konstruktoren, Methoden, Eigenschaften usw.) aufgelistet und gezeigt wird, mit welchen Browsern sie kompatibel ist. Der Name und Slug einer Seite sollte exakt so geschrieben sein, wie der Name der Schnittstelle in der Spezifikation. Jede Seite wird auf der obersten Ebene der API-Referenz als Kind von [https://developer.mozilla.org/de/docs/Web/API](/de/docs/Web/API) platziert.

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

- Wir dokumentieren Methoden, die im Prototyp eines Objekts definiert sind, das diese Schnittstelle implementiert (Instanzmethoden), und Methoden, die in der eigentlichen Klasse selbst definiert sind (statische Methoden).
  In den seltenen Fällen, in denen beide in derselben Schnittstelle existieren, sollten Sie sie in getrennten Abschnitten auf der Seite auflisten (Statische Methoden/Instanzmethoden).
  In der Regel existieren nur Instanzmethoden, in diesem Fall können Sie diese unter dem Titel „Methoden“ platzieren.
- Wir dokumentieren keine vererbten Eigenschaften und Methoden der Schnittstelle: Diese werden in der jeweiligen übergeordneten Schnittstelle aufgelistet. Wir weisen jedoch auf deren Existenz hin.
- Wir dokumentieren Eigenschaften und Methoden, die in Mixins definiert sind. Bitte lesen Sie den [Beitragsleitfaden für Mixins](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#mixins) für weitere Details.
- Spezielle Methoden wie der Stringifier (`toString()`) und der Jsonifier (`toJSON()`) werden ebenfalls aufgelistet, falls sie existieren.
- Benannte Konstruktoren (wie `Image()` für [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)) werden ebenfalls aufgelistet, falls relevant.

#### Konstruktorseiten

Jede Schnittstelle hat null oder einen Konstruktor, dokumentiert auf einer Unterseite der Seite der Schnittstelle. Es beschreibt den Zweck des Konstruktors und zeigt, wie seine Syntax aussieht, Beispiele zur Verwendung, Informationen zur Browser-Kompatibilität usw. Sein Slug ist der Name des Konstruktors, der genau der gleiche wie der Schnittstellenname ist, und der Titel ist der Schnittstellenname, Punkt, Konstruktorname und dann Klammern am Ende.

Beispiel:

- Titel: _AudioContext.AudioContext()_
- Slug: _AudioContext_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/AudioContext](/de/docs/Web/API/AudioContext/AudioContext)

#### Eigenschaftsseiten

Jede Schnittstelle hat null oder mehr Eigenschaften, die auf Unterseiten der Seite der Schnittstelle dokumentiert sind. Jede Seite beschreibt den Zweck der Eigenschaft und zeigt, wie ihre Syntax aussieht, Beispiele zur Verwendung, Informationen zur Browser-Kompatibilität usw. Der Slug ist der Name der Eigenschaft, und der Titel ist Schnittstellenname, Punkt, dann Eigenschaftsname.

Beispiele:

- Titel: _AudioContext.state_
- Slug: _state_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/state](/de/docs/Web/API/BaseAudioContext/state)

<!---->

#### Methodenseiten

Jede Schnittstelle hat null oder mehr Methoden, die auf Unterseiten der Seite der Schnittstelle dokumentiert sind. Jede Seite beschreibt den Zweck der Methode und zeigt, wie ihre Syntax aussieht, Beispiele zur Verwendung, Informationen zur Browser-Kompatibilität usw. Sein Slug ist der Name der Methode, und der Titel ist Schnittstellenname, Punkt, Methodenname, dann Klammern.

Beispiele:

- Titel: _AudioContext.close()_
- Slug: _close_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/close](/de/docs/Web/API/AudioContext/close)

<!---->

- Titel: _AudioContext.createGain()_
- Slug: _createGain_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/createGain](/de/docs/Web/API/BaseAudioContext/createGain)

#### Ereignisseiten

Dokumentieren Sie Ereignisse als Unterseiten ihrer Ziel-Schnittstellen und verwenden Sie den Slug _eventname_\_event mit dem Titel `Interface: eventName event`.

Erstellen Sie keine Seiten für `on`-Ereignis-Handler-Eigenschaften. Erwähnen Sie beide Möglichkeiten, das Ereignis auf der `eventName_event`-Seite zu erreichen.

Beispiel:

- Titel: XRSession: end event
- Slug: end_event
- URL: [https://developer.mozilla.org/de/docs/Web/XRSession/end_event](/de/docs/Web/API/XRSession/end_event)

#### Konzept-/Leitfadenseiten

Die meisten API-Referenzen haben mindestens einen Leitfaden und manchmal auch eine Konzeptseite, die sie begleitet. Eine API-Referenz sollte mindestens einen Leitfaden namens "Using the _name-of-api_" enthalten, der eine grundlegende Anleitung bietet, wie man die API verwendet. Komplexere APIs können mehrere Leitfäden zur Verwendung erfordern, um zu erklären, wie man verschiedene Aspekte der API nutzt.

Falls erforderlich, können Sie auch einen Konzeptartikel namens "_name-of-api_ concepts" inkludieren, der die Theorie hinter allen mit der API zusammenhängenden Konzepten erklärt, die Entwickler verstehen sollten, um sie effektiv zu nutzen.

Diese Artikel sollten alle als Unterseiten der API-Übersichtsseite erstellt werden. Beispielsweise hat die Web Audio vier Leitfäden und einen Konzeptartikel:

- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)

#### Beispiele

Sie sollten einige Beispiele erstellen, die mindestens die häufigsten Anwendungsfälle der API demonstrieren. Sie können diese überall hinstellen, wo es angemessen ist, obwohl der empfohlene Ort das [MDN GitHub-Repo](https://github.com/mdn/) ist.

#### Liste erstellen

Das Erstellen einer Liste aller dieser Unterseiten ist eine gute Möglichkeit, sie zu verfolgen. Zum Beispiel:

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

Jede Schnittstelle in der Liste hat eine separate Seite, die als Unterseite von `https://developer.mozilla.org/de/docs/Web/API` erstellt wird. Zum Beispiel, das Dokument für [`AudioContext`](/de/docs/Web/API/AudioContext) wäre unter `https://developer.mozilla.org/de/docs/Web/API/AudioContext` zu finden. Jede [Schnittstellenseite](#schnittstellenseiten) erklärt, was diese Schnittstelle macht, und bietet eine Liste der Methoden und Eigenschaften, die die Schnittstelle ausmachen. Dann wird jede Methode und Eigenschaft auf ihrer eigenen Seite dokumentiert, die als Unterseite der Schnittstelle erstellt wird, zu der sie gehört. Zum Beispiel wird [`BaseAudioContext/currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) unter `https://developer.mozilla.org/de/docs/Web/API/AudioContext/currentTime` dokumentiert.

## Erstellen der Seiten

Erstellen Sie jetzt die benötigten Seiten gemäß der untenstehenden Strukturen. Unser [MDN-Inhalts-README](https://github.com/mdn/content#adding-a-new-document) enthält Anweisungen zum Erstellen eines neuen Dokuments, und unser [Seitentypen-Leitfaden](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) enthält weitere Beispiele und Seitenschablonen, die nützlich sein könnten.

### Struktur einer Übersichtsseite

API-Startseiten werden in der Länge stark variieren, abhängig davon, wie groß die API ist, aber sie werden alle im Grunde dieselben Merkmale aufweisen. Siehe [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API](/de/docs/Web/API/Web_Audio_API) für ein Beispiel für eine große Startseite.

Die Merkmale einer Startseite sind wie folgt:

1. **Beschreibung**: Der erste Absatz der Startseite sollte eine kurze, prägnante Beschreibung des übergreifenden Zwecks der API liefern.
2. **Konzepte und Nutzung Abschnitt**: Der nächste Abschnitt sollte „\[Name der API] Konzepte und Nutzung“ betitelt werden, und einen Überblick über alle Hauptfunktionen bieten, die die API bietet, welche Probleme sie löst und wie sie funktioniert – alles auf hohem Niveau. Dieser Abschnitt sollte relativ kurz sein und nicht auf Code- oder spezifische Implementierungsdetails eingehen.
3. **Liste der Schnittstellen**: Dieser Abschnitt sollte „\[Name der API] Schnittstellen“ betitelt werden und Links zur Referenzseite für jede Schnittstelle bieten, die die API ausmacht, zusammen mit einer kurzen Beschreibung, was jede macht. Siehe den Abschnitt „Referenzieren anderer API-Funktionen mit dem \\{{domxref}}-Makro“ für eine schnellere Möglichkeit, neue Seiten zu erstellen.
4. **Beispiele**: Dieser Abschnitt sollte einen Anwendungsfall oder zwei für die API zeigen.
5. **Spezifikationstabelle**: An diesem Punkt müssen Sie eine Spezifikationstabelle einfügen – siehe den Abschnitt „Erstellen einer Spezifikationsreferenztabelle“ für weitere Details.
6. **Browser-Kompatibilität**: Jetzt müssen Sie eine Browser-Kompatibilitätstabelle hinzufügen. Siehe [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Details.
7. **Siehe auch**: Der "Siehe auch"-Abschnitt ist ein guter Ort, um weitere Links hinzuzufügen, die beim Erlernen dieser Technologie nützlich sein könnten, einschließlich MDN (und externer) Tutorials, Beispiele, Bibliotheken usw.

### Struktur einer Schnittstellenseite

Nun sollten Sie bereit sein, Ihre Schnittstellenseiten zu schreiben. Jede Schnittstellen-Referenzseite sollte folgende Struktur einhalten:

1. **\\{{APIRef}}**: Fügen Sie das \\{{APIRef}}-Makro in der ersten Zeile jeder Schnittstellenseite ein, einschließlich des Namens der API als Argument, z.B. \\{{APIRef("Web Audio API")}}. Dieses Makro dient dazu, ein Referenzmenü auf der linken Seite der Schnittstellenseite zu konstruieren, das Eigenschaften und Methoden sowie andere Schnelllinks enthält, wie sie im [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json)-Makro definiert sind (bitten Sie jemanden, Ihre API zu einem bestehenden GroupData-Eintrag hinzuzufügen oder einen neuen zu erstellen, wenn sie dort noch nicht aufgeführt ist). Das Menü sieht dann ungefähr so aus wie im folgenden Screenshot.
   ![Dieser Screenshot zeigt ein vertikales Navigationsmenü für die OscillatorNode-Schnittstelle mit mehreren Unterlisten für Methoden und Eigenschaften, wie sie durch das APIRef-Makro generiert wurden.](apiref-links.png)
2. **Merkmalsstatus**: Ein [Banner, das den Merkmalsstatus anzeigt](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners) (wie veraltet, nicht standardisiert oder experimentell) wird bei Bedarf automatisch hinzugefügt. Dazu müssen Sie den Status in der [browser-kompatibilitätsdaten Repository](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) aktualisieren.
3. **Beschreibung**: Der erste Absatz der Schnittstellenseite sollte eine kurze, prägnante Beschreibung des übergreifenden Zwecks der Schnittstelle liefern. Möglicherweise möchten Sie auch ein oder zwei weitere Absätze hinzufügen, wenn zusätzliche Beschreibungen erforderlich sind. Wenn die Schnittstelle tatsächlich ein Wörterbuch ist, sollten Sie diesen Begriff anstelle von „Schnittstelle“ verwenden.
4. **Vererbungsdiagramm:** Verwenden Sie das [`\{{InheritanceDiagram}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/inheritance_diagram.rs)-Makro, um ein SVG-Vererbungsdiagramm für die Schnittstelle einzubinden.
5. **Liste der Eigenschaften, Liste der Methoden**: Diese Abschnitte sollten „Eigenschaften“ und „Methoden“ betitelt werden und Links (mithilfe des \\{{domxref}}-Makros) zu einer Referenzseite für jede Eigenschaft/Methode dieser Schnittstelle bieten, zusammen mit einer Beschreibung, was jede macht. Diese sollten mit [Beschreibung/Definitionslisten](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists) markiert werden. Jede Beschreibung sollte kurz und prägnant sein - wenn möglich ein Satz. Siehe den Abschnitt „Referenzieren anderer API-Funktionen mit dem \\{{domxref}}-Makro“ für eine schnellere Möglichkeit, Links zu anderen Seiten zu erstellen.

   Zu Beginn beider Abschnitte, vor Beginn der Liste der Eigenschaften/Methoden, geben Sie die Vererbung mit dem entsprechenden Satz an, in Kursivschrift:

   - _Diese Schnittstelle implementiert keine spezifischen Eigenschaften, erbt jedoch Eigenschaften von \\{{domxref("XYZ")}}, und \\{{domxref("XYZ2")}}._
   - _Diese Schnittstelle erbt auch Eigenschaften von \\{{domxref("XYZ")}}, und \\{{domxref("XYZ2")}}._
   - _Diese Schnittstelle implementiert keine spezifischen Methoden, erbt jedoch Methoden von \\{{domxref("XYZ")}}, und \\{{domxref("XYZ2")}}._
   - _Diese Schnittstelle erbt auch Methoden von \\{{domxref("XYZ")}}, und \\{{domxref("XYZ2")}}._

   > [!NOTE]
   > Eigenschaften, die nur lesbar sind, sollten das \\{{ReadOnlyInline}}-Makro enthalten, das ein ansprechendes kleines „Nur Lesen“-Abzeichen erstellt und auf derselben Zeile wie ihre \\{{domxref}}-Links (nach der Verwendung der \\{{experimentalInline}}, \\{{non-standard_Inline}} und \\{{deprecatedInline}}-Makros, falls einige davon benötigt werden, stehen.

6. **Beispiele**: Fügen Sie eine Code-Auflistung hinzu, um die typische Verwendung einer wichtigen Funktion der API zu zeigen. Anstatt den gesamten Code aufzulisten, sollten Sie eine interessante Auswahl davon auflisten. Für eine vollständige Codeauflistung können Sie auf ein [GitHub](https://github.com/)-Repo verweisen, das das vollständige Beispiel enthält, und Sie könnten auch auf ein Live-Beispiel verlinken, das mit der [GitHub gh-pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)-Funktion erstellt wurde (sofern es nur clientseitigen Code verwendet). Wenn das Beispiel visuell ist, könnten Sie auch die MDN [Live Sample](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples)-Funktion verwenden, um es live und spielbar auf der Seite zu machen.
7. **Spezifikationstabelle**: An diesem Punkt müssen Sie eine Spezifikationstabelle einfügen – siehe den Abschnitt „Erstellen einer Spezificationsreferenztabelle“ für weitere Details.
8. **Browser-Kompatibilität**: Jetzt müssen Sie eine Browser-Kompatibilitätstabelle hinzufügen. Siehe [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Details.
9. **Polyfill**: Falls zutreffend, fügen Sie diesen Abschnitt ein, indem Sie Code für ein Polyfill bereitstellen, das die Verwendung der API selbst in Browsern ermöglicht, die sie nicht implementieren. Wenn kein Polyfill existiert oder benötigt wird, lassen Sie diesen Abschnitt vollständig weg.
10. **Siehe auch**: Der „Siehe auch“-Abschnitt ist ein guter Ort, um weitere Links hinzuzufügen, die beim Erlernen dieser Technologie nützlich sein können, einschließlich MDN (und externer) Tutorials, Beispiele, Bibliotheken usw. Wir haben eine liberale Politik für das Verlinken zu externen Quellen, aber achten Sie darauf:

    - Fügen Sie keine Seiten mit den gleichen Informationen wie eine andere Seite im MDN hinzu; verlinken Sie stattdessen zu dieser Seite.
    - Fügen Sie keine Autoren-Namen ein – wir sind eine dokumentationsneutrale Dokumentationsseite. Verlinken Sie zum Dokument, der Autorenname wird dort angezeigt.
    - Achten Sie besonders auf Blog-Beiträge: Diese neigen dazu, veraltet zu werden (alte Syntax, falsche Kompatibilitätsinformationen). Verlinken Sie zu ihnen nur, wenn sie einen klaren Mehrwert bieten, der in einem gepflegten Dokument nicht zu finden ist.
    - Verwenden Sie keine Aktionsverben wie „Siehe … für weitere Informationen“ oder „Klicken Sie, um zu…“, Sie wissen nicht, ob Ihr Leser in der Lage ist, den Link zu sehen oder darauf zu klicken (wie in einer Papierfassung des Dokuments).

#### Schnittstellenseiten-Beispiele

Die folgenden sind Beispiele für Schnittstellenseiten:

- [`Request`](/de/docs/Web/API/Request) aus der [Fetch API](/de/docs/Web/API/Fetch_API).
- [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) aus der [Web Speech API](/de/docs/Web/API/Web_Speech_API).

### Struktur einer Eigenschaftsseite

Erstellen Sie Ihre Eigenschaftsseiten als Unterseiten der Schnittstelle, auf der sie implementiert sind. Kopieren Sie die Struktur einer anderen Eigenschaftsseite, um als Basis für Ihre neue Seite zu dienen.

Bearbeiten Sie den Namen der Eigenschaftsseite, um der Konvention `Interface.property_name` zu folgen.

Eigenschaftsseiten müssen die folgenden Abschnitte enthalten:

1. **Titel**: Der Titel der Seite muss **InterfaceName.propertyName** lauten. Der Schnittstellenname muss mit einem Großbuchstaben beginnen. Obwohl eine Schnittstelle in JavaScript im Prototyp von Objekten implementiert ist, verwenden wir im Titel kein `.prototype.`, anders als in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference).
2. **\\{{APIRef}}**: Fügen Sie das \\{{APIRef}}-Makro in der ersten Zeile jeder Eigenschaftsseite ein, einschließlich des Namens der API als Argument, z. B. \\{{APIRef("Web Audio API")}}. Dieses Makro dient dazu, ein Referenzmenü auf der linken Seite der Schnittstellenseite zu konstruieren, das Eigenschaften und Methoden sowie andere Schnelllinks enthält, wie sie im [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json)-Makro definiert sind (bitten Sie jemanden, Ihre API zu einem bestehenden GroupData-Eintrag hinzuzufügen oder einen neuen zu erstellen, wenn sie dort noch nicht aufgeführt ist). Das Menü sieht dann ungefähr so aus wie im folgenden Screenshot.
   ![Dieser Screenshot zeigt ein vertikales Navigationsmenü für die OscillatorNode-Schnittstelle mit mehreren Unterlisten für Methoden und Eigenschaften, wie sie durch das APIRef-Makro generiert wurden.](apiref-links.png)
3. **Merkmalsstatus**: Ein [Banner, das den Merkmalsstatus anzeigt](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners) (wie veraltet, nicht standardisiert oder experimentell) wird bei Bedarf automatisch hinzugefügt. Dazu müssen Sie den Status in der [browser-kompatibilitätsdaten Repository](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) aktualisieren.

4. **Beschreibung**: Der erste Absatz der Eigenschaftsseite sollte eine kurze, prägnante Beschreibung des übergreifenden Zwecks der Eigenschaft liefern. Möglicherweise möchten Sie auch ein oder zwei weitere Absätze hinzufügen, wenn zusätzliche Beschreibungen erforderlich sind. Offensichtliche zusätzliche Informationen sind der Standard-/Anfangswert und ob es nur lesbar ist oder nicht. Die Struktur des ersten Satzes muss so sein:

   - Für schreibgeschützte Eigenschaften
     - : Die **`InterfaceName.property`** schreibgeschützte Eigenschaft gibt ein \\{{domxref("type")}} zurück, das …
   - Für andere Eigenschaften
     - : Die **`InterfaceName.property`** Eigenschaft ist ein \\{{domxref("type")}} das …

   > **Hinweis:** `InterfaceName.property` sollte im `<code>`-Format sein und außerdem beim ersten Gebrauch fett (`<strong>`) markiert sein.

5. **Wert**: Der Wert-Abschnitt wird eine Beschreibung des Werts der Eigenschaft enthalten. Dies sollte den Datentyp der Eigenschaft enthalten und was sie darstellt. Für ein Beispiel siehe [`SpeechRecognition.grammars`](/de/docs/Web/API/SpeechRecognition/grammars).

6. **Beispiele**: Fügen Sie eine Code-Auflistung hinzu, um die typische Verwendung der Eigenschaft in Frage zu zeigen. Sie sollten mit einem einfachen Beispiel beginnen, das zeigt, wie ein Objekt des Typs erstellt und wie man auf die Eigenschaft zugreift. Komplexere Beispiele können nach einem solchen Beispiel hinzugefügt werden. In diesen zusätzlichen Beispielen, anstatt den gesamten Code aufzulisten, sollten Sie eine interessante Auswahl davon auflisten. Für eine vollständige Codeauflistung können Sie auf ein [GitHub](https://github.com/)-Repo verweisen, das das vollständige Beispiel enthält, und Sie können auch auf ein Live-Beispiel verlinken, das mit der [GitHub gh-pages-Funktion](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) erstellt wurde (sofern es nur clientseitigen Code verwendet). Wenn das Beispiel visuell ist, könnten Sie auch die MDN [Live Sample](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples)-Funktion verwenden, um es live und spielbar auf der Seite zu machen.
7. **Spezifikationstabelle**: An diesem Punkt müssen Sie eine Spezifikationstabelle einfügen – siehe den Abschnitt „Erstellen einer Spezifikationsreferenztabelle“ für weitere Details.
8. **Browser-Kompatibilität**: Jetzt müssen Sie eine Browser-Kompatibilitätstabelle hinzufügen. Siehe [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Details.
9. **Siehe auch**: Der „Siehe auch“-Abschnitt ist ein guter Ort, um weitere Links hinzuzufügen, die bei der Nutzung dieser Technologie nützlich sein können: wie Methoden und Eigenschaften, die von einer Änderung dieser Eigenschaft betroffen sind, oder Ereignisse, die in Bezug auf sie ausgelöst werden. Weitere Links, die beim Erlernen dieser Technologie nützlich sind, einschließlich MDN (und externer) Tutorials, Beispiele, Bibliotheken usw., können hinzugefügt werden, obwohl es möglicherweise sinnvoll ist, diese stattdessen auf der Schnittstellen-Referenzseite hinzuzufügen.

#### Eigenschaftsseiten-Beispiele

Die folgenden sind Beispiele für Eigenschaftsseiten:

- [`Request.method`](/de/docs/Web/API/Request/method) aus der [Fetch API](/de/docs/Web/API/Fetch_API).
- [`SpeechSynthesis.speaking`](/de/docs/Web/API/SpeechSynthesis/speaking) aus der [Web Speech API](/de/docs/Web/API/Web_Speech_API).

### Struktur einer Methodenseite

Erstellen Sie Ihre Methodenseiten als Unterseiten der Schnittstelle, auf der sie implementiert sind. Kopieren Sie die Struktur einer anderen Methodenseite, um als Basis für Ihre neue Seite zu dienen.

Methodenseiten benötigen die folgenden Abschnitte:

1. **Titel**: Der Titel der Seite muss **InterfaceName.method()** (mit den zwei abschließenden Klammern) lauten, aber der Slug (das Ende der Seiten-URL) darf die Klammern nicht enthalten. Auch der Schnittstellenname muss mit einem Großbuchstaben beginnen. Obwohl eine Schnittstelle in JavaScript im Prototyp von Objekten implementiert ist, verwenden wir im Titel kein `.prototype.`, anders als in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference).
2. **\\{{APIRef}}**: Fügen Sie das \\{{APIRef}}-Makro in der ersten Zeile jeder Methodenseite ein, einschließlich des Namens der API als Argument, z.B. \\{{APIRef("Web Audio API")}}. Dieses Makro dient dazu, ein Referenzmenü auf der linken Seite der Schnittstellenseite zu konstruieren, das Eigenschaften und Methoden sowie andere Schnelllinks enthält, wie sie im [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json)-Makro definiert sind (bitten Sie jemanden, Ihre API zu einem bestehenden GroupData-Eintrag hinzuzufügen oder einen neuen zu erstellen, wenn sie dort noch nicht aufgeführt ist). Das Menü sieht dann ungefähr so aus wie im folgenden Screenshot.
   ![Dieser Screenshot zeigt ein vertikales Navigationsmenü für die OscillatorNode-Schnittstelle mit mehreren Unterlisten für Methoden und Eigenschaften, wie sie durch das APIRef-Makro generiert wurden.](apiref-links.png)
3. **Merkmalsstatus**: Ein [Banner, das den Merkmalsstatus anzeigt](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners) (wie veraltet, nicht standardisiert oder experimentell) wird bei Bedarf automatisch hinzugefügt. Dazu müssen Sie den Status in der [browser-kompatibilitätsdaten Repository](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) aktualisieren.

4. **Beschreibung**: Der erste Absatz der Methodenseite sollte eine kurze, prägnante Beschreibung des übergreifenden Zwecks der Methode liefern. Möglicherweise möchten Sie auch ein oder zwei weitere Absätze hinzufügen, wenn zusätzliche Beschreibungen erforderlich sind. Offensichtliche zusätzliche Informationen sind die Standardparameterwerte, jede Theorie, auf der die Methode beruht, und was die Parameterwerte bedeuten.

   - Der Anfang des ersten Satzes muss die folgende Struktur aufweisen:
     - : Die **`InterfaceName.method()`** Methoden-Schnittstelle …

   > **Hinweis:** `InterfaceName.method()` sollte im `<code>`-Format sein und zudem beim ersten Gebrauch fett (`<strong>`) markiert sein.

5. **Syntax**: Der Syntax-Abschnitt sollte ein 2–3-zeiliges Beispiel enthalten – normalerweise nur die Konstruktion der Schnittstelle und dann der Aufruf der Schnittstellen-Methode.

   - Die Syntax sollte die Form haben:
     - : method(param1, param2, …)

   Der Syntax-Abschnitt sollte drei Unterabschnitte enthalten (siehe [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign) für ein Beispiel):

   - "Parameter": Dies sollte eine Definitionsliste (oder ungeordnete Liste) enthalten, die die verschiedenen Parameter, die die Methode nimmt, benennt und beschreibt. Sie sollten das {{optional_inline}}-Makro neben dem Parameternamen einfügen, wenn es sich um optionale Parameter handelt. Wenn es keine Parameter gibt, sollte dieser Abschnitt weggelassen werden.
   - "Rückgabewert": Dies sollte sagen, welchen Rückgabewert die Methode hat, sei es ein einfacher Wert wie ein Double oder Boolean, oder ein komplexerer Wert wie ein anderes Schnittstellenobjekt, in welchem Fall Sie das \\{{domxref}}-Makro verwenden können, um auf die MDN-API-Seite zu verlinken, die diese Schnittstelle behandelt (falls sie existiert). Eine Methode könnte auch nichts zurückgeben, in welchem Fall der Rückgabewert als "\\{{jsxref('undefined')}}" geschrieben werden sollte (was so auf der gerenderten Seite aussieht: {{jsxref("undefined")}}).
   - "Ausnahmen": Dies sollte die verschiedenen Ausnahmen auflisten, die beim Aufruf der Methode ausgelöst werden können, sowie die Umstände, die diese verursachen. Wenn es keine Ausnahmen gibt, sollte dieser Abschnitt weggelassen werden.

6. **Beispiele**: Fügen Sie eine Code-Auflistung hinzu, um die typische Verwendung der Methode in Frage zu zeigen. Anstatt den gesamten Code aufzulisten, sollten Sie eine interessante Auswahl davon auflisten. Für eine vollständige Codeauflistung sollten Sie auf ein [GitHub](https://github.com/)-Repo verweisen, das das vollständige Beispiel enthält, und Sie könnten auch auf ein Live-Beispiel verlinken, das mit der [GitHub gh-pages-Funktion](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) erstellt wurde (sofern es nur clientseitigen Code verwendet). Wenn das Beispiel visuell ist, könnten Sie auch die MDN [Live Sample](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples)-Funktion verwenden, um es live und spielbar auf der Seite zu machen.
7. **Spezifikationstabelle**: An diesem Punkt müssen Sie eine Spezifikationstabelle einfügen – siehe den Abschnitt „Erstellen einer Spezifikationsreferenztabelle“ für weitere Details.
8. **Browser-Kompatibilität**: Jetzt müssen Sie eine Browser-Kompatibilitätstabelle hinzufügen. Siehe [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Details.

#### Methodenseiten-Beispiele

Die folgenden sind Beispiele für Methodenseiten:

- [`Document.getAnimations`](/de/docs/Web/API/Document/getAnimations) aus der [Web Animations API](/de/docs/Web/API/Web_Animations_API).
- [`fetch()`](/de/docs/Web/API/Window/fetch) aus der [Fetch API](/de/docs/Web/API/Fetch_API).

## Seitenleisten

Nachdem Sie Ihre API-Referenzseiten erstellt haben, möchten Sie die korrekten Seitenleisten darauf einfügen, um die Seiten miteinander zu verbinden. Unser [Leitfaden zu API-Referenz-Seitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) erklärt, wie das geht.
