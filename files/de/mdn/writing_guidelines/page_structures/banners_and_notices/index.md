---
title: Banner und Hinweise
slug: MDN/Writing_guidelines/Page_structures/Banners_and_notices
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Banner und Hinweise werden auf einigen Seiten angezeigt, insbesondere in API-Referenzen, um wichtige Faktoren hervorzuheben, die die Nutzung des beschriebenen Inhalts beeinflussen. Zum Beispiel werden Banner verwendet, um hervorzuheben, wenn ein bestimmtes Interface, eine Methode oder eine Eigenschaft veraltet ist und nicht in Produktionscode verwendet werden sollte, oder nur in einem sicheren Kontext verwendet werden kann.

Banner werden im Seiteninhalt mittels Makros dargestellt. Einige Banner-Makros werden automatisch der Seite hinzugefügt, während andere manuell hinzugefügt werden.

Dieser Artikel beschreibt die wichtigsten Banner und wie sie hinzugefügt werden.

## Wo werden Banner-Makros hinzugefügt

Banner werden mithilfe von Makros hinzugefügt, die üblicherweise unterhalb der Seiten-Metadaten, neben dem Seiten-Sidebar-Makro eingefügt werden. Im folgenden Block wurde zum Beispiel das `\{{SecureContext_Header}}`-Makro verwendet, um anzuzeigen, dass das [`AudioDecoder`](/de/docs/Web/API/AudioDecoder)-Interface nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ist. Das `\{{AvailableInWorkers}}`-Makro wurde verwendet, um anzuzeigen, dass das [`AudioDecoder`](/de/docs/Web/API/AudioDecoder)-Interface nur im [Window-Kontext](/de/docs/Web/API/Window) und im [dedizierten Worker-Kontext](/de/docs/Web/API/DedicatedWorkerGlobalScope) verfügbar ist. `\{{SeeCompatTable}}` wurde hinzugefügt, um darauf hinzuweisen, dass das Interface experimentell ist.

```md
---
title: AudioDecoder
slug: Web/API/AudioDecoder
page-type: web-api-interface
status:
  - experimental
browser-compat: api.AudioDecoder
---

\{{APIRef("WebCodecs API")}} \{{SeeCompatTable}} \{{SecureContext_Header}} \{{AvailableInWorkers("window_and_dedicated")}}
```

## Banner, die manuell hinzugefügt werden müssen

Sie müssen die folgenden Makros manuell hinzufügen:

- `\{{SecureContext_Header}}` — dies erzeugt ein **Sicherer Kontext**-Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ist.
- `\{{AvailableInWorkers}}` — dies erzeugt eine **Verfügbar in Workers**-Notiz, die anzeigt, dass die Technologie im [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.

## Banner, die automatisch hinzugefügt werden

Die folgenden Makros werden automatisch zum Inhalt hinzugefügt, um den in dem [browser-compat-data](https://github.com/mdn/browser-compat-data)-Repository gespeicherten Status zu entsprechen:

- `\{{SeeCompatTable}}` — erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
- `\{{Deprecated_Header}}` — erzeugt ein **Veraltet**-Banner, das anzeigt, dass die Nutzung der Technologie [abzuraten ist](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
- `\{{Non-standard_Header}}` — erzeugt ein **Nicht-Standard**-Banner, das anzeigt, dass die Nutzung der Technologie nicht Teil einer formalen Spezifikation ist, selbst wenn sie in mehreren Browsern implementiert ist.

[Aktualisieren Sie den Feature-Status im browser-compat-data-Repository](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Werte zu ändern.

> [!NOTE]
> Während Sie diese Makros manuell im Inhalt hinzufügen/aktualisieren können, werden Werte, die nicht mit den Browser-Kompatibilitätsdaten übereinstimmen, ersetzt/entfernt.

> [!NOTE]
> Seiten, die die `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}` oder `\{{Non-standard_Header}}` Banner haben, werden auch die entsprechenden `experimental`, `deprecated` und `non-standard` Statuswerte in den Seiten-Metadaten haben.
> Die Metadaten werden automatisch gleichzeitig mit den Headern aktualisiert.
> Die Banner-Makros hängen nicht von diesen Status-Metadaten ab (könnten aber eines Tages davon generiert werden).

## Experimentell: "Standards positions" Banner

Gelegentlich sind sich Browseranbieter uneinig darüber, wie sich ein Feature entwickelt, und manche lehnen es in seiner aktuellen Form ab. In Ausnahmefällen dokumentiert MDN Technologien in diesem Zustand, um die Web-Community zu ermutigen, mit ihnen zu experimentieren, Feedback zu geben und den Browseranbietern zu helfen, einen Konsens zu erreichen.

Es ist wichtig, den Lesern den aktuellen Standardisierungsstatus solcher Features zu verdeutlichen. Während eine längerfristige Lösung zur Darstellung dieser Informationen noch nicht final ist, tun wir Folgendes für spezifische prominente Technologien, um Verwirrung zu vermeiden:

- Hinzufügen dieses Banners zur Hauptseite dieser Funktion (nicht für jede Unterseite der Funktion):

  ```md
  > [!WARNING]
  > This feature is currently opposed by <number> browser vendor(s). See the [Standards positions](#standards_positions) section below for details of opposition.
  ```

  - Ersetzen Sie `<number>` durch die Anzahl der Browseranbieter, die sich gegen das Feature aussprechen.
  - Verwenden Sie `vendor` oder `vendors`, wie passend.

- Hinzufügen eines "Standards positions"-Abschnitts auf derselben Seite wie das oben genannte Banner, als Unterabschnitt des standardmäßigen "Specifications"-Abschnitts.

> [!NOTE]
> Sehen Sie sich [Related Website Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) für ein Beispiel des "Standards positions"-Abschnitts und dessen Inhalt sowie das Banner auf der Hauptseite an.
