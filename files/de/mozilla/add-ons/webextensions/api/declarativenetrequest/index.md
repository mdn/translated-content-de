---
title: declarativeNetRequest
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest
l10n:
  sourceCommit: c01b393fbb6939f88cc98ac2a34df1a54be1edfd
---

{{AddonSidebar}}

Diese API ermöglicht es Erweiterungen, Bedingungen und Aktionen anzugeben, die beschreiben, wie Netzwerkanforderungen verarbeitet werden sollen. Diese deklarativen Regeln ermöglichen es dem Browser, Netzwerkanforderungen zu bewerten und zu ändern, ohne die Erweiterungen über einzelne Netzwerkanforderungen zu benachrichtigen.

## Berechtigungen

Um diese API zu nutzen, muss eine Erweiterung in ihrer [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei die Berechtigung `"declarativeNetRequest"` oder `"declarativeNetRequestWithHostAccess"` [anfordern](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). Die Berechtigung `"declarativeNetRequest"` wird den Benutzern in Berechtigungsabfragen angezeigt, die Berechtigung `"declarativeNetRequestWithHostAccess"` nicht.

Die Berechtigung `"declarativeNetRequest"` erlaubt es Erweiterungen, Anforderungen zu blockieren und zu aktualisieren, ohne jegliche [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) zu benötigen. Host-Berechtigungen sind erforderlich, wenn die Erweiterung Anfragen umleiten oder Header in Anfragen ändern möchte oder wenn die Berechtigung `"declarativeNetRequestWithHostAccess"` anstelle der Berechtigung `"declarativeNetRequest"` verwendet wird. Um auf Anfragen in diesen Fällen zu reagieren, sind Host-Berechtigungen für die URL der Anfrage erforderlich. Für alle Anfragen, außer für Navigationsanforderungen (d.h. Ressourcentyp `main_frame` und `sub_frame`), sind Host-Berechtigungen auch für den Initiator der Anfrage erforderlich. Der Initiator einer Anfrage ist in der Regel das Dokument oder der Worker, der die Anfrage ausgelöst hat.

Einige Anfragen sind eingeschränkt und können nicht von Erweiterungen übereinstimmt werden. Dazu gehören privilegierte Browser-Anfragen, Anfragen zu oder von [eingeschränkten Domänen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#restricted_domains) und Anfragen von anderen Erweiterungen.

Die Berechtigung `"declarativeNetRequestFeedback"` ist erforderlich, um {{WebExtAPIRef("declarativeNetRequest.getMatchedRules","getMatchedRules")}} und {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug","onRuleMatchedDebug")}} zu verwenden, da sie Informationen zu übereinstimmenden deklarativen Regeln zurückgeben. Siehe [Testen](#testen) für weitere Informationen.

## Regeln

Die deklarativen Regeln sind durch vier Felder definiert:

- `id` – Eine ID, die eine Regel innerhalb eines Regelsatzes eindeutig identifiziert. Erforderlich und sollte >= 1 sein.
- `priority` – Die Regelpriorität. Wenn angegeben, sollte sie >= 1 sein. Standardmäßig ist sie 1. Siehe [Übereinstimmungspriorität](#übereinstimmungspriorität) für Details, wie die Priorität beeinflusst, welche Regeln angewendet werden.
- `condition` – Die {{WebExtAPIRef("declarativeNetRequest.RuleCondition","condition")}}, unter der diese Regel ausgelöst wird.
- `action` – Die {{WebExtAPIRef("declarativeNetRequest.RuleAction","action")}}, die beim Übereinstimmen der Regel ausgeführt wird. Regeln können eine der folgenden Aktionen durchführen:
  - eine Netzwerkanforderung blockieren.
  - eine Netzwerkanforderung umleiten.
  - Header einer Netzwerkanforderung ändern.
  - verhindern, dass eine andere übereinstimmende Regel angewendet wird.

> [!NOTE]
> Eine Umleitungsaktion leitet die Anfrage nicht um, und die Anfrage wird wie gewohnt fortgesetzt, wenn:
>
> - die Aktion die Anfrage nicht ändert.
> - die Umleitungs-URL ungültig ist (z. B. ist der Wert von {{WebExtAPIRef("declarativeNetRequest.redirect","redirect.regexSubstitution")}} keine gültige URL).

Dies ist eine Beispielregel, die alle Skriptanforderungen blockiert, die von `"foo.com"` zu einer beliebigen URL mit `"abc"` als Substring stammen:

```json
{
  "id": 1,
  "priority": 1,
  "action": { "type": "block" },
  "condition": {
    "urlFilter": "abc",
    "initiatorDomains": ["foo.com"],
    "resourceTypes": ["script"]
  }
}
```

Das `urlFilter`-Feld einer Regelbedingung wird verwendet, um das Muster anzugeben, das gegen die Anforderungs-URL übereinstimmt. Siehe {{WebExtAPIRef("declarativeNetRequest.RuleCondition","RuleCondition")}} für Details. Einige Beispiele für URL-Filter sind:

<table>
<tbody>
<tr>
<th><code>urlFilter</code></th>
<th>Übereinstimmt</th>
<th>Übereinstimmt nicht</th>
</tr>
<tr>
<td><code>"abc"</code></td>
<td>https://abcd.com<br />https://example.com/abcd</td>
<td>https://ab.com</td>
</tr>
<tr>
<td><code>"abc*d"</code></td>
<td>https://abcd.com<br />https://example.com/abcxyzd</td>
<td>https://abc.com</td>
</tr>
<tr>
<td><code>"||a.example.com"</code></td>
<td>https://a.example.com/<br />https://b.a.example.com/xyz</td>
<td>https://example.com/</td>
</tr>
<tr>
<td><code>"|https*"</code></td>
<td>https://example.com</td>
<td>http://example.com/<br />http://https.com</td>
</tr>
</tbody>
</table>

## Regelsätze

Regeln sind in Regelsätzen organisiert:

- **statische Regelsätze**: Sammlungen von Regeln, die mit dem Manifest-Schlüssel [`"declarative_net_request"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) definiert und in der Erweiterung gespeichert sind. Eine Erweiterung kann statische Regelsätze mit {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets","updateEnabledRulesets")}} aktivieren und deaktivieren. Die Menge der aktivierten statischen Regelsätze wird über Sitzungen hinweg gespeichert, jedoch nicht über Erweiterungsaktualisierungen hinweg. Die bei der Erweiterungsinstallation und -aktualisierung aktivierten statischen Regelsätze werden durch den Inhalt des `"declarative_net_request"` Manifest-Schlüssels bestimmt.
- **dynamischer Regelsatz**: Regeln, die mit {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules","updateDynamicRules")}} hinzugefügt oder entfernt wurden. Diese Regeln bleiben über Sitzungen und Erweiterungsaktualisierungen hinweg erhalten.
- **Sitzungsregelsatz**: Regeln, die mit {{WebExtAPIRef("declarativeNetRequest.updateSessionRules","updateSessionRules")}} hinzugefügt oder entfernt wurden. Diese Regeln werden nicht über Browser-Sitzungen hinweg gespeichert.

> [!NOTE]
> Fehler und Warnungen über ungültige statische Regeln werden nur während des [Testens](#testen) angezeigt. Ungültige statische Regeln in dauerhaft installierten Erweiterungen werden ignoriert. Daher ist es wichtig sicherzustellen, dass Ihre statischen Regelsätze durch Testen gültig sind.

## Grenzen

### Grenzen von statischen Regelsätzen

Eine Erweiterung kann:

- statische Regelsätze im [`"declarative_net_request"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) Manifest-Schlüssel bis zum Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_STATIC_RULESETS","MAX_NUMBER_OF_STATIC_RULESETS")}} angeben.
- statische Regelsätze aktivieren (im `"declarative_net_request"` Manifest-Schlüssel oder programmatisch), so dass die Anzahl der Regeln (aktiviert oder deaktiviert), die sie enthalten, den Wert von {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES","GUARANTEED_MINIMUM_STATIC_RULES")}} nicht überschreitet und die Anzahl der aktivierten statischen Regelsätze den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_ENABLED_STATIC_RULESETS","MAX_NUMBER_OF_ENABLED_STATIC_RULESETS")}} nicht überschreitet.
  > [!NOTE]
  > Die Anzahl der Regeln in aktivierten statischen Regelsätzen für alle Erweiterungen darf das globale Limit nicht überschreiten. Erweiterungen sollten nicht darauf vertrauen, dass das globale Limit einen bestimmten Wert hat. Stattdessen sollten sie {{WebExtAPIRef("declarativeNetRequest.getAvailableStaticRuleCount","getAvailableStaticRuleCount")}} verwenden, um die Anzahl der zusätzlichen Regeln zu finden, die sie aktivieren können.
- Regeln in statischen Regelsätzen bis zum Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES","MAX_NUMBER_OF_DISABLED_STATIC_RULES")}} deaktivieren. Diese deaktivierten Regeln zählen jedoch zu den {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES","GUARANTEED_MINIMUM_STATIC_RULES")}}.

