---
title: declarativeNetRequest
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Diese API ermöglicht es Erweiterungen, Bedingungen und Aktionen festzulegen, die beschreiben, wie Netzwerkanfragen behandelt werden sollen. Diese deklarativen Regeln erlauben es dem Browser, Netzwerkanfragen zu bewerten und zu modifizieren, ohne die Erweiterungen über einzelne Netzwerkanfragen zu benachrichtigen.

## Berechtigungen

Um diese API zu verwenden, muss eine Erweiterung die Berechtigung `"declarativeNetRequest"` oder `"declarativeNetRequestWithHostAccess"` in ihrer [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei anfordern. Die Berechtigung `"declarativeNetRequest"` wird den Benutzern in Berechtigungsaufforderungen angezeigt, die `"declarativeNetRequestWithHostAccess"` jedoch nicht.

Die Berechtigung `"declarativeNetRequest"` ermöglicht es Erweiterungen, Anfragen zu blockieren und zu erweitern, ohne dass [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) erforderlich sind. Host-Berechtigungen sind erforderlich, wenn die Erweiterung Anfragen umleiten oder die Header von Anfragen ändern möchte oder wenn die Berechtigung `"declarativeNetRequestWithHostAccess"` anstelle der Berechtigung `"declarativeNetRequest"` verwendet wird. Um in diesen Fällen auf Anfragen zu reagieren, sind Host-Berechtigungen für die URL der Anfrage erforderlich. Für alle Anfragen, außer Navigationsanfragen (d.h. Ressourcentyp `main_frame` und `sub_frame`), sind auch Host-Berechtigungen für den Anfragesteller erforderlich. Der Anfragesteller einer Anfrage ist in der Regel das Dokument oder der Worker, das die Anfrage ausgelöst hat.

Einige Anfragen sind eingeschränkt und können nicht von Erweiterungen abgeglichen werden. Dazu gehören privilegierte Browseranfragen, Anfragen zu oder von [eingeschränkten Domains](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#restricted_domains) und Anfragen von anderen Erweiterungen.

Die Berechtigung `"declarativeNetRequestFeedback"` ist erforderlich, um {{WebExtAPIRef("declarativeNetRequest.getMatchedRules","getMatchedRules")}} und {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug","onRuleMatchedDebug")}} zu verwenden, da sie Informationen zu abgeglichenen deklarativen Regeln zurückgeben. Weitere Informationen finden Sie unter [Testen](#testen).

## Regeln

Die deklarativen Regeln werden durch vier Felder definiert:

- `id` – Eine ID, die eine Regel innerhalb eines Regelsatzes eindeutig identifiziert. Obligatorisch und sollte >= 1 sein.
- `priority` – Die Priorität der Regel. Wenn angegeben, sollte sie >= 1 sein. Standardmäßig 1. Siehe [Abgleichspriorität](#abgleichspriorität) für Details, wie die Priorität beeinflusst, welche Regeln angewendet werden.
- `condition` – Die {{WebExtAPIRef("declarativeNetRequest.RuleCondition","condition")}}, unter der diese Regel ausgelöst wird.
- `action` – Die {{WebExtAPIRef("declarativeNetRequest.RuleAction","action")}}, die ausgeführt wird, wenn die Regel abgeglichen wird. Regeln können eines dieser Dinge tun:
  - Eine Netzwerkanfrage blockieren.
  - Eine Netzwerkanfrage umleiten.
  - Header einer Netzwerkanfrage modifizieren.
  - Verhindern, dass eine andere übereinstimmende Regel angewendet wird.

> [!NOTE]
> Eine Umleitungsaktion leitet die Anfrage nicht um, und die Anfrage wird wie gewohnt fortgesetzt, wenn:
>
> - die Aktion die Anfrage nicht ändert.
> - die Umleitungs-URL ungültig ist (z. B. der Wert von {{WebExtAPIRef("declarativeNetRequest.redirect","redirect.regexSubstitution")}} keine gültige URL ist).

Dies ist eine Beispielregel, die alle Skriptanfragen blockiert, die von `"foo.com"` stammen und irgendeine URL mit der Teilzeichenkette `"abc"` enthalten:

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

Das `urlFilter`-Feld einer Regelbedingung wird verwendet, um das Muster zu spezifizieren, das mit der Anfrag URL abgeglichen wird. Siehe {{WebExtAPIRef("declarativeNetRequest.RuleCondition","RuleCondition")}} für Details. Einige Beispiele für URL-Filter sind:

<table>
<tbody>
<tr>
<th><code>urlFilter</code></th>
<th>Übereinstimmungen</th>
<th>Keine Übereinstimmungen</th>
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

Regeln sind in Regelsätze organisiert:

- **statische Regelsätze**: Sammlungen von Regeln, die mit dem [`"declarative_net_request"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) Manifest-Schlüssel definiert und in der Erweiterung gespeichert sind. Eine Erweiterung kann statische Regelsätze mit {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets","updateEnabledRulesets")}} aktivieren und deaktivieren. Die Menge der aktivierten statischen Regelsätze bleibt über Sitzungen hinweg erhalten, jedoch nicht über Erweiterungsaktualisierungen. Die aktivierten statischen Regelsätze bei der Installation und Aktualisierung der Erweiterung werden durch den Inhalt des `"declarative_net_request"` Manifest-Schlüssels bestimmt.
- **dynamischer Regelsatz**: Regeln, die mit {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules","updateDynamicRules")}} hinzugefügt oder entfernt werden. Diese Regeln bleiben über Sitzungen und Erweiterungsaktualisierungen hinweg erhalten.
- **Sitzungsregelsatz**: Regeln, die mit {{WebExtAPIRef("declarativeNetRequest.updateSessionRules","updateSessionRules")}} hinzugefügt oder entfernt werden. Diese Regeln bleiben nicht über Browsersitzungen hinweg erhalten.

> [!NOTE]
> Fehler und Warnungen über ungültige statische Regeln werden nur während des [Testens](#testen) angezeigt. Ungültige statische Regeln in dauerhaft installierten Erweiterungen werden ignoriert. Daher ist es wichtig, durch Testen zu überprüfen, dass Ihre statischen Regelsätze gültig sind.

## Beschränkungen

### Begrenzungen für statische Regelsätze

Eine Erweiterung kann:

- statische Regelsätze im [`"declarative_net_request"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) Manifest-Schlüssel bis zum Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_STATIC_RULESETS","MAX_NUMBER_OF_STATIC_RULESETS")}} spezifizieren.
- Statische Regelsätze (im Manifest-Schlüssel `"declarative_net_request"` oder programmgesteuert) aktivieren, sodass die Anzahl der Regeln (aktiviert oder deaktiviert), die sie enthalten, den Wert von {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES","GUARANTEED_MINIMUM_STATIC_RULES")}} nicht überschreiten und die Anzahl der aktivierten statischen Regelsätze den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_ENABLED_STATIC_RULESETS","MAX_NUMBER_OF_ENABLED_STATIC_RULESETS")}} nicht überschreiten.
  > [!NOTE]
  > Die Anzahl der Regeln in aktivierten statischen Regelsätzen für alle Erweiterungen darf nicht die globale Grenze überschreiten. Erweiterungen sollten sich nicht darauf verlassen, dass die globale Grenze einen bestimmten Wert hat; stattdessen sollten sie {{WebExtAPIRef("declarativeNetRequest.getAvailableStaticRuleCount","getAvailableStaticRuleCount")}} verwenden, um die Anzahl zusätzlicher Regeln zu ermitteln, die sie aktivieren können.
- Regeln in statischen Regelsätzen bis zum Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES","MAX_NUMBER_OF_DISABLED_STATIC_RULES")}} deaktivieren. Diese deaktivierten Regeln zählen jedoch zu den {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES","GUARANTEED_MINIMUM_STATIC_RULES")}}.

