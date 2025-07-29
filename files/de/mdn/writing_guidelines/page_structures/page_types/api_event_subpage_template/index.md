---
title: API-Ereignisse-Unterseite Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

> [!NOTE]
> _Entfernen Sie diese gesamte erläuternde Anmerkung vor der Veröffentlichung._
>
> ---
>
> **Seiten-Metadaten:**
>
> Die Metadaten oben auf der Seite werden verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend dem jeweiligen Ereignis aktualisiert werden.
>
> ```md
> ---
> title: "NameOfTheParentInterface: NameOfTheEvent event"
> slug: Web/API/NameOfTheParentInterface/NameOfTheEvent_event
> page-type: web-api-event
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: path.to.feature.NameOfTheEvent_event
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird.
>     Formatieren Sie sie als "_NameOfTheParentInterface_**:** _NameOfTheEvent_ **event**".
>     Zum Beispiel hat das [animationcancel](/de/docs/Web/API/Element/animationcancel_event)-Ereignis der [Window](/de/docs/Web/API/Window)-Schnittstelle einen _title_ von `Window: animationcancel event`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird formatiert wie `Web/API/NameOfTheParentInterface/NameOfTheEvent_event`.
> - **page-type**
>   - : Der `page-type` Key für Web/API-Ereignisse ist immer `web-api-event`.
> - **status**
>   - : Flags, die den Status dieser Funktion beschreiben. Ein Array, das einen oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe [Wie Funktionsstatus hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheEvent_event` durch den Abfrage-String für das Ereignis im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte zu füllen (ersetzt die `\{{Compat}}` und `\{{Specifications}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für das Ereignis in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und dieser Eintrag muss Spezifikationsinformationen enthalten.
>     Siehe unseren [Leitfaden zur Erstellung eines solchen Eintrags](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Anfang der Seite**
>
> Einige Makroaufrufe erscheinen am Anfang des Inhaltsabschnitts (unmittelbar unter den Seiten-Metadaten).
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht erforderlich, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — Dies erzeugt ein **Dies ist eine experimentelle Technologie** Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und die Technologie hinter einem pref in Firefox verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — Dies erzeugt ein **Veraltet** Banner, das anzeigt, dass die Verwendung der Technologie [abzuraten](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — Dies erzeugt ein **Nicht standardmäßig** Banner, das anzeigt, dass die Funktion Teil keiner Spezifikation ist.
>
> Sie sollten die folgenden Makros entsprechend den untenstehenden Ratschlägen aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — Dies erzeugt ein **Sicherer Kontext** Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn dies nicht der Fall ist, können Sie den Makroaufruf entfernen.
>   Wenn doch, sollten Sie auch einen Eintrag dafür auf der Seite [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{AvailableInWorkers}}` — Dies erzeugt eine **In Workern verfügbar** Notiz, die anzeigt, dass die Technologie im [Arbeiterkontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn sie nur im Fensterkontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Wenn sie auch im Arbeiterkontext oder nur im Arbeiterkontext verfügbar ist, müssen Sie möglicherweise aufgrund der Verfügbarkeit einen Parameter übergeben (siehe [\\{{AvailableInWorkers}} Makroquellcode](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte), und Sie müssen möglicherweise einen Eintrag dafür auf der Seite [Web-APIs verfügbar in Workern](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers) ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — Dies erzeugt die linke Referenzseitenleiste, die Schnellverweislinks enthält, die sich auf die aktuelle Seite beziehen.
>   Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) dieselbe Seitenleiste, die auf die anderen Seiten in der API hinweist.
>   Um die korrekte Seitenleiste für Ihre API zu erzeugen, müssen Sie einen `GroupData`-Eintrag in unserem GitHub-Repo hinzufügen und den Namen des Eintrags im Makroaufruf anstelle von _GroupDataName_ einfügen.
>   Siehe unseren [Leitfaden zu API-Referenz-Seitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) für Informationen dazu, wie dies zu tun ist.
>
> Fügen Sie keine Status-Header-Makros manuell hinzu. Informieren Sie sich im Abschnitt ["Wie Funktionsstatus hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status der Seite hinzuzufügen.
>
> Beispiele für die **Sicherer Kontext**, **In Arbeitern verfügbar**, **Experimentell**, **Veraltet** und **Nicht standardmäßig** Banner werden direkt nach diesem Anmerkungsblock gezeigt.
>
> ---
>
> **Verweis auf das übergeordnete Objekt**
>
> Fügen Sie einen Link zu dieser neuen Seite im _Ereignisse_-Abschnitt des übergeordneten Objekts hinzu.
> Zum Beispiel ist [Element: wheel-Ereignis](/de/docs/Web/API/Element/wheel_event) aus [`Element` Ereignisse](/de/docs/Web/API/Element#events) verlinkt.
>
> Wenn das übergeordnete Objekt keinen _Ereignisse_-Abschnitt hat, fügen Sie einen hinzu.
> Wenn dies eine neue "Klasse" von Ereignissen ist, sollten Sie einen Link zu diesem Abschnitt von dem übergeordneten Objekt aus dem [DOM-Ereignisse](/de/docs/Web/API/Document_Object_Model/Events#event_index) Leitfaden hinzufügen.
>
> _Denken Sie daran, diese gesamte erläuternde Anmerkung vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz — beginnen Sie mit der Benennung des Ereignisses, geben Sie an, zu welcher Schnittstelle es gehört und was es tut.
Dies sollte idealerweise ein oder zwei kurze Sätze sein.
Sie könnten den größten Teil davon von der Zusammenfassung der Eigenschaft auf der entsprechenden API-Referenzseite kopieren.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("NameOfTheEvent", (event) => { })

onNameOfTheEvent = (event) => { }
```

## Ereignistyp

Wenn das Ereignis einen speziellen Typ hat, erwähnen Sie ihn zusammen mit seiner Vererbung. Wenn nicht, geben Sie an, dass es sich um ein generisches Ereignis handelt:

_Ein generisches [`Event`](/de/docs/Web/API/Event)._

Oder zum Beispiel:

_Ein [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent). Erbt von [`Event`](/de/docs/Web/API/Event)._

{{InheritanceDiagram("XRSessionEvent")}}

## Ereigniseigenschaften

Wenn das Ereignis nicht nur ein generisches [`Event`](/de/docs/Web/API/Event) ist, listen Sie die zusätzlichen Eigenschaften des Ereignisses auf.

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften von der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`session`](/de/docs/Web/API/XRSessionEvent/session) {{ReadOnlyInline}}
  - : Die [`XRSession`](/de/docs/Web/API/XRSession), auf die sich das Ereignis bezieht.

## Beschreibung

Wenn Sie zusätzlichen Text bereitstellen möchten (zu lang für die Zusammenfassung), fügen Sie einen Abschnitt Beschreibung hinzu.
Er kann die Überschriften enthalten

### Auslöser

und

### Anwendungsfälle

welche mehr Informationen bieten können.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreibend sein, was das Beispiel macht. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Codebeispiele hinzufügt](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele, die auf einer anderen Seite gegeben sind, verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Die Fetch-API verwenden
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
> Für Beispiele zu dieser API siehe [die Seite über fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Rückwärtsschrägstrich in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Rückwärtsschrägstrich in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle API beziehen. Für weitere Richtlinien siehe den [Abschnitt "Siehe auch"](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (Jahr)