### Dynamische und sitzungsbezogene Regeln

Die Anzahl der dynamischen und sitzungsbezogenen Regeln, die eine Erweiterung hinzufügen kann, ist begrenzt auf:

- In Safari und bis Chrome 119 und Firefox 127, den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}.
- Ab Chrome 120 und Firefox 128, die Werte von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES","MAX_NUMBER_OF_DYNAMIC_RULES")}} und {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES","MAX_NUMBER_OF_SESSION_RULES")}}

## Übereinstimmungspriorität

Wenn der Browser bewertet, wie Anfragen behandelt werden sollen, überprüft er die Regeln jeder Erweiterung, die eine Bedingung haben, die mit der Anfrage übereinstimmt, und wählt die aus, die in folgender Reihenfolge angewendet werden soll:

1. die Regelpriorität, wobei 1 die niedrigste Priorität ist (und Regeln standardmäßig 1 haben, wenn keine Priorität festgelegt ist).<br>
   Wenn dies nicht zu einer spezifischen Regel führt:
2. die Regelaktion, in folgender Reihenfolge der Priorität:
   1. "allow", was bedeutet, dass alle anderen verbleibenden Regeln ignoriert werden.
   2. "allowAllRequests" (nur für die Ressourcentypen main_frame und sub_frame) hat die gleiche Wirkung wie allow, gilt jedoch auch für zukünftige Unterressourcen-Ladungen im Dokument (einschließlich nachfolgender Frames), die aus der Anfrage generiert werden.
   3. "block" storniert die Anfrage.
   4. "upgradeScheme" aktualisiert das Schema der Anfrage.
   5. "redirect" leitet die Anfrage um.
   6. "modifyHeaders" schreibt Anforderungs- oder Antwortheader oder beides um.

