---
title: Banner und Hinweise
slug: MDN/Writing_guidelines/Page_structures/Banners_and_notices
l10n:
  sourceCommit: ad385725ed5713e9d384e505424bba227577e62d
---

{{MDNSidebar}}

Banner und Hinweise werden auf einigen Seiten angezeigt, insbesondere in der API-Referenz, um wichtige Faktoren hervorzuheben, die beeinflussen, wie der beschriebene Inhalt verwendet wird. Zum Beispiel werden Banner verwendet, um hervorzuheben, wenn eine bestimmte Schnittstelle, Methode oder Eigenschaft veraltet ist und nicht in Produktionscode verwendet werden sollte oder nur in einem sicheren Kontext genutzt werden kann.

Banner werden mithilfe von Makros im Seiteninhalt gerendert. Einige Banner-Makros werden automatisch zur Seite hinzugefügt, während andere manuell hinzugefügt werden.

Dieser Artikel beschreibt die wichtigeren Banner und wie sie hinzugefügt werden.

## Wo Banner-Makros hinzugefügt werden

Banner werden mithilfe von Makros hinzugefügt, die normalerweise unterhalb der Seitenmetadaten eingefügt werden, neben dem Seitensidebar-Makro. Zum Beispiel wurde im folgenden Block das `\{{SecureContext_Header}}`-Makro verwendet, um anzugeben, dass die [`AudioDecoder`](/de/docs/Web/API/AudioDecoder)-Schnittstelle nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist, das `\{{AvailableInWorkers}}`-Makro wurde verwendet, um anzugeben, dass die [`AudioDecoder`](/de/docs/Web/API/AudioDecoder)-Schnittstelle nur im [Fensterkontext](/de/docs/Web/API/Window) und im [dedizierten Worker-Kontext](/de/docs/Web/API/DedicatedWorkerGlobalScope) verfügbar ist, und `\{{SeeCompatTable}}` wurde hinzugefügt, um anzugeben, dass die Schnittstelle experimentell ist.

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

- `\{{SecureContext_Header}}` — Dies erzeugt ein **Sicherer Kontext**-Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
- `\{{AvailableInWorkers}}` — Dies erzeugt einen **In Arbeitern verfügbar**-Hinweis, der anzeigt, dass die Technologie im [Arbeiterkontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.

## Banner, die automatisch hinzugefügt werden

Die folgenden Makros werden automatisch zum Inhalt hinzugefügt, um die in dem [browser compat data](https://github.com/mdn/browser-compat-data)-Repository gespeicherten Status widerzuspiegeln:

- `\{{SeeCompatTable}}` — Erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
- `\{{Deprecated_Header}}` — Erzeugt ein **Veraltet**-Banner, das anzeigt, dass die Nutzung der Technologie [entmutigt](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
- `\{{Non-standard_Header}}` — Erzeugt ein **Nicht Standard**-Banner, das anzeigt, dass die Nutzung der Technologie nicht Teil einer formalen Spezifikation ist, selbst wenn sie in mehreren Browsern implementiert ist.

[Aktualisieren Sie den Funktionsstatus im browser-compat-data-Repository](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Werte zu ändern.

> [!NOTE]
> Während Sie diese Makros manuell/aktualisieren können, werden Werte, die nicht mit den Daten zur Browser-Kompatibilität übereinstimmen, ersetzt/entfernt.

> [!NOTE]
> Seiten, die die `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}` oder `\{{Non-standard_Header}}`-Banner haben, werden auch die entsprechenden `experimentell`, `veraltet` und `nicht standard` Statuswerte in den Seitenmetadaten haben.
> Die Metadaten werden gleichzeitig mit den Headers automatisch aktualisiert.
> Die Banner-Makros hängen nicht von diesen Statusmetadaten ab (könnten aber eines Tages daraus generiert werden).

## Experimentell: "Standards Positionen"-Banner

Gelegentlich sind sich Browseranbieter uneinig darüber, wie sich ein Feature entwickelt, und einige könnten ihm in seiner aktuellen Form widerstehen. In Ausnahmefällen dokumentiert MDN Technologien in diesem Stadium, um die Web-Community zu ermutigen, sie zu experimentieren, Feedback zu geben und Browseranbieter zu unterstützen, einen Konsens zu erreichen.

Es ist wichtig, den Lesern den aktuellen Standardisierungsstatus solcher Features zu verdeutlichen. Während eine längerfristige Lösung zur Darstellung dieser Informationen noch nicht final ist, machen wir Folgendes für spezifische prominente Technologien, um Verwirrung zu vermeiden:

- Dieses Banner zur Hauptseite für dieses Feature hinzufügen (nicht für jede Unterseite des Features):

  ```md
  > [!WARNING]
  > This feature is currently opposed by <number> browser vendor(s). See the [Standards positions](#standards_positions) section below for details of opposition.
  ```

  - Ersetzen Sie `<number>` durch die Anzahl der Browseranbieter, die dem Feature widersprechen.
  - Verwenden Sie `Hersteller` oder `Hersteller` entsprechend.

- Einen "Standards Positionen"-Abschnitt auf derselben Seite wie das obige Banner hinzufügen, als Unterabschnitt des Standard-"Spezifikationen"-Abschnitts.

> [!NOTE]
> Siehe [Related Website Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) für ein Beispiel des "Standards Positionen"-Abschnitts und was er enthalten sollte, sowie das Banner auf der Hauptseite.
