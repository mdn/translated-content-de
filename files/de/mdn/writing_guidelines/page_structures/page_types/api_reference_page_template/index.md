---
title: API-Referenzseitentemplate
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{MDNSidebar}}

> **Note:** _Entfernen Sie diese gesamte erläuternde Anmerkung vor der Veröffentlichung._
>
> ---
>
> **Page front matter:**
>
> Die Frontmatter am Anfang der Seite wird verwendet, um "Seiten-Metadaten" zu definieren. Die Werte sollten entsprechend auf die jeweilige Eigenschaft aktualisiert werden.
>
> ```md
> ---
> title: NameOfTheInterface
> slug: Web/API/NameOfTheInterface
> page-type: web-api-interface
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: path.to.feature.NameOfTheInterface
> ---
> ```
>
> - **title**
>   - : Der im Titelbereich der Seite angezeigte Titel. Dies ist nur der Name der Schnittstelle. Zum Beispiel hat die [Request](/de/docs/Web/API/Request) Schnittstellenseite einen _title_ von _Request_.
> - **slug**
>   - : Das Ende des URL-Pfades nach `https://developer.mozilla.org/de/docs/`). Dies wird formatiert wie `Web/API/NameOfTheParentInterface`. Zum Beispiel ist der [Request](/de/docs/Web/API/Request) slug "Web/API/Request".
> - **page-type**
>   - : Der `page-type` Schlüssel für Web/API Schnittstellen ist immer `web-api-interface`.
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das eine oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Feature-Status hinzufügen oder aktualisieren"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheMethod` mit der Abfragezeichenfolge für die Methode im [Browser compat data repo](https://github.com/mdn/browser-compat-data). Die Toolchain verwendet den Schlüssel, um automatisch die Kompatibilitäts- und Spezifikationsabschnitte auszufüllen (ersetzt die `\{{Compat}}` und `\{{Specifications}}` Makros).
>
> Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die API-Methode in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen und der Eintrag für die API Spezifikationsinformationen enthalten muss.
>
> Siehe unseren [Leitfaden, wie man dies macht](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Anfang der Seite**
>
> Standardmäßig gibt es fünf Makroaufrufe am Anfang eines Templates. Sie sollten diese gemäß den untenstehenden Ratschlägen aktualisieren oder löschen.
>
> - `\{{APIRef("<em>GroupDataName</em>")}}` — dies generiert die seitliche Referenzleiste, die schnelle Referenzlinks zeigt, die mit der aktuellen Seite verwandt sind. Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) dieselbe Seitenleiste, die auf die anderen Seiten der API verweist. Um die korrekte Seitenleiste für Ihre API zu generieren, müssen Sie einen GroupData-Eintrag in unserem KumaScript GitHub Repo hinzufügen und den Namen des Eintrags im Makroaufruf anstelle von _GroupDataName_ einfügen. Siehe unseren [API-Referenzseitenleisten-](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) Leitfaden für Informationen, wie dies zu tun ist.
> - `\{{SeeCompatTable}}` — dies generiert ein **Dies ist eine experimentelle Technologie** Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist. Wenn es experimentell ist und die Technologie hinter einer Voreinstellung in Firefox verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimental features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — dies generiert ein **Veraltet** Banner, das anzeigt, dass die Technologie [veraltet](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — dies generiert ein **Non-standard** Banner, das anzeigt, dass das Feature nicht Teil einer Spezifikation ist.
> - `\{{SecureContext_Header}}` — dies generiert ein **Sicherer Kontexts** Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist. Wenn dem nicht so ist, können Sie den Makroaufruf entfernen. Wenn es so ist, sollten Sie auch einen Eintrag auf der Seite [Features restricted to secure contexts](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{Interface_Overview("<em>GroupDataName</em>")}} {{Experimental_Inline}}` — dies generiert den Hauptteil der Seite (Konstruktor, Eigenschaften, Methoden und Ereignisse).
>
> Bieten Sie Statusheader-Makros nicht manuell an. Beziehen Sie sich auf den Abschnitt ["Feature-Status hinzufügen oder aktualisieren"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Statuse zur Seite hinzuzufügen.
>
> Beispiele für die **Sicherer Kontext**, **Experimentell**, **Veraltet** und **Non-standard** Banner sind direkt nach diesem Hinweisblock gezeigt.
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Der Zusammenfassungsabsatz — beginnen Sie mit der Benennung der Schnittstelle, sagen Sie, zu welcher API sie gehört, und was sie tut. Dies sollte idealerweise ein oder zwei kurze Sätze umfassen. Sie könnten den Großteil davon aus der Zusammenfassung der Schnittstelle auf der entsprechenden API-Landingpage kopieren.

{{InheritanceDiagram}}

_Um das [domxref-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) in den folgenden Abschnitten zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Konstruktor

- `\{{DOMxRef("NameOfTheInterface.NameOfTheInterface", "NameOfTheInterface()")}}`
  - : Erstellt eine neue Instanz des Objekts `NameOfTheInterface`.

## Statische Eigenschaften

_Erbt auch Eigenschaften von seiner übergeordneten Schnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese ganze Zeile.)

Fügen Sie einen Begriff und eine Definition für jede Eigenschaft ein.

- `\{{DOMxRef("NameOfTheInterface.staticProperty1")}}` {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Geben Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktion an. Wenn die Eigenschaft nicht schreibgeschützt/experimentell/veraltet ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.staticProperty2")}}`
  - : Geben Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktion an. Wenn die Eigenschaft nicht schreibgeschützt/experimentell/veraltet ist, entfernen Sie die zugehörigen Makroaufrufe.

## Instanz Eigenschaften

_Erbt auch Eigenschaften von seiner übergeordneten Schnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese ganze Zeile.)

