---
title: API-Ereignis-Unterseitentemplate
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template
l10n:
  sourceCommit: 359403526b7b802cdb09b90acf28577b959076d0
---

> **Note:** _Entfernen Sie diese gesamte erläuternde Anmerkung vor der Veröffentlichung._
>
> ---
>
> **Seiten-Metadaten:**
>
> Die Angaben am Anfang der Seite werden verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend für das jeweilige Ereignis aktualisiert werden.
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
>   - : Der `page-type`-Schlüssel für Web/API-Ereignisse ist immer `web-api-event`.
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das eine oder mehrere der folgenden Angaben enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe [Wie Feature-Status hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheEvent_event` mit dem Abfragezeichenfolgen für das Ereignis im [Browser-Kompatibilitätsdaten-Repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch zur Befüllung der Kompatibilitäts- und Spezifikationsabschnitte (Ersetzung der `\{{Compat}}` und `\{{Specifications}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für das Ereignis in unserem [Browser-Kompatibilitätsdaten-Repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und dieser Eintrag muss Spezifikationsinformationen enthalten.
>     Sehen Sie sich unseren [Leitfaden dazu an, wie das geht](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makroaufrufen erscheint am Anfang des Inhaltsbereichs (direkt unter den Seiten-Metadaten).
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht nötig, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — dies generiert ein **Dies ist eine experimentelle Technologie**-Banner, welches anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und die Technologie hinter einem Pref in Firefox versteckt ist, sollten Sie auch einen Eintrag für sie auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — dies generiert ein **Veraltet**-Banner, das anzeigt, dass die Nutzung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — dies generiert ein **Nicht-Standard**-Banner, das anzeigt, dass die Funktionalität nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros entsprechend den untenstehenden Ratschlägen aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — dies generiert ein **Secure context**-Banner, welches anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn es nicht der Fall ist, können Sie den Makroaufruf entfernen.
>   Wenn es der Fall ist, sollten Sie auch einen Eintrag für sie auf der Seite [Features, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) einfügen.
> - `\{{AvailableInWorkers}}` — dies generiert einen **Verfügbar in Arbeitern**-Hinweis, der anzeigt, dass die Technologie im [Arbeiterkontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn sie nur im Fensterkontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Wenn sie auch im Arbeiterkontext oder nur dort verfügbar ist, müssen Sie möglicherweise einen Parameter übergeben, der ihre Verfügbarkeit angibt (sehen Sie sich den [\\{{AvailableInWorkers}}-Makro-Quellcode](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte an), und Sie müssen möglicherweise einen Eintrag auf der Seite [Web-APIs, die in Arbeitern verfügbar sind](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#supported_web_apis) einfügen.
> - `\{{APIRef("GroupDataName")}}` — dies generiert die linksseitige Referenz-Sidebar, die schnelle Referenzlinks zeigt, die in Beziehung zur aktuellen Seite stehen.
>   Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) dieselbe Sidebar, die auf die anderen Seiten in der API zeigt.
>   Um die korrekte Sidebar für Ihre API zu generieren, müssen Sie einen `GroupData`-Eintrag in unserem GitHub-Repo hinzufügen und den Namen des Eintrags im Makroaufruf anstelle von _GroupDataName_ verwenden.
>   Sehen Sie sich unseren [Leitfaden zu API-Referenz-Sidebars](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) für Informationen an, wie man dies tut.
> - Denken Sie daran, das `\{{MDNSidebar}}`-Makro zu entfernen, wenn Sie diese Seite kopieren.
>
> Fügen Sie Status-Header-Makros nicht manuell hinzu. Beziehen Sie sich auf den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die **Secure context**-, **Verfügbar in Arbeitern**-, **Experimentell**-, **Veraltet**- und **Nicht-Standard**-Banner werden direkt nach diesem Notizblock angezeigt.
>
> ---
>
> **Elternobjekt-Link**
>
> Fügen Sie einen Link zu dieser neuen Seite in den _Events_-Abschnitt des Elternobjekts ein.
> Zum Beispiel ist [Element: wheel event](/de/docs/Web/API/Element/wheel_event) von den [`Element` Events](/de/docs/Web/API/Element#events) verlinkt.
>
> Wenn das Elternobjekt keinen _Events_-Abschnitt hat, fügen Sie einen hinzu.
> Wenn es sich um eine neue "Klasse" von Ereignissen handelt, sollten Sie einen Link zu diesem Abschnitt des Elternobjekts aus der [Ereignisreferenz](/de/docs/Web/Events) hinzufügen.
>
> _Denken Sie daran, diese gesamte erläuternde Anmerkung vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt der Seite mit einem einleitenden Absatz — fangen Sie an mit der Nennung des Ereignisses, sagen Sie, zu welcher Schnittstelle es gehört und was es tut.
Dies sollte idealerweise ein oder zwei kurze Sätze sein.
Sie könnten den größten Teil dieses aus der Zusammenfassung des Attributs auf der entsprechenden API-Referenzseite kopieren.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("NameOfTheEvent", (event) => {});

onNameOfTheEvent = (event) => {};
```

## Ereignistyp

Wenn das Ereignis einen speziellen Typ hat, nennen Sie ihn zusammen mit seiner Vererbung. Wenn nicht, geben Sie an, dass es sich um ein generisches Ereignis handelt:

_Ein generisches [`Event`](/de/docs/Web/API/Event)._

Oder zum Beispiel:

_Ein [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent). Erbt von [`Event`](/de/docs/Web/API/Event)._

{{InheritanceDiagram("XRSessionEvent")}}

## Ereigniseigenschaften

Wenn das Ereignis nicht nur ein generisches [`Event`](/de/docs/Web/API/Event) ist, listen Sie die zusätzlichen Eigenschaften auf, die das Ereignis hat.

_Neben den unten aufgeführten Eigenschaften sind Eigenschaften von der Elternschnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`session`](/de/docs/Web/API/XRSessionEvent/session) {{ReadOnlyInline}}
  - : Die [`XRSession`](/de/docs/Web/API/XRSession), auf die sich das Ereignis bezieht.

## Beschreibung

Wenn Sie zusätzlichen Text bereitstellen möchten (zu lang für die Zusammenfassung), fügen Sie einen Beschreibungsabschnitt hinzu.
Er kann die Überschriften enthalten

### Trigger

und

### Anwendungsfälle

die weitere Informationen bereitstellen können.

## Beispiele

Beachten Sie, dass wir die Mehrzahl "Beispiele" verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreibend sein, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Sehen Sie sich unseren Leitfaden zur Hinzufügung von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen an.

> [!NOTE]
> Manchmal wollen Sie auf Beispiele auf einer anderen Seite verweisen.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite haben und einige weitere Beispiele auf einer anderen Seite:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der fetch API
>
> Beispiel von Fetch
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
> Für Beispiele zu dieser API, siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Rückwärtsschrägstrich in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Rückwärtsschrägstrich in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen API in Verbindung stehen. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (Jahr)
