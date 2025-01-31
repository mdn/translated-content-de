---
title: Banner und Hinweise
slug: MDN/Writing_guidelines/Page_structures/Banners_and_notices
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

Banner und Hinweise werden auf einigen Seiten angezeigt, insbesondere in der API-Referenz, um wichtige Faktoren hervorzuheben, die beeinflussen, wie der beschriebene Inhalt verwendet wird. Zum Beispiel werden Banner verwendet, um hervorzuheben, wenn eine bestimmte Schnittstelle, Methode oder Eigenschaft veraltet ist und in Produktionscode nicht verwendet werden sollte, oder nur in einem sicheren Kontext verwendet werden kann.

Banner werden im Seiteninhalt mit Makros gerendert. Einige Bannermakros werden automatisch zur Seite hinzugefügt, während andere manuell hinzugefügt werden.

Dieser Artikel beschreibt die wichtigeren Banner und wie sie hinzugefügt werden.

## Wo Bannermakros hinzugefügt werden

Banner werden mit Makros hinzugefügt, die normalerweise unterhalb der Seitenmetadaten eingefügt werden, neben dem Makro der Seitennavigation. Zum Beispiel wurde im folgenden Block das Makro `\{{SecureContext_Header}}` verwendet, um anzuzeigen, dass die [`AudioDecoder`](/de/docs/Web/API/AudioDecoder)-Schnittstelle nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist. Das Makro `\{{AvailableInWorkers}}` wurde verwendet, um anzuzeigen, dass die [`AudioDecoder`](/de/docs/Web/API/AudioDecoder)-Schnittstelle nur im [Fensterkontext](/de/docs/Web/API/Window) und [dedizierten Worker-Kontext](/de/docs/Web/API/DedicatedWorkerGlobalScope) verfügbar ist, und `\{{SeeCompatTable}}` wurde hinzugefügt, um anzuzeigen, dass die Schnittstelle experimentell ist.

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

- `\{{SecureContext_Header}}` — erzeugt ein **Secure context**-Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
- `\{{AvailableInWorkers}}` — erzeugt eine **Verfügbar in Workern**-Notiz, die anzeigt, dass die Technologie im [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.

## Banner, die automatisch hinzugefügt werden

Die folgenden Makros werden automatisch zum Inhalt hinzugefügt, um die in der [browser compat data](https://github.com/mdn/browser-compat-data)-Repository gespeicherten Status zu erfüllen:

- `\{{SeeCompatTable}}` — erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
- `\{{Deprecated_Header}}` — erzeugt ein **Veraltet**-Banner, das anzeigt, dass die Nutzung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
- `\{{Non-standard_Header}}` — erzeugt ein **Nicht-Standard**-Banner, das anzeigt, dass die Nutzung der Technologie nicht Teil einer formalen Spezifikation ist, selbst wenn sie in mehreren Browsern implementiert ist.

[Aktualisieren Sie den Funktionsstatus im browser-compat-data-Repository](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Werte zu ändern.

> [!NOTE]
> Während Sie diese Makros manuell in den Inhalt einfügen/aktualisieren können, werden Werte, die nicht mit den Browser-Kompatibilitätsdaten übereinstimmen, ersetzt oder entfernt.

> [!NOTE]
> Seiten, die die `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}` oder `\{{Non-standard_Header}}` Banner haben, werden auch die entsprechenden `experimentell`, `veraltet` und `nicht-standardisiert` Statuswerte in den Seitenmetadaten enthalten.
> Die Metadaten werden automatisch gleichzeitig mit den Überschriften aktualisiert.
> Die Bannermakros sind nicht von diesen Statusmetadaten abhängig (könnten aber eines Tages daraus generiert werden).

## Experimentell: "Standards positions"-Banner

Manchmal sind sich Browser-Anbieter nicht einig, wie sich ein Feature entwickelt, und einige können es in seiner aktuellen Form ablehnen. In Ausnahmefällen dokumentiert MDN Technologien in diesem Zustand, um die Web-Community zu ermutigen, mit ihnen zu experimentieren, Feedback zu geben und den Browser-Anbietern zu helfen, einen Konsens zu erreichen.

Es ist wichtig, den Lesern den aktuellen Standardisierungsstatus solcher Features zu verdeutlichen. Während eine langfristige Lösung zur Darstellung dieser Informationen noch nicht endgültig ist, tun wir Folgendes für spezifische prominente Technologien, um Verwirrung zu vermeiden:

- Hinzufügen dieses Banners auf der Startseite für dieses Feature (nicht auf jeder Unterseite des Features):

  ```md
  > [!WARNING]
  > This feature is currently opposed by <number> browser vendor(s). See the [Standards positions](#standards_positions) section below for details of opposition.
  ```

  - Ersetzen Sie `<number>` durch die Anzahl der Browser-Anbieter, die das Feature ablehnen.
  - Verwenden Sie `vendor` oder `vendors` wie passend.

- Hinzufügen eines "Standards positions"-Abschnitts zur gleichen Seite wie das obige Banner, als Unterabschnitt des standardmäßigen "Spezifikationen"-Abschnitts.

> [!NOTE]
> Siehe [Verwandte Website-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) für ein Beispiel des "Standards positions"-Abschnitts und was er enthalten sollte sowie das Banner auf der Startseite.
