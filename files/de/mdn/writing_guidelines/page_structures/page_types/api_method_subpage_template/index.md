---
title: API-Methoden-Unterseite Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{MDNSidebar}}

> **Note:** _Entfernen Sie diese gesamte erläuternde Anmerkung vor der Veröffentlichung._
>
> ---
>
> **Seiten-Frontmatter:**
>
> Der Frontmatter am Anfang der Seite wird verwendet, um "Seitenmetadaten" zu definieren.
> Die Werte sollten entsprechend für die jeweilige Methode aktualisiert werden.
>
> ```md
> ---
> title: NameOfTheParentInterface.NameOfTheMethod()
> slug: Web/API/NameOfTheParentInterface/NameOfTheMethod
> page-type: web-api-instance-method OR web-api-static-method
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: path.to.feature.NameOfTheMethod
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird.
>     Format wie `"NameOfTheParentInterface: NameOfTheMethod() method"`.
>     Zum Beispiel hat die [count()](/de/docs/Web/API/IDBIndex/count) Methode der [IDBIndex](/de/docs/Web/API/IDBIndex) Schnittstelle einen _Titel_ von `IDBIndex: count() method`.
> - **slug**
>
>   - : Der Endabschnitt des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird formatiert wie `Web/API/NameOfTheParentInterface/NameOfTheMethod`.
>
>     Wenn die Methode statisch ist, muss der Slug ein `_static` Suffix haben, wie: `Web/API/NameOfTheParentInterface/NameOfTheMethod_static`. Dies ermöglicht uns, Instanz- und statische Methoden mit demselben Namen zu unterstützen.
>
>     Beachten Sie, dass der Name der Methode im Slug die Klammern weglässt (er endet in `NameOfTheMethod` und nicht `NameOfTheMethod()`).
>
> - **page-type**
>   - : Der `page-type` Schlüssel für Web/API-Methoden ist entweder `web-api-instance-method` (für Instanzmethoden) oder `web-api-static-method` (für statische Methoden).
> - **status**
>   - : Flags, die den Status dieser Funktion beschreiben. Ein Array, das eines oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe ["Anleitung zum Hinzufügen oder Aktualisieren von Funktionsstatus"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheMethod` mit der Abfragezeichenfolge für die Methode im [Browser-Kompatibilitätsdaten-Repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte auszufüllen (Ersetzung der `\{{Compat}}` und `\{{Specifications}}` Macros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die API-Methode in unserem [Browser-Kompatibilitätsdaten-Repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag für die API muss Spezifikationsinformationen enthalten.
>     Siehe unser [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Macros am Anfang der Seite**
>
> Eine Anzahl von Macroaufrufen erscheint am Anfang des Inhaltsabschnitts (unmittelbar unter dem Seiten-Frontmatter).
> Diese Macros werden automatisch von der Toolchain hinzugefügt (es gibt keine Notwendigkeit, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — erzeugt ein **Dies ist eine experimentelle Technologie** Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie hinter einem Präferenzschalter in Firefox verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — erzeugt ein **Veraltet** Banner, das darauf hinweist, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — erzeugt ein **Nicht-standardisiert** Banner, das darauf hinweist, dass die Funktion Teil keiner Spezifikation ist.
>
> Sie sollten die folgenden Macros gemäß der unten stehenden Anleitung aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — erzeugt ein **Sicherer Kontext** Banner, das darauf hinweist, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn dies nicht der Fall ist, können Sie den Macroaufruf entfernen.
>   Wenn es der Fall ist, sollten Sie auch einen Eintrag dafür auf der Seite [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — erzeugt die Referenz-Sidebar auf der linken Seite, die Schnelllinks zur aktuellen Seite bietet.
>   Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) dieselbe Sidebar, die auf die anderen Seiten in der API verweist.
>   Um die korrekte Sidebar für Ihre API zu erzeugen, müssen Sie einen `GroupData` Eintrag in unserem GitHub-Repo hinzufügen und den Namen des Eintrags in den Macroaufruf anstelle von _GroupDataName_ einfügen.
>   Siehe unser [Leitfaden zu API-Referenz-Sidebars](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) Führer für Informationen, wie dies zu tun ist. Denken Sie daran, das `\{{MDNSidebar}}` Macro zu entfernen, wenn Sie diese Seite kopieren.
>
> Status-Header-Macros manuell bereitzustellen, ist nicht notwendig. Beachten Sie den Abschnitt ["Wie man Funktionsstatistiken hinzufügt oder aktualisiert"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Statistiken auf der Seite hinzuzufügen.
>
> Beispiele der **Secure context**, **Experimental**, **Deprecated**, und **Non-standard** Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> _Denken Sie daran, diese gesamte erläuternde Anmerkung vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz — beginnen Sie mit der Benennung der Methode, geben Sie an, zu welcher Schnittstelle sie gehört, und was sie macht.
Dies sollte idealerweise ein oder zwei kurze Sätze sein. Sie könnten den größten Teil davon aus der Zusammenfassung der Methode auf der entsprechenden API-Referenzseite kopieren.

## Syntax

Füllen Sie einen Syntaxkasten gemäß den Anweisungen in unserem Artikel über [Syntaxabschnitte](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections) aus.

### Parameter

- `parameter1` {{Optional_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung des Parameters und seiner Funktion hinzu. Fügen Sie einen Begriff und eine Definition für jeden Parameter hinzu. Wenn der Parameter nicht optional ist, entfernen Sie den \\{{optional_inline}} Macroaufruf.
- `parameter2`
  - : etc.

> [!NOTE]
> Dieser Abschnitt ist obligatorisch. Wenn keine Parameter vorhanden sind, setzen Sie `None.` anstelle der Definitionsliste.

### Rückgabewert

Fügen Sie eine Beschreibung des Rückgabewerts der Methode hinzu, einschließlich Datentyp und was er repräsentiert.

Wenn die Methode nichts zurückgibt, setzen Sie einfach "None ({{jsxref('undefined')}}).".

### Ausnahmen

Fügen Sie eine Liste aller Ausnahmen hinzu, die die Methode auslösen kann. Fügen Sie einen Begriff und eine Definition für jede Ausnahme hinzu.

- `Exception1`
  - : Fügen Sie Beschreibungen hinzu, wie die Ausnahme ausgelöst wird.
- `Exception2`
  - : Fügen Sie Beschreibungen hinzu, wie die Ausnahme ausgelöst wird.

Beachten Sie, dass wir zwei Arten von Ausnahmen haben: [`DOMException`](/de/docs/Web/API/DOMException) Objekte und reguläre JavaScript-Ausnahmen, wie {{jsxref("TypeError")}} und {{jsxref("RangeError")}}. Ein Webentwickler muss wissen:

- welches Objekt geworfen wird
- für Ausnahmen, die `DOMException` Objekte sind, den `name` der Ausnahme.

Hier ist ein Beispiel, bei dem eine Methode eine `DOMException` mit einem Namen von `IndexSizeError`, eine zweite `DOMException` mit einem Namen von `InvalidNodeTypeError` und eine JavaScript-Ausnahme vom Typ `TypeError` auslösen kann:

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst …
- `InvalidNodeTypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst …
- {{jsxref("TypeError")}}
  - : Ausgelöst …

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel macht. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden für das Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben werden.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der fetch API
>
> Beispiel für Fetch
>
> ### Weitere Beispiele
>
> Links zu weiteren Beispielen auf anderen Seiten
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite und keine auf dieser Seite haben:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie einfach die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele dieser API, siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Macro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Macro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfaden hinzu, die mit dem aktuellen API in Zusammenhang stehen. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- externer_link (Jahr)
