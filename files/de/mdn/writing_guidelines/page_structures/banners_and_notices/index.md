---
title: Banner und Hinweise
slug: MDN/Writing_guidelines/Page_structures/Banners_and_notices
l10n:
  sourceCommit: 1717097c927b0399fd143a6ab22631245e9da1cd
---

Banner und Hinweise werden auf einigen Seiten angezeigt, insbesondere in API-Referenzen, um wichtige Faktoren hervorzuheben, die beeinflussen, wie der beschriebene Inhalt verwendet wird.
Zum Beispiel werden Banner verwendet, um hervorzuheben, wenn eine bestimmte Schnittstelle, Methode oder Eigenschaft veraltet ist und nicht im Produktivcode verwendet werden sollte, oder nur in einem sicheren Kontext verwendet werden kann.

Banner werden mithilfe von Makros im Seiteninhalt gerendert.
Einige Banner-Makros werden automatisch zur Seite hinzugefügt, während andere manuell hinzugefügt werden.

Dieser Artikel beschreibt die wichtigeren Banner und wie sie hinzugefügt werden.

## Wo Banner-Makros hinzugefügt werden

Banner werden mit Makros hinzugefügt, die normalerweise unterhalb der Seitenmetadaten eingefügt werden, zusammen mit dem Seiten-Sidebar-Makro. Zum Beispiel wurde im unten stehenden Block das `\{{SecureContext_Header}}` Makro verwendet, um anzuzeigen, dass die [`AudioDecoder`](/de/docs/Web/API/AudioDecoder) Schnittstelle nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist, das `\{{AvailableInWorkers}}` Makro wurde verwendet, um anzuzeigen, dass die [`AudioDecoder`](/de/docs/Web/API/AudioDecoder) Schnittstelle nur im [Fensterkontext](/de/docs/Web/API/Window) und im [dedizierten Arbeiterkontext](/de/docs/Web/API/DedicatedWorkerGlobalScope) verfügbar ist, und `\{{SeeCompatTable}}` wurde hinzugefügt, um anzuzeigen, dass die Schnittstelle experimentell ist.

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

- `\{{SecureContext_Header}}` — erstellt ein **Sicherer Kontext** Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
- `\{{AvailableInWorkers}}` — erstellt einen **Verfügbar in Arbeitern** Hinweis, der anzeigt, dass die Technologie im [Arbeiterkontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.

## Banner, die automatisch hinzugefügt werden

Die folgenden Makros werden automatisch zum Inhalt hinzugefügt, um den in dem [browser compat data](https://github.com/mdn/browser-compat-data) Repository gespeicherten Statuswerten zu entsprechen:

- `\{{SeeCompatTable}}` — erstellt ein **Dies ist eine experimentelle Technologie** Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
- `\{{Deprecated_Header}}` — erstellt ein **Veraltet** Banner, das anzeigt, dass die Nutzung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
- `\{{Non-standard_Header}}` — erstellt ein **Nicht-Standard** Banner, das anzeigt, dass die Nutzung der Technologie nicht Teil einer formellen Spezifikation ist, selbst wenn sie in mehreren Browsern implementiert ist.

[Aktualisieren Sie den Feature-Status im browser-compat-data Repository](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Werte zu ändern.

> [!NOTE]
> Auch wenn Sie diese Makros manuell/aktualisieren können, werden Werte, die nicht mit den Browser-Kompatibilitätsdaten übereinstimmen, ersetzt/entfernt.

> [!NOTE]
> Seiten, die die `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}` oder `\{{Non-standard_Header}}` Banner haben, werden auch die entsprechenden `experimentell`, `veraltet` und `nicht-standard` Statuswerte in den Seitenmetadaten haben.
> Die Metadaten werden gleichzeitig mit den Überschriften automatisch aktualisiert.
> Die Banner-Makros hängen nicht von diesen Status-Metadaten ab (könnten aber eines Tages daraus generiert werden).

## Experimentell: "Stellungnahmen zu Standards" Banner

Gelegentlich haben Browserhersteller unterschiedliche Meinungen darüber, wie sich ein Feature entwickelt, und einige können das Feature in seiner aktuellen Form ablehnen. In Ausnahmefällen dokumentiert MDN Technologien in diesem Zustand, um die Web-Community zu ermutigen, mit ihnen zu experimentieren, Feedback zu geben und den Herstellern zu helfen, einen Konsens zu erreichen.

Es ist wichtig, den Lesern den aktuellen Standardisierungsstatus solcher Features zu verdeutlichen. Während eine langfristige Lösung zur Darstellung dieser Informationen noch nicht endgültig ist, tun wir Folgendes für spezifische hochkarätige Technologien, um Verwirrungen zu vermeiden:

- Das Hinzufügen dieses Banners zur Landingpage für dieses Feature (nicht auf jeder Unterseite des Features):

  ```md
  > [!WARNING]
  > This feature is currently opposed by <number> browser vendor(s). See the [Standards positions](#standards_positions) section below for details of opposition.
  ```

  - Ersetzen Sie `<number>` durch die Anzahl der Browserhersteller, die sich gegen das Feature aussprechen.
  - Verwenden Sie `vendor` oder `vendors` je nach Fall.

- Hinzufügen eines Abschnitts "Stellungnahmen zu Standards" auf derselben Seite wie das obige Banner, als Unterabschnitt des Standardabschnitts "Spezifikationen".

> [!NOTE]
> Siehe [Verwandte Website-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) für ein Beispiel des "Stellungnahmen zu Standards" Abschnitts und was dieser enthalten sollte sowie das Banner auf der Landingpage.
