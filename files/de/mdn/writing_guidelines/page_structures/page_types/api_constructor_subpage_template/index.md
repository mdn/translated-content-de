---
title: API-Constructor-Subseitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template
l10n:
  sourceCommit: 359403526b7b802cdb09b90acf28577b959076d0
---

> **Hinweis:** _Entfernen Sie diesen gesamten erläuternden Hinweis vor der Veröffentlichung_
>
> ---
>
> **Seiten-Metadaten:**
>
> Die Metadaten am Anfang der Seite werden verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend dem Konstruktor aktualisiert werden.
>
> ```md
> ---
> title: NameOfTheParentInterface: NameOfTheConstructor() Konstruktor
> slug: Web/API/NameOfTheParentInterface/NameOfTheConstructor
> page-type: web-api-constructor
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: path.to.feature.NameOfTheConstructor
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird.
>     Formatierung wie `NameOfTheParentInterface: NameOfTheConstructor() Konstruktor`.
>     Zum Beispiel hat der [Request()](/de/docs/Web/API/Request/Request)-Konstruktor einen _Titel_ von `Request: Request() constructor`.
> - **slug**
>   - : Der letzte Teil des URL-Pfades nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird formatiert wie `Web/API/NameOfTheParentInterface/NameOfTheConstructor`.
>     Beachten Sie, dass der Name der Konstrukturfunktion im Slug die Klammern weglässt (er endet in `NameOfTheConstructor` anstatt `NameOfTheConstructor()`).
> - **page-type**
>   - : Der `page-type`-Schlüssel für Web/API-Konstruktoren ist immer `web-api-constructor`.
> - **status**
>   - : Kennzeichen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Daten zur Browser-Kompatibilität für das Feature gesetzt. Siehe ["Wie Funktionsstatus hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheConstructor` mit der Abfragezeichenfolge für den Konstruktor im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet automatisch den Schlüssel, um die Bereiche Kompatibilität und Spezifikation zu füllen (die Makros `\{{Compat}}` und `\{{Specifications}}` zu ersetzen).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den API-Konstruktor in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren müssen und der Eintrag für die API Spezifikationsinformationen enthalten muss.
>     Siehe unseren [Leitfaden, wie man das macht](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am oberen Seitenrand**
>
> Eine Reihe von Makroaufrufen erscheint am Anfang des Inhaltsabschnitts (unmittelbar unter den Seiten-Metadaten).
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht notwendig, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — Dies erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das angibt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie in Firefox hinter einem Pref versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) einfügen.
> - `\{{Deprecated_Header}}` — Dies erzeugt ein **Veraltet**-Banner, das angibt, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — Dies erzeugt ein **Nichtstandard**-Banner, das angibt, dass das Feature Teil keiner Spezifikation ist.
>
> Sie sollten die folgenden Makros entsprechend den Ratschlägen unten aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — Dies erzeugt ein **Sicherer Kontext**-Banner, das angibt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn sie es nicht ist, können Sie den Makroaufruf entfernen.
>   Wenn sie es ist, sollten Sie auch einen Eintrag dafür auf der Seite [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) einfügen.
> - `\{{AvailableInWorkers}}` — Dies erzeugt eine **In Arbeitern verfügbar**-Notiz, die angibt, dass die Technologie im [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn sie nur im Fensterkontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Wenn sie auch oder nur im Worker-Kontext verfügbar ist, müssen Sie möglicherweise ein Parameter an dieses Makro gemäß seiner Verfügbarkeit übergeben (siehe [\\{{AvailableInWorkers}} Makros Quellcode](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte), Sie müssen möglicherweise auch einen Eintrag dafür auf der Seite [Web-APIs in Workern verfügbar](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#supported_web_apis) einfügen.
> - `\{{APIRef("GroupDataName")}}` — Dies generiert die linke Referenz-Seitenleiste, die Schnellreferenz-Links zeigt, die sich auf die aktuelle Seite beziehen.
>   Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) die gleiche Seitenleiste, die auf die anderen Seiten in der API zeigt.
>   Um die korrekte Seitenleiste für Ihre API zu generieren, müssen Sie einen `GroupData`-Eintrag zu unserem GitHub-Repo hinzufügen und den Namen des Eintrags im Makroaufruf anstelle von _GroupDataName_ einfügen.
>   Siehe unseren [API-Referenzseitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars)-Leitfaden für Informationen dazu, wie das gemacht wird.
> - Denken Sie daran, das `\{{MDNSidebar}}`-Makro zu entfernen, wenn Sie diese Seite kopieren.
>
> Geben Sie Status-Header-Makros nicht manuell an. Verweisen Sie auf den Abschnitt [Wie Funktionsstatus hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die **Sicherer Kontext**, **In Arbeitern verfügbar**, **Experimentell**, **Veraltet** und **Nichtstandard**-Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz — fangen Sie damit an, den Namen des Konstruktors zu nennen und zu erklären, was er macht.
Das sollte idealerweise ein oder zwei kurze Sätze umfassen.
Sie könnten den Großteil davon aus der Zusammenfassung des Konstruktors auf der entsprechenden API-Referenzseite kopieren.

## Syntax

Füllen Sie einen Syntax-Block aus, gemäß den Anweisungen in unserem [Syntaxabschnitte](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections)-Artikel.

### Parameter

- `parameter1` {{optional_inline}}
  - : Geben Sie eine kurze Beschreibung des Parameters und seiner Funktion hier ein. Fügen Sie für jeden Parameter einen Begriff und eine Definition hinzu.
    Wenn der Parameter nicht optional ist, entfernen Sie den \\{{optional_inline}}-Makroaufruf.
- `parameter2`
  - : usw.

### Rückgabewert

Geben Sie eine Beschreibung des Rückgabewerts des Konstruktors an, einschließlich des Datentyps und seiner Bedeutung.
Normalerweise lautet dies einfach "Eine Instanz des `\{{domxref("NameOfTheParentInterface")}}`-Objekts."

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Rückstrich im Markdown-Datei._

### Ausnahmen

Fügen Sie eine Liste aller Ausnahmen hinzu, die der Konstruktor auslösen kann. Fügen Sie für jede Ausnahme einen Begriff und eine Definition hinzu.

- `Exception1`
  - : Beschreiben Sie, wie die Ausnahme ausgelöst wird.
- `Exception2`
  - : Beschreiben Sie, wie die Ausnahme ausgelöst wird.

Beachten Sie, dass wir zwei Arten von Ausnahmen haben: [`DOMException`](/de/docs/Web/API/DOMException)-Objekte und reguläre JavaScript-Ausnahmen, wie {{jsxref("TypeError")}} und {{jsxref("RangeError")}}. Ein Webentwickler muss wissen:

- welches Objekt geworfen wird
- für Ausnahmen, die `DOMException`-Objekte sind, der `name` der Ausnahme.

Hier ist ein Beispiel, bei dem eine Methode eine `DOMException` mit dem Namen `IndexSizeError` auslösen kann, eine zweite `DOMException` mit dem Namen `InvalidNodeTypeError` und eine JavaScript-Ausnahme vom Typ `TypeError`:

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst …
- `InvalidNodeTypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst …
- {{jsxref("TypeError")}}
  - : Ausgelöst …

## Beispiele

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreibend für das sein, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Verwenden Sie für eine längere Beschreibung den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Codebeispiele hinzufügt](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für mehr Informationen.

> [!NOTE]
> Manchmal wollen Sie auf Beispiele auf einer anderen Seite verweisen.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite haben und noch mehr auf einer anderen Seite:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) ein und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Die Fetch-API verwenden
>
> Beispiel für Fetch
>
> ### Weitere Beispiele
>
> Links zu weiteren Beispielen auf anderen Seiten
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite haben und keine auf dieser Seite:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele zu dieser API, sehen Sie sich [die Seite zu fetch()](https://example.org/) an.
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Rückstrich im Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Rückstrich im Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle API beziehen. Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (Jahr)