> [!NOTE]
> Wenn mehrere übereinstimmende Regeln den gleichen Regelprioritäts- und Aktions-Typ haben, kann das Ergebnis zweideutig sein, wenn die übereinstimmende Aktion zusätzliche Eigenschaften unterstützt. Diese Eigenschaften können zu Ergebnissen führen, die nicht kombiniert werden können. Zum Beispiel:
>
> - Die Aktion "block" unterstützt keine zusätzlichen Eigenschaften und es gibt daher keine Mehrdeutigkeit: Alle übereinstimmenden "block"-Aktionen würden zum gleichen Ergebnis führen.
> - Die Aktion "redirect" leitet eine Anfrage zu einem Ziel um. Wenn mehrere "redirect"-Aktionen übereinstimmen, wird alles außer einer „redirect“-Aktion ignoriert. Es ist immer noch möglich, mehrmals umzuleiten, wenn die umgeleitete Anfrage mit einer anderen Regelbedingung übereinstimmt.
> - Mehrere "modifyHeaders"-Aktionen können unabhängig angewendet werden, wenn sie verschiedene Header betreffen. Das Ergebnis ist mehrdeutig, wenn sie den gleichen Header betreffen, da einige Kombinationen von Operationen nicht erlaubt sind (wie in {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}} erklärt). Die Bewertungsreihenfolge von "modifyHeaders"-Aktionen ist daher wichtig.
>
> Um die Reihenfolge zu kontrollieren, in der Aktionen angewendet werden, sollten Regeln, deren Reihenfolgen der Priorität wichtig ist, unterschiedliche `priority` Werte erhalten.

> [!NOTE]
> Nach Regelpriorität und Regelaktion berücksichtigt Firefox den Regelsatz, zu dem die Regel gehört, in dieser Reihenfolge der Priorität: Sitzung > Dynamisch > Sitzungsregelsätze. Dies kann nicht über alle Browser hinweg garantiert werden, siehe [WECG issue 280](https://github.com/w3c/webextensions/issues/280).

Wenn nur eine Erweiterung eine Regel für die Anfrage bereitstellt, wird diese Regel angewendet. Wenn jedoch mehr als eine Erweiterung eine übereinstimmende Regel hat, wählt der Browser die zu anwendende in folgender Reihenfolge der Priorität:

1. "block"
2. "redirect" und "upgradeScheme"
3. "allow" und "allowAllRequests"

Wenn die Anfrage nicht blockiert oder umgeleitet wurde, werden die übereinstimmenden `modifyHeaders`-Aktionen angewendet, wie in {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}} dokumentiert.