Fügen Sie einen Begriff und eine Definition für jede Eigenschaft ein.

- `\{{DOMxRef("NameOfTheInterface.property1")}}` {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Geben Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktion an. Wenn die Eigenschaft nicht schreibgeschützt/experimentell/veraltet ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.property2")}}`
  - : Geben Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktion an. Wenn die Eigenschaft nicht schreibgeschützt/experimentell/veraltet ist, entfernen Sie die zugehörigen Makroaufrufe.

## Statische Methoden

_Erbt auch Methoden von seiner übergeordneten Schnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese ganze Zeile.)

Fügen Sie einen Begriff und eine Definition für jede Methode ein.

- `\{{DOMxRef("NameOfTheInterface.staticMethod1()")}}` {{Experimental_Inline}} {{Deprecated_Inline}}
  - : Geben Sie hier eine kurze Beschreibung der Methode und ihrer Funktion an. Wenn die Methode nicht experimentell/veraltet ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.staticMethod2()")}}`
  - : Geben Sie hier eine kurze Beschreibung der Methode und ihrer Funktion an. Wenn die Methode nicht experimentell/veraltet ist, entfernen Sie die zugehörigen Makroaufrufe.

## Instanz Methoden

_Erbt auch Methoden von seiner übergeordneten Schnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese ganze Zeile.)

Fügen Sie einen Begriff und eine Definition für jede Methode ein.

- `\{{DOMxRef("NameOfTheInterface.method1()")}}` {{Experimental_Inline}} {{Deprecated_Inline}}
  - : Geben Sie hier eine kurze Beschreibung der Methode und ihrer Funktion an. Wenn die Methode nicht experimentell/veraltet ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.method2()")}}`
  - : Geben Sie hier eine kurze Beschreibung der Methode und ihrer Funktion an. Wenn die Methode nicht experimentell/veraltet ist, entfernen Sie die zugehörigen Makroaufrufe.

## Ereignisse

_Erbt auch Ereignisse von seiner übergeordneten Schnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese ganze Zeile.)

Diese Ereignisse können mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) angehört werden oder durch Zuordnung eines Event-Listeners zur `oneventname` Eigenschaft dieser Schnittstelle.

- [`eventname1`](#)
  - : Ausgelöst, wenn (fügen Sie die Beschreibung ein, wann das Ereignis ausgelöst wird).
    Auch über die `oneventname1` Eigenschaft verfügbar.
- [`eventname2`](#)
  - : Ausgelöst, wenn _(fügen Sie eine Beschreibung ein, wann das Ereignis ausgelöst wird)_.
    Auch über die `oneventname2` Eigenschaft verfügbar.

## Beispiele

Beachten Sie, dass wir die Mehrzahl "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel macht. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Code-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügt, für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Mehr Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der Fetch API
>
> Beispiel des Abrufs
>
> ### Mehr Beispiele
>
> Links zu weiteren Beispielen auf anderen Seiten
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite und keine auf dieser Seite haben:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie nur die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele dieser API siehe [die Seite zum Abrufen()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Schließen Sie Links zu Referenzseiten und Leitfäden ein, die sich auf die aktuelle API beziehen. Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil Leitfaden_.

- link1
- link2
- external_link (Jahr)