### Dynamische und sitzungsbezogene Regeln

Die Anzahl der dynamischen und sitzungsbezogenen Regeln, die eine Erweiterung hinzufügen kann, ist auf folgende Werte beschränkt:

- In Safari und bis zu Chrome 119 und Firefox 127, der Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}.
- Ab Chrome 120 und Firefox 128, die Werte von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES","MAX_NUMBER_OF_DYNAMIC_RULES")}} und {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES","MAX_NUMBER_OF_SESSION_RULES")}}.

## Abgleichspriorität

Wenn der Browser bewertet, wie Anfragen behandelt werden sollen, überprüft er die Regeln jeder Erweiterung, die eine Bedingung haben, die mit der Anfrage übereinstimmt, und wählt diejenige aus, die wie folgt in Betracht kommt:

1. die Priorität der Regel, wobei 1 die niedrigste Priorität ist (und Regeln standardmäßig auf 1 gesetzt werden, wenn keine Priorität angegeben ist).<br>
   Wenn dies nicht zu einer Regel führt, die angewendet wird:
2. die Aktion der Regel in der folgenden Reihenfolge der Priorität:
   1. "allow", was bedeutet, dass alle anderen verbleibenden Regeln ignoriert werden.
   2. "allowAllRequests" (nur für Ressourcentypen main_frame und sub_frame) hat den gleichen Effekt wie "allow", gilt jedoch auch für zukünftige Ladevorgänge von Unterressourcen im Dokument (einschließlich nachgeordneter Frames), die aus der Anfrage generiert wurden.
   3. "block" storniert die Anfrage.
   4. "upgradeScheme" aktualisiert das Schema der Anfrage.
   5. "redirect" leitet die Anfrage um.
   6. "modifyHeaders" überschreibt Anfrage- oder Antwortheader oder beides.

