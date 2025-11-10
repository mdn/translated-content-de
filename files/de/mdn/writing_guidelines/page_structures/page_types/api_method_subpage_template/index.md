---
title: API-Methode Unterseite Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

> [!NOTE]
> _Entfernen Sie diese gesamte erklärende Notiz vor der Veröffentlichung._
>
> ---
>
> **Seitenvorderseite:**
>
> Die Vorderseite am Anfang der Seite wird verwendet, um "Seitenmetadaten" zu definieren.
> Die Werte sollten entsprechend für die jeweilige Methode aktualisiert werden.
>
> ```md
> ---
> title: NameOfTheParentInterface.NameOfTheMethod()
> slug: Web/API/NameOfTheParentInterface/NameOfTheMethod
> page-type: web-api-instance-method ODER web-api-static-method
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: path.to.feature.NameOfTheMethod
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird.
>     Formatieren Sie als `"NameOfTheParentInterface: NameOfTheMethod() method"`.
>     Zum Beispiel hat die [count()](/de/docs/Web/API/IDBIndex/count) Methode der [IDBIndex](/de/docs/Web/API/IDBIndex) Schnittstelle einen _title_ von `IDBIndex: count() method`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird wie `Web/API/NameOfTheParentInterface/NameOfTheMethod` formatiert.
>
>     Wenn die Methode statisch ist, muss der Slug ein `_static` Suffix haben, wie: `Web/API/NameOfTheParentInterface/NameOfTheMethod_static`. Dies ermöglicht es uns, Instanz- und statische Methoden mit demselben Namen zu unterstützen.
>
>     Beachten Sie, dass der Name der Methode im Slug die Klammern weglässt (er endet in `NameOfTheMethod`, nicht `NameOfTheMethod()`).
>
> - **page-type**
>   - : Der `page-type` Schlüssel für Web/API-Methoden ist entweder `web-api-instance-method` (für Instanzmethoden) oder `web-api-static-method` (für statische Methoden).
> - **status**
>   - : Kennzeichen, die den Status dieser Funktion beschreiben. Ein Array, das eines oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe ["Wie Funktionsstatus hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheMethod` mit dem Abfragezeichenkette für die Methode im [Browser-compat-Daten-Repository](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte zu füllen (ersetzen der `\{{Compat}}` und `\{{Specifications}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die API-Methode in unserem [Browser-compat-Daten-Repository](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag für die API muss Spezifikationsinformationen enthalten.
>     Siehe unseren [Leitfaden, wie man dies tut](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Top-of-page Macros**
>
> Eine Reihe von Makroaufrufen erscheint oben im Inhaltsabschnitt (unmittelbar unter der Seitenvorderseite).
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht nötig, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — erzeugt ein **Dies ist eine experimentelle Technologie** Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und die Technologie in Firefox hinter einem Präf versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — erzeugt ein **Veraltet** Banner, das anzeigt, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — erzeugt ein **Nicht-standardmäßiges** Banner, das anzeigt, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den untenstehenden Anweisungen aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — erzeugt ein **Sicherer Kontext** Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn nicht, können Sie den Makroaufruf entfernen.
>   Wenn doch, sollten Sie auch einen Eintrag dafür auf der Seite [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{AvailableInWorkers}}` — erzeugt eine **Verfügbar in Arbeiter** Notiz, die anzeigt, dass die Technologie im [Arbeiterkontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn sie nur im Fensterkontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Wenn sie auch oder nur im Arbeiterkontext verfügbar ist, müssen Sie möglicherweise einen Parameter hinzufügen, um die Verfügbarkeit festzulegen (siehe [\\{{AvailableInWorkers}} Makro-Quellcode](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte), möglicherweise müssen Sie auch einen Eintrag auf der Seite [Web APIs available in workers](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers) ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — erzeugt die Referenz-Seitenleiste auf der linken Seite, die schnelle Referenzlinks zeigt, die sich auf die aktuelle Seite beziehen.
>   Zum Beispiel hat jede Seite der [WebVR API](/de/docs/Web/API/WebVR_API) die gleiche Seitenleiste, die auf die anderen Seiten der API verweist.
>   Um die korrekte Seitenleiste für Ihre API zu erstellen, müssen Sie einen `GroupData` Eintrag in unserem GitHub-Repo hinzufügen und den Namen des Eintrags im Makroaufruf anstelle von _GroupDataName_ einfügen.
>   Siehe unseren [API-Referenzseitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) Leitfaden für Informationen, wie dies zu tun ist.
>
> Status-Header-Makros sollten nicht manuell bereitgestellt werden. Lesen Sie den Abschnitt ["Wie Funktionsstatus hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die **Sicherer Kontext**, **Verfügbar in Arbeiter**, **Experimentell**, **Veraltet** und **Nicht-standardmäßig** Banner werden direkt nach diesem Notizblock gezeigt.
>
> _Denken Sie daran, diese gesamte erklärende Notiz vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz — beginnen Sie mit dem Namen der Methode, sagen Sie, zu welcher Schnittstelle sie gehört, und was sie tut.
Dies sollte idealerweise aus einem oder zwei kurzen Sätzen bestehen. Sie könnten den größten Teil davon aus der Zusammenfassung der Methode auf der entsprechenden API-Referenzseite kopieren.

## Syntax

Füllen Sie ein Syntaxfeld gemäß den Anleitungen in unserem Artikel zu [Syntaxabschnitten](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections) aus.

### Parameter

- `parameter1` {{Optional_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung des Parameters und seiner Funktion hinzu. Fügen Sie für jeden Parameter einen Begriff und eine Definition hinzu. Wenn der Parameter nicht optional ist, entfernen Sie den \{{optional_inline}} Makroaufruf.
- `parameter2`
  - : usw.

> [!NOTE]
> Dieser Abschnitt ist obligatorisch. Wenn es keine Parameter gibt, setzen Sie `None.` anstelle der Definitionsliste.

### Rückgabewert

Fügen Sie eine Beschreibung des Rückgabewerts der Methode ein, einschließlich des Datentyps und was er darstellt.

Wenn die Methode nichts zurückgibt, geben Sie einfach "None ({{jsxref('undefined')}})." ein.

### Ausnahmen

Geben Sie eine Liste aller Ausnahmen an, die die Methode auslösen kann. Fügen Sie für jede Ausnahme einen Begriff und eine Definition hinzu.

- `Exception1`
  - : Fügen Sie Beschreibungen hinzu, wie die Ausnahme ausgelöst wird.
- `Exception2`
  - : Fügen Sie Beschreibungen hinzu, wie die Ausnahme ausgelöst wird.

Beachten Sie, dass wir zwei Arten von Ausnahmen haben: [`DOMException`](/de/docs/Web/API/DOMException) Objekte und reguläre JavaScript-Ausnahmen, wie {{jsxref("TypeError")}} und {{jsxref("RangeError")}}. Ein Webentwickler muss wissen:

- welches Objekt geworfen wird
- für Ausnahmen, die `DOMException` Objekte sind, der `name` der Ausnahme.

Hier ist ein Beispiel, bei dem eine Methode eine `DOMException` mit einem Namen von `IndexSizeError`, eine zweite `DOMException` mit einem Namen von `InvalidNodeTypeError` und eine JavaScript-Ausnahme vom Typ `TypeError` auslösen kann:

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Geworfen …
- `InvalidNodeTypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Geworfen …
- {{jsxref("TypeError")}}
  - : Geworfen …

## Beschreibung

_Detaillierte Beschreibung, wie sich die Methode verhält_
_Abschnitt weggelassen, wenn ein einleitender Absatz (oder zwei) oben auf der Seite ausreichen._

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift mit dem Namen des Beispiels haben. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Weitere Informationen finden Sie in unserem Leitfaden, wie Sie [Codebeispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwenden der fetch API
>
> Beispiel von Fetch
>
> ### Weitere Beispiele
>
> Links zu weiteren Beispielen auf anderen Seiten
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite und keine auf dieser Seite haben:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele zu dieser API siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle API beziehen. Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- extern_link (Jahr)
