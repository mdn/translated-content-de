---
title: API Methoden-Unterseite Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

> [!NOTE] > _Entfernen Sie diese gesamte erläuternde Notiz vor der Veröffentlichung._
>
> ---
>
> **Seiteneigenschaften:**
>
> Die Seiteneigenschaften am Anfang der Seite werden verwendet, um "Seitenmetadaten" zu definieren.
> Die Werte sollten entsprechend auf die spezifische Methode aktualisiert werden.
>
> ```md
> ---
> title: NameOfTheParentInterface.NameOfTheMethod()
> slug: Web/API/NameOfTheParentInterface/NameOfTheMethod
> page-type: web-api-instance-method OR web-api-static-method
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: path.to.feature.NameOfTheMethod
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die am Anfang der Seite angezeigt wird.
>     Formatieren Sie sie als `"NameOfTheParentInterface: NameOfTheMethod() method"`.
>     Zum Beispiel hat die Methode [count()](/de/docs/Web/API/IDBIndex/count) der Schnittstelle [IDBIndex](/de/docs/Web/API/IDBIndex) einen _title_ von `IDBIndex: count() method`.
> - **slug**
>
>   - : Der Endteil des URL-Pfades nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird formatiert wie `Web/API/NameOfTheParentInterface/NameOfTheMethod`.
>
>     Wenn die Methode statisch ist, dann muss der `slug` ein `_static` Suffix haben, wie: `Web/API/NameOfTheParentInterface/NameOfTheMethod_static`. Dies ermöglicht uns, sowohl Instanz- als auch statische Methoden mit demselben Namen zu unterstützen.
>
>     Beachten Sie, dass der Name der Methode im `slug` die Klammern weglässt (es endet mit `NameOfTheMethod` nicht `NameOfTheMethod()`).
>
> - **page-type**
>   - : Der `page-type` Schlüssel für Web/API Methoden ist entweder `web-api-instance-method` (für Instanzmethoden) oder `web-api-static-method` (für statische Methoden).
> - **status**
>   - : Kennzeichnungen, die den Status dieser Funktion beschreiben. Ein Array, das einen oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe ["Wie Funktionsstatus hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheMethod` durch die Abfragezeichenfolge für die Methode im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet automatisch den Schlüssel, um die Kompatibilitäts- und Spezifikationsabschnitte zu füllen (Ersetzen der `\{{Compat}}` und `\{{Specifications}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die API-Methode in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag für die API muss Spezifikationsinformationen enthalten.
>     Siehe unseren [Leitfaden zur Erstellung solcher Einträge](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makroaufrufen erscheint am Anfang des Inhaltsabschnitts (unmittelbar unter den Seiteneigenschaften).
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es muss nichts hinzugefügt/entfernt werden):
>
> - `\{{SeeCompatTable}}` — dieses generiert ein **Dies ist eine experimentelle Technologie** Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie in Firefox hinter einer Einstellung versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — dieses generiert ein **Veraltet** Banner, das anzeigt, dass die Nutzung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — dieses generiert ein **Nicht-standard** Banner, das anzeigt, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den unten stehenden Empfehlungen aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — dieses generiert ein **Sicherer Kontext** Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Ist dies nicht der Fall, können Sie den Makroaufruf entfernen.
>   Ist dies der Fall, sollten Sie auch einen Eintrag dafür auf der Seite [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{AvailableInWorkers}}` — dieses generiert eine **Verfügbar in Arbeitern** Notiz, die anzeigt, dass die Technologie im [Arbeiterkontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn es nur im Fensterkontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Wenn es auch oder nur im Arbeiterkontext verfügbar ist, müssen Sie möglicherweise einen Parameter wegen seiner Verfügbarkeit übergeben (siehe [\\{{AvailableInWorkers}} Makros Quellcode](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte), möglicherweise müssen Sie auch einen Eintrag dafür auf der [Web-APIs in Arbeitern verfügbar](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers) Seite ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — dieses generiert die Referenzseitenleiste auf der linken Seite mit schnellen Referenzlinks, die mit der aktuellen Seite zusammenhängen.
>   Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) dieselbe Seitenleiste, die auf die anderen Seiten in der API zeigt.
>   Um die richtige Seitenleiste für Ihre API zu generieren, müssen Sie einen `GroupData` Eintrag in unserem GitHub-Repo hinzufügen und den Namen des Eintrags im Makroaufruf anstelle von _GroupDataName_ einfügen.
>   Siehe unseren [Leitfaden zu API-Referenzseitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) für Informationen, wie dies zu tun ist.
>
> Geben Sie keine Statusheader-Makros manuell an. Beziehen Sie sich auf den Abschnitt ["Wie Funktionsstatus hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die **Sicherer Kontext**, **Verfügbar in Arbeitern**, **Experimentell**, **Veraltet** und **Nicht-standard** Banner werden direkt nach diesem Notizblock gezeigt.
>
> _Denken Sie daran, diese gesamte erläuternde Notiz vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz – beginnen Sie damit, die Methode zu benennen, zu welcher Schnittstelle sie gehört und was sie tut.
Dies sollte idealerweise ein oder zwei kurze Sätze umfassen. Sie können den größten Teil hiervon von der Zusammenfassung der Methode auf der entsprechenden API-Referenzseite kopieren.

## Syntax

Füllen Sie ein Syntaxfeld aus, gemäß der Anleitung in unserem [Syntaxabschnitten](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections) Artikel.

### Parameter

- `parameter1` {{Optional_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung des Parameters und dessen Funktion ein. Fügen Sie für jeden Parameter einen Begriff und eine Definition ein. Wenn der Parameter nicht optional ist, entfernen Sie den \\{{optional_inline}} Makroaufruf.
- `parameter2`
  - : usw.

> [!NOTE]
> Dieser Abschnitt ist obligatorisch. Wenn es keine Parameter gibt, schreiben Sie stattdessen `None.` anstelle der Definitionsliste.

### Rückgabewert

Fügen Sie eine Beschreibung des Rückgabewerts der Methode, einschließlich des Datentyps und seiner Darstellung ein.

Wenn die Methode nichts zurückgibt, schreiben Sie einfach "None ({{jsxref('undefined')}}).".

### Ausnahmen

Fügen Sie eine Liste aller Ausnahmen ein, die die Methode auslösen kann. Fügen Sie für jede Ausnahme einen Begriff und eine Definition ein.

- `Exception1`
  - : Fügen Sie Beschreibungen ein, wie die Ausnahme ausgelöst wird.
- `Exception2`
  - : Fügen Sie Beschreibungen ein, wie die Ausnahme ausgelöst wird.

Beachten Sie, dass wir zwei Arten von Ausnahmen haben: [`DOMException`](/de/docs/Web/API/DOMException) Objekte und reguläre JavaScript-Ausnahmen, wie {{jsxref("TypeError")}} und {{jsxref("RangeError")}}. Ein Webentwickler muss wissen:

- welches Objekt geworfen wird
- bei Ausnahmen, die `DOMException` Objekte sind, den `name` der Ausnahme.

Hier ist ein Beispiel, bei dem eine Methode eine `DOMException` mit einem Namen von `IndexSizeError`, eine zweite `DOMException` mit einem Namen von `InvalidNodeTypeError` und eine JavaScript-Ausnahme des Typs `TypeError` auslösen kann:

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst...
- `InvalidNodeTypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst...
- {{jsxref("TypeError")}}
  - : Ausgelöst...

## Beschreibung

_Detaillierte Beschreibung, wie sich die Methode verhält_
_Abschnitt weggelassen, wenn ein einleitender Absatz (oder zwei) am Anfang der Seite ausreicht._

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel macht. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben werden.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwenden der Fetch-API
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
> Für Beispiele zu dieser API siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden ein, die sich auf die aktuelle API beziehen. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (Jahr)