> [!NOTE]
> Wenn mehrere übereinstimmende Regeln die gleiche Regelpriorität und Regelaktionstyp haben, kann das Ergebnis mehrdeutig sein, wenn die unterstützten Aktionen zusätzliche Eigenschaften haben. Diese Eigenschaften können zu Ergebnissen führen, die nicht kombiniert werden können. Zum Beispiel:
>
> - Die "block"-Aktion unterstützt keine zusätzlichen Eigenschaften, daher gibt es keine Mehrdeutigkeit: alle übereinstimmenden "block"-Aktionen würden zum gleichen Ergebnis führen.
> - Die "redirect"-Aktion leitet eine Anfrage zu einem Ziel um. Wenn mehrere "redirect"-Aktionen übereinstimmen, werden alle bis auf eine "redirect"-Aktion ignoriert. Es ist jedoch möglich, bei der Weiterleitung wiederholt umzuletesm, wenn die weitergeleitete Anfrage einer anderen Regelbedingung entspricht.
> - Mehrere Aktionen des Typs "modifyHeaders" können unabhängig angewendet werden, wenn sie unterschiedliche Header betreffen. Das Ergebnis ist mehrdeutig, wenn sie den gleichen Header betreffen, da einige Kombinationen von Operationen nicht erlaubt sind (wie in {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}} erklärt). Deshalb ist die Bewertungsreihenfolge von "modifyHeaders"-Aktionen wichtig.
>
> Um die Reihenfolge zu kontrollieren, in der Aktionen angewendet werden, weisen Sie den Regeln, deren Auftragspriorität wichtig ist, unterschiedliche `priority`-Werte zu.

> [!NOTE]
> Nach Regelpriorität und Regelaktion berücksichtigt Firefox den Regelsatz, zu dem die Regel gehört, in dieser Reihenfolge der Priorität: Sitzung > dynamisch > Sitzung Regelsätze.
> Dies kann nicht browserübergreifend garantiert werden, siehe [WECG issue 280](https://github.com/w3c/webextensions/issues/280).

Wenn nur eine Erweiterung eine Regel für die Anfrage bereitstellt, wird diese Regel angewendet. Wenn jedoch mehr als eine Erweiterung eine übereinstimmende Regel hat, wählt der Browser diejenige in dieser Reihenfolge der Priorität aus:

1. "block"
2. "redirect" und "upgradeScheme"
3. "allow" und "allowAllRequests"

Falls die Anfrage nicht blockiert oder weitergeleitet wurde, werden die übereinstimmenden `modifyHeaders`-Aktionen angewendet, wie in {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}} dokumentiert.

## Testen