## Testen

{{WebExtAPIRef("declarativeNetRequest.testMatchOutcome","testMatchOutcome")}}, {{WebExtAPIRef("declarativeNetRequest.getMatchedRules","getMatchedRules")}}, und {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug","onRuleMatchedDebug")}} stehen zur Verfügung, um beim Testen von Regeln und Regelsätzen zu unterstützen. Diese APIs erfordern die Berechtigung `"declarativeNetRequestFeedback"` [permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). Zusätzlich:

- in Chrome sind diese APIs nur für nicht verpackte Erweiterungen verfügbar.
- in Firefox sind diese APIs nur verfügbar, nachdem die `extensions.dnr.feedback`-Voreinstellung auf `true` gesetzt wurde. Setzen Sie diese Voreinstellung über `about:config` oder das [`--pref` Flag des `web-ext` CLI Tools](https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#pref).

## Vergleich mit der webRequest API

- Die declarativeNetRequest API bewertet Netzwerkanforderungen direkt im Browser. Dies macht sie leistungsfähiger als die webRequest API, bei der jede Netzwerkanforderung in JavaScript im Erweiterungsprozess bewertet wird.
- Da die Anfragen nicht durch den Erweiterungsprozess abgefangen werden, entfällt bei declarativeNetRequest die Notwendigkeit, dass Erweiterungen eine Hintergrundseite haben.
- Im Gegensatz zur webRequest API erfordert das Blockieren oder Aktualisieren von Anforderungen mit der declarativeNetRequest API keine Host-Berechtigungen, wenn sie mit der Berechtigung `declarativeNetRequest` verwendet wird.
- Die declarativeNetRequest API bietet den Benutzern einen besseren Datenschutz, da Erweiterungen die im Namen des Benutzers gestellten Netzwerkanforderungen nicht lesen.
- (Nur Chrome:) Im Gegensatz zur webRequest API werden alle Bilder oder iFrames, die mit der declarativeNetRequest API blockiert werden, automatisch im DOM kollabiert.
- Während der Entscheidung, ob eine Anfrage blockiert oder umgeleitet wird, wird der declarativeNetRequest API Vorrang vor der webRequest API gegeben, da sie eine synchrone Abfangmöglichkeit ermöglicht. Ebenso sind alle Header, die durch die declarativeNetRequest API entfernt werden, für Web-Request-Erweiterungen nicht sichtbar.
- Die webRequest API ist flexibler als die declarativeNetRequest API, da sie es Erweiterungen ermöglicht, eine Anfrage programmatisch zu bewerten.

## Typen

- {{WebExtAPIRef("declarativeNetRequest.MatchedRule")}}
  - : Details einer übereinstimmenden Regel.
- {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}}
  - : Die zu modifizierenden Anforderungs- oder Antwortheader für die Anfrage.
- {{WebExtAPIRef("declarativeNetRequest.Redirect")}}
  - : Details, wie die Umleitung durchgeführt werden soll. Nur gültig für Umleitungsregeln.
- {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}
  - : Der Ressourcentyp einer Anfrage.
- {{WebExtAPIRef("declarativeNetRequest.Rule")}}
  - : Ein Objekt, das Details einer Regel enthält.
- {{WebExtAPIRef("declarativeNetRequest.RuleAction")}}
  - : Ein Objekt, das die Aktion definiert, die bei Übereinstimmung mit einer Regel ergriffen werden soll.
- {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}
  - : Ein Objekt, das die Bedingung definiert, unter der eine Regel ausgelöst wird.
- {{WebExtAPIRef("declarativeNetRequest.URLTransform")}}
  - : Ein Objekt, das die Details einer URL-Transformation für eine Umleitungsaktion enthält.

## Eigenschaften

- {{WebExtAPIRef("declarativeNetRequest.DYNAMIC_RULESET_ID")}}
  - : Regelsatz-ID für die dynamischen von der Erweiterung hinzugefügten Regeln.
- {{WebExtAPIRef("declarativeNetRequest.GETMATCHEDRULES_QUOTA_INTERVAL")}}
  - : Das Zeitintervall, in dem {{WebExtAPIRef("declarativeNetRequest.MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL")}} {{WebExtAPIRef("declarativeNetRequest.getMatchedRules")}}-Aufrufe vorgenommen werden können.
- {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES")}}
  - : Die Mindestanzahl an statischen Regeln, die einer Erweiterung über ihre aktivierten statischen Regelsätze garantiert sind.
- {{WebExtAPIRef("declarativeNetRequest.MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL")}}
  - : Die Anzahl der Male, die {{WebExtAPIRef("declarativeNetRequest.getMatchedRules")}} in einem Zeitraum von {{WebExtAPIRef("declarativeNetRequest.GETMATCHEDRULES_QUOTA_INTERVAL")}} aufgerufen werden kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES")}}
  - : Die maximale Anzahl von statischen Regeln, die in jedem statischen Regelsatz deaktiviert werden können.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}} {{deprecated_inline}}
  - : Die maximale Anzahl von dynamischen und sitzungsbezogenen Regeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES")}}
  - : Die maximale Anzahl von dynamischen Regeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_ENABLED_STATIC_RULESETS")}}
  - : Die maximale Anzahl von statischen Regelsätzen, die eine Erweiterung aktivieren kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_REGEX_RULES")}}
  - : Die maximale Anzahl von regulären Ausdrucksregeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES")}}
  - : Die maximale Anzahl von sitzungsbezogenen Regeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_STATIC_RULESETS")}}
  - : Die maximale Anzahl von statischen Regelsätzen, die eine Erweiterung als Teil des [`declarative_net_request.rule_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) Manifest-Schlüssels angeben kann.
- {{WebExtAPIRef("declarativeNetRequest.SESSION_RULESET_ID")}}
  - : Der Regelsatz-ID für die sitzungsbezogenen von der Erweiterung hinzugefügten Regeln.

## Funktionen

- {{WebExtAPIRef("declarativeNetRequest.getAvailableStaticRuleCount()")}}
  - : Gibt die Anzahl der statischen Regeln zurück, die eine Erweiterung aktivieren kann, bevor das globale statische Regel-Limit erreicht ist.
- {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds()")}}
  - : Gibt die IDs der deaktivierten Regeln in einem statischen Regelsatz zurück.
- {{WebExtAPIRef("declarativeNetRequest.getDynamicRules()")}}
  - : Gibt die Menge der dynamischen Regeln für die Erweiterung zurück.
- {{WebExtAPIRef("declarativeNetRequest.getEnabledRulesets()")}}
  - : Gibt die IDs für die Menge der aktivierten statischen Regelsätze zurück.
- {{WebExtAPIRef("declarativeNetRequest.getMatchedRules()")}}
  - : Gibt alle für die Erweiterung übereinstimmenden Regeln zurück.
- {{WebExtAPIRef("declarativeNetRequest.getSessionRules()")}}
  - : Gibt die Menge der sitzungsbezogenen Regeln für die Erweiterung zurück.
- {{WebExtAPIRef("declarativeNetRequest.isRegexSupported()")}}
  - : Überprüft, ob ein regulärer Ausdruck als [`declarativeNetRequest.RuleCondition.regexFilter`](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleCondition#regexfilter) Regelbedingung unterstützt wird.
- {{WebExtAPIRef("declarativeNetRequest.setExtensionActionOptions()")}}
  - : Konfiguriert, wie die Aktionsanzahl für Tabs gehandhabt wird.
- {{WebExtAPIRef("declarativeNetRequest.testMatchOutcome()")}}
  - : Überprüft, ob irgendwelche der `declarativeNetRequest`-Regeln der Erweiterung zu einer hypothetischen Anfrage passen würden.
- {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules()")}}
  - : Ändert die aktive Menge von dynamischen Regeln für die Erweiterung.
- {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets()")}}
  - : Aktualisiert die Menge der aktiven statischen Regelsätze für die Erweiterung.
- {{WebExtAPIRef("declarativeNetRequest.updateSessionRules()")}}
  - : Ändert die Menge der sitzungsbezogenen Regeln für die Erweiterung.
- {{WebExtAPIRef("declarativeNetRequest.updateStaticRules()")}}
  - : Ändert den aktivierten Status von Regeln in einem statischen Regelsatz.

## Ereignisse

- {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug")}}
  - : Wird ausgelöst, wenn eine Regel mit einer Anfrage übereinstimmt, während eine Erweiterung mit der Berechtigung "declarativeNetRequestFeedback" debuggt wird.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