{{WebExtAPIRef("declarativeNetRequest.testMatchOutcome","testMatchOutcome")}}, {{WebExtAPIRef("declarativeNetRequest.getMatchedRules","getMatchedRules")}}, und {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug","onRuleMatchedDebug")}} sind verfügbar, um beim Testen von Regeln und Regelsätzen zu helfen. Diese APIs erfordern die `"declarativeNetRequestFeedback"` [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). Darüber hinaus:

- In Chrome sind diese APIs nur für nicht verpackte Erweiterungen verfügbar.
- In Firefox sind diese APIs nur verfügbar, wenn die `extensions.dnr.feedback`-Einstellung auf `true` gesetzt ist. Setzen Sie diese Einstellung über `about:config` oder das [`--pref`-Flag des `web-ext` CLI-Tools](https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#pref).

## Vergleich mit der webRequest API

- Die declarativeNetRequest API wertet Netzwerkanfragen direkt im Browser aus. Das macht sie leistungsstärker als die webRequest API, bei der jede Netzwerkanfrage im JavaScript der Erweiterungsverarbeitung bewertet wird.
- Da die Anfragen nicht vom Erweiterungsprozess abgefangen werden, entfällt bei declarativeNetRequest die Notwendigkeit für Erweiterungen, eine Hintergrundseite zu haben.
- Im Gegensatz zur webRequest API erfordert das Blockieren oder Aktualisieren von Anfragen mit der declarativeNetRequest API keine Host-Berechtigungen, wenn sie mit der `declarativeNetRequest`-Berechtigung verwendet wird.
- Die declarativeNetRequest API bietet dem Benutzer eine bessere Privatsphäre, da die Erweiterungen die Netzwerkanfragen, die im Auftrag des Benutzers gemacht werden, nicht einsehen können.
- (Nur Chrome:) Im Gegensatz zur webRequest API werden Bilder oder iFrames, die mit der declarativeNetRequest API blockiert werden, automatisch im DOM zusammengeklappt.
- Während entschieden wird, ob eine Anfrage blockiert oder umgeleitet werden soll, erhält die declarativeNetRequest API Vorrang vor der webRequest API, da sie eine synchrone Abfangmöglichkeit bietet. Ebenso werden alle Header, die durch die declarativeNetRequest API entfernt werden, den Webanfrageerweiterungen nicht sichtbar gemacht.
- Die webRequest API ist flexibler als die declarativeNetRequest API, weil sie es Erweiterungen erlaubt, eine Anfrage programmatisch zu bewerten.

## Typen

- {{WebExtAPIRef("declarativeNetRequest.HeaderInfo")}}
  - : Der Antwortkopf, der mit der Anfrage abgeglichen werden soll, deklariert im Array [`rule.condition.excludedResponseHeaders`](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleCondition#excludedresponseheaders) oder im Array [`rule.condition.responseHeaders`](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleCondition#responseheaders).
- {{WebExtAPIRef("declarativeNetRequest.MatchedRule")}}
  - : Details zu einer abgeglichenen Regel.
- {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}}
  - : Die Anfrage- oder Antwortköpfe, die für die Anfrage modifiziert werden sollen.
- {{WebExtAPIRef("declarativeNetRequest.Redirect")}}
  - : Details darüber, wie die Umleitung durchgeführt werden soll. Nur für Umleitungsregeln gültig.
- {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}
  - : Der Ressourcentyp einer Anfrage.
- {{WebExtAPIRef("declarativeNetRequest.Rule")}}
  - : Ein Objekt, das Details einer Regel enthält.
- {{WebExtAPIRef("declarativeNetRequest.RuleAction")}}
  - : Ein Objekt, das die Aktion definiert, die ausgeführt wird, wenn eine Regel abgeglichen wird.
- {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}
  - : Ein Objekt, das die Bedingung definiert, unter der eine Regel ausgelöst wird.
- {{WebExtAPIRef("declarativeNetRequest.URLTransform")}}
  - : Ein Objekt, das Details einer URL-Transformation für eine Umleitungsaktion enthält.

## Eigenschaften

- {{WebExtAPIRef("declarativeNetRequest.DYNAMIC_RULESET_ID")}}
  - : Regelsatz-ID für die von der Erweiterung hinzugefügten dynamischen Regeln.
- {{WebExtAPIRef("declarativeNetRequest.GETMATCHEDRULES_QUOTA_INTERVAL")}}
  - : Das Zeitintervall, innerhalb dessen {{WebExtAPIRef("declarativeNetRequest.MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL")}} {{WebExtAPIRef("declarativeNetRequest.getMatchedRules")}}-Aufrufe gemacht werden können.
- {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES")}}
  - : Die Mindestanzahl an statischen Regeln, die einer Erweiterung über ihre aktivierten statischen Regelsätze garantiert werden.
- {{WebExtAPIRef("declarativeNetRequest.MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL")}}
  - : Die Anzahl der Male, die {{WebExtAPIRef("declarativeNetRequest.getMatchedRules")}} innerhalb eines Zeitraums von {{WebExtAPIRef("declarativeNetRequest.GETMATCHEDRULES_QUOTA_INTERVAL")}} aufgerufen werden kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES")}}
  - : Die maximale Anzahl an statischen Regeln, die bei jedem statischen Regelsatz deaktiviert werden können.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}} {{deprecated_inline}}
  - : Die maximale Anzahl an dynamischen und sitzungsbezogenen Regeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES")}}
  - : Die maximale Anzahl an dynamischen Regeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_ENABLED_STATIC_RULESETS")}}
  - : Die maximale Anzahl an statischen Regelsätzen, die eine Erweiterung aktivieren kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_REGEX_RULES")}}
  - : Die maximale Anzahl an regulären Ausdrucksregeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES")}}
  - : Die maximale Anzahl an sitzungsbezogenen Regeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_STATIC_RULESETS")}}
  - : Die maximale Anzahl an statischen Regelsätzen, die eine Erweiterung als Teil des [`declarative_net_request.rule_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) Manifest-Schlüssels spezifizieren kann.
- {{WebExtAPIRef("declarativeNetRequest.SESSION_RULESET_ID")}}
  - : Die Regelsatz-ID für die von der Erweiterung hinzugefügten sitzungsbezogenen Regeln.

## Funktionen

- {{WebExtAPIRef("declarativeNetRequest.getAvailableStaticRuleCount()")}}
  - : Gibt die Anzahl der statischen Regeln zurück, die eine Erweiterung aktivieren kann, bevor das globale statische Regel-Limit erreicht wird.
- {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds()")}}
  - : Gibt die IDs der deaktivierten Regeln in einem statischen Regelsatz zurück.
- {{WebExtAPIRef("declarativeNetRequest.getDynamicRules()")}}
  - : Gibt die Menge der dynamischen Regeln für die Erweiterung zurück.
- {{WebExtAPIRef("declarativeNetRequest.getEnabledRulesets()")}}
  - : Gibt die IDs der Menge der aktivierten statischen Regelsätze zurück.
- {{WebExtAPIRef("declarativeNetRequest.getMatchedRules()")}}
  - : Gibt alle passenden Regeln für die Erweiterung zurück.
- {{WebExtAPIRef("declarativeNetRequest.getSessionRules()")}}
  - : Gibt die Menge der sitzungsbezogenen Regeln für die Erweiterung zurück.
- {{WebExtAPIRef("declarativeNetRequest.isRegexSupported()")}}
  - : Prüft, ob ein regulärer Ausdruck als [`declarativeNetRequest.RuleCondition.regexFilter`](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleCondition#regexfilter) Regelbedingung unterstützt wird.
- {{WebExtAPIRef("declarativeNetRequest.setExtensionActionOptions()")}}
  - : Konfiguriert, wie die Aktionsanzahl für Tabs behandelt wird.
- {{WebExtAPIRef("declarativeNetRequest.testMatchOutcome()")}}
  - : Prüft, ob eine der `declarativeNetRequest`-Regeln der Erweiterung zu einer hypothetischen Anfrage passen würde.
- {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules()")}}
  - : Ändert die aktive Menge der dynamischen Regeln für die Erweiterung.
- {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets()")}}
  - : Aktualisiert die Menge der aktiven statischen Regelsätze für die Erweiterung.
- {{WebExtAPIRef("declarativeNetRequest.updateSessionRules()")}}
  - : Ändert die Menge der sitzungsbezogenen Regeln für die Erweiterung.
- {{WebExtAPIRef("declarativeNetRequest.updateStaticRules()")}}
  - : Ändert den aktivierten Zustand von Regeln in einem statischen Regelsatz.

## Ereignisse

- {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug")}}
  - : Wird ausgelöst, wenn eine Regel bei einer Anfrage passend ist, während eine Erweiterung mit der "declarativeNetRequestFeedback"-Berechtigung debuggt wird.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
