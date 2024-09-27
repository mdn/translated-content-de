---
title: declarativeNetRequest
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest
l10n:
  sourceCommit: 34215030993b429f727a2c73ef06eb029f57beeb
---

{{AddonSidebar}}

Diese API ermöglicht es Erweiterungen, Bedingungen und Aktionen festzulegen, die beschreiben, wie Netzwerkanforderungen gehandhabt werden sollen. Diese deklarativen Regeln ermöglichen dem Browser, Netzwerkanforderungen zu evaluieren und zu modifizieren, ohne die Erweiterungen über einzelne Netzwerkanforderungen zu benachrichtigen.

## Berechtigungen

Um diese API zu nutzen, muss eine Erweiterung die Berechtigung `"declarativeNetRequest"` oder `"declarativeNetRequestWithHostAccess"` in ihrer [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei anfordern.

Die `"declarativeNetRequest"` Berechtigung erlaubt es Erweiterungen, Anfragen zu blockieren und aufzuwerten, ohne dass [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) erforderlich sind. Host-Berechtigungen sind erforderlich, wenn die Erweiterung Anfragen umleiten oder Header von Anfragen ändern möchte oder wenn die `"declarativeNetRequestWithHostAccess"` Berechtigung anstelle der `"declarativeNetRequest"` Berechtigung verwendet wird. Um in diesen Fällen auf Anfragen zu reagieren, sind Host-Berechtigungen für die URL der Anfrage erforderlich. Für alle Anfragen, außer Navigationsanfragen (d.h. Ressourcentyp `main_frame` und `sub_frame`), sind auch Host-Berechtigungen für den Initiator der Anfrage erforderlich. Der Initiator einer Anfrage ist normalerweise das Dokument oder der Worker, der die Anfrage ausgelöst hat.

Einige Anfragen sind beschränkt und können nicht von Erweiterungen abgeglichen werden. Dazu gehören privilegierte Browseranfragen, Anfragen zu oder von [eingeschränkten Domains](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#restricted_domains) und Anfragen von anderen Erweiterungen.

Die `"declarativeNetRequestFeedback"` Berechtigung ist erforderlich, um {{WebExtAPIRef("declarativeNetRequest.getMatchedRules","getMatchedRules")}} und {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug","onRuleMatchedDebug")}} zu nutzen, da sie Informationen zu abgeglichenen deklarativen Regeln zurückgeben. Siehe [Testen](#testen) für weitere Informationen.

## Regeln

Die deklarativen Regeln sind durch vier Felder definiert:

- `id` – Eine ID, die eine Regel innerhalb eines Regelsets eindeutig identifiziert. Verpflichtend und sollte >= 1 sein.
- `priority` – Die Regelpriorität. Wenn angegeben, sollte sie >= 1 sein. Standardmäßig 1. Siehe [Übereinstimmende Präzedenzfälle](#übereinstimmende_präzedenzfälle) für Details darüber, wie die Priorität beeinflusst, welche Regeln angewendet werden.
- `condition` – Die {{WebExtAPIRef("declarativeNetRequest.RuleCondition","Bedingung")}}, unter der diese Regel ausgelöst wird.
- `action` – Die {{WebExtAPIRef("declarativeNetRequest.RuleAction","Aktion")}}, die ausgeführt wird, wenn die Regel abgeglichen wird. Regeln können eines von diesen Dingen tun:
  - Eine Netzwerkanforderung blockieren.
  - Eine Netzwerkanforderung umleiten.
  - Header von einer Netzwerkanforderung modifizieren.
  - Verhindern, dass eine andere passende Regel angewendet wird.

> [!NOTE]
> Eine Umleitungsaktion leitet die Anfrage nicht um, und die Anfrage setzt normal fort, wenn:
>
> - Die Aktion die Anfrage nicht ändert.
> - Die Umleitungs-URL ungültig ist (z.B. der Wert von {{WebExtAPIRef("declarativeNetRequest.redirect","redirect.regexSubstitution")}} keine gültige URL ist).

Dies ist eine Beispielregel, die alle Skriptanfragen blockiert, die von `"foo.com"` zu einer beliebigen URL mit `"abc"` als Teilstring stammen:

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

Das `urlFilter`-Feld einer Regelbedingung wird verwendet, um das Muster zu spezifizieren, das gegen die Anfrage-URL abgeglichen wird. Siehe {{WebExtAPIRef("declarativeNetRequest.RuleCondition","RuleCondition")}} für Details. Einige Beispiele für URL-Filter sind:

<table>
<tbody>
<tr>
<th><code>urlFilter</code></th>
<th>Entspricht</th>
<th>Entspricht nicht</th>
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

## Regelsets

Regeln sind in Regelsets organisiert:

- **statische Regelsets**: Sammlungen von Regeln, die mit dem [`"declarative_net_request"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) Manifest-Schlüssel definiert sind und in der Erweiterung gespeichert werden. Eine Erweiterung kann statische Regelsets mit {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets","updateEnabledRulesets")}} aktivieren und deaktivieren. Der Satz von aktivierten statischen Regelsets bleibt über Sitzungen hinweg erhalten, nicht jedoch über Erweiterungs-Updates. Die aktivierten statischen Regelsets bei der Installation und Aktualisierung der Erweiterung werden durch den Inhalt des `"declarative_net_request"` Manifest-Schlüssels bestimmt.
- **dynamisches Regelset**: Regeln, die mit {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules","updateDynamicRules")}} hinzugefügt oder entfernt werden. Diese Regeln bleiben über Sitzungen und Erweiterungs-Updates hinweg erhalten.
- **Session-Regelset**: Regeln, die mit {{WebExtAPIRef("declarativeNetRequest.updateSessionRules","updateSessionRules")}} hinzugefügt oder entfernt werden. Diese Regeln bleiben nicht über Browsersitzungen hinweg erhalten.

> [!NOTE]
> Fehler und Warnungen über ungültige statische Regeln werden nur während des [Tests](#testen) angezeigt. Ungültige statische Regeln in dauerhaft installierten Erweiterungen werden ignoriert. Daher ist es wichtig, zu überprüfen, ob Ihre statischen Regelsets durch Tests gültig sind.

## Beschränkungen

### Beschränkungen für statische Regelsets

Eine Erweiterung kann:

- statische Regelsets im [`"declarative_net_request"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) Manifest-Schlüssel bis zu dem Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_STATIC_RULESETS","MAX_NUMBER_OF_STATIC_RULESETS")}} spezifizieren.
- statische Regelsets (im `"declarative_net_request"` Manifest-Schlüssel oder programmgesteuert) aktivieren, sodass die Anzahl der Regeln (aktiviert oder deaktiviert), die diese enthalten, den Wert von {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES","GUARANTEED_MINIMUM_STATIC_RULES")}} nicht überschreiten und die Anzahl der aktivierten statischen Regelsets nicht den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_ENABLED_STATIC_RULESETS","MAX_NUMBER_OF_ENABLED_STATIC_RULESETS")}} überschreitet.
  > [!NOTE]
  > Die Anzahl der Regeln in aktivierten statischen Regelsets für alle Erweiterungen darf das globale Limit nicht überschreiten. Erweiterungen sollten sich nicht darauf verlassen, dass das globale Limit einen bestimmten Wert hat; stattdessen sollten sie {{WebExtAPIRef("declarativeNetRequest.getAvailableStaticRuleCount","getAvailableStaticRuleCount")}} verwenden, um die Anzahl der zusätzlichen Regeln zu finden, die sie aktivieren können.
- Regeln in statischen Regelsets deaktivieren bis zu dem Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES","MAX_NUMBER_OF_DISABLED_STATIC_RULES")}}. Diese deaktivierten Regeln zählen jedoch zu den {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES","GUARANTEED_MINIMUM_STATIC_RULES")}}.

### Dynamische und session-bezogene Regeln

Die Anzahl der dynamischen und session-bezogenen Regeln, die eine Erweiterung hinzufügen kann, ist beschränkt auf:

- In Safari und bis Chrome 119 und Firefox 127, den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}.
- Ab Chrome 120 und Firefox 128, die Werte von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES","MAX_NUMBER_OF_DYNAMIC_RULES")}} und {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES","MAX_NUMBER_OF_SESSION_RULES")}}.

## Übereinstimmende Präzedenzfälle

Wenn der Browser bewertet, wie Anfragen behandelt werden sollen, prüft er die Regeln jeder Erweiterung, die eine Bedingung hat, die mit der Anfrage übereinstimmt, und wählt diejenige, die in folgender Reihenfolge in Betracht gezogen wird:

1. die Regelpriorität, wobei 1 die niedrigste Priorität ist (und Regeln standardmäßig auf 1 gesetzt werden, wenn keine Priorität angegeben ist).<br>
   Wenn dies nicht zu einer anzuwendenden Regel führt:
2. die Regelaktion, in folgender Reihenfolge der Präzedenz:
   1. "allow", was bedeutet, dass alle anderen verbleibenden Regeln ignoriert werden.
   2. "allowAllRequests" (nur für "main_frame" und "sub_frame" Ressourcentypen) hat die gleiche Wirkung wie "allow", gilt aber auch für zukünftige Unterressourcen-Ladungen im Dokument (einschließlich Nachkommen-Frames), die aus der Anfrage erzeugt werden.
   3. "block" storniert die Anfrage.
   4. "upgradeScheme" aktualisiert das Schema der Anfrage.
   5. "redirect" leitet die Anfrage um.
   6. "modifyHeaders" schreibt entweder Anfragen- oder Antwort-Header oder beide um.

> [!NOTE]
> Wenn mehrere übereinstimmende Regeln denselben Regelpriorität und Regelaktionstyp haben, kann das Ergebnis mehrdeutig sein, wenn die unterstützten Aktionen zusätzliche Eigenschaften haben. Diese Eigenschaften können zu Ergebnissen führen, die nicht kombiniert werden können. Zum Beispiel:
>
> - Die "block"-Aktion unterstützt keine zusätzlichen Eigenschaften, und daher gibt es keine Mehrdeutigkeit: Alle übereinstimmenden "block"-Aktionen würden zum selben Ergebnis führen.
> - Die "redirect"-Aktion leitet eine Anfrage zu einem Ziel um. Wenn mehrere "redirect"-Aktionen übereinstimmen, wird alle bis auf eine "redirect"-Aktion ignoriert. Es ist immer noch möglich, wiederholt umzuleiten, wenn die umgeleitete Anfrage eine andere Regelbedingung erfüllt.
> - Mehrere "modifyHeaders"-Aktionen können unabhängig voneinander angewendet werden, wenn sie unterschiedliche Header betreffen. Das Ergebnis ist mehrdeutig, wenn sie denselben Header betreffen, da einige Kombinationen von Operationen nicht erlaubt sind (wie in {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}} erklärt). Die Auswertungsreihenfolge von "modifyHeaders"-Aktionen ist daher wichtig.
>
> Um die Reihenfolge der angewendeten Aktionen zu kontrollieren, weisen Sie Regeln, deren Reihenfolge wichtig ist, unterschiedliche `priority` Werte zu.

> [!NOTE]
> Nach der Regelpriorität und Regelaktion betrachtet Firefox das Regelset, zu dem die Regel gehört, in dieser Reihenfolge der Präzedenz: Sitzung > dynamisch > Sitzung-Regelsets.
> Dies kann nicht browserübergreifend verlässlich verwendet werden, siehe [WECG issue 280](https://github.com/w3c/webextensions/issues/280).

Wenn nur eine Erweiterung eine Regel für die Anfrage bereitstellt, wird diese Regel angewendet. Wo jedoch mehr als eine Erweiterung eine übereinstimmende Regel hat, wählt der Browser diejenige, die in dieser Reihenfolge der Präzedenz angewendet wird:

1. "block"
2. "redirect" und "upgradeScheme"
3. "allow" und "allowAllRequests"

Wenn die Anfrage nicht blockiert oder umgeleitet wurde, werden die übereinstimmenden `modifyHeaders` Aktionen angewendet, wie in {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}} dokumentiert.

## Testen

{{WebExtAPIRef("declarativeNetRequest.testMatchOutcome","testMatchOutcome")}}, {{WebExtAPIRef("declarativeNetRequest.getMatchedRules","getMatchedRules")}}, und {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug","onRuleMatchedDebug")}} stehen zur Verfügung, um beim Testen von Regeln und Regelsets zu helfen. Diese APIs erfordern die `"declarativeNetRequestFeedback"` [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). Zusätzlich:

- in Chrome sind diese APIs nur für entpackte Erweiterungen verfügbar.
- in Firefox sind diese APIs nur verfügbar, nachdem die `extensions.dnr.feedback` Einstellung auf `true` gesetzt wurde. Diese Einstellung erfolgt über `about:config` oder das [`--pref` Argument des `web-ext` CLI-Tools](https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#pref).

## Vergleich mit der webRequest API

- Die declarativeNetRequest API bewertet Netzwerkanforderungen im Browser selbst. Dies macht sie leistungsfähiger als die webRequest API, bei der jede Netzwerkanforderung im JavaScript-Prozess der Erweiterung bewertet wird.
- Da die Anfragen nicht durch den Erweiterungsprozess abgefangen werden, wird durch declarativeNetRequest die Notwendigkeit eines Hintergrundprozesses für die Erweiterungen entfernt.
- Anders als die webRequest API erfordert das Blockieren oder Aufwerten von Anfragen mit der declarativeNetRequest API keine Host-Berechtigungen, wenn die `declarativeNetRequest` Berechtigung verwendet wird.
- Die declarativeNetRequest API bietet den Nutzern besseren Datenschutz, da Erweiterungen die im Namen des Nutzers gestellten Netzwerkanforderungen nicht lesen.
- (Nur Chrome:) Im Gegensatz zu der webRequest API werden alle Bilder oder Iframes, die mit der declarativeNetRequest API blockiert werden, im DOM automatisch entfernt.
- Beim Entscheidungsprozess, ob eine Anfrage blockiert oder umgeleitet werden soll, hat die declarativeNetRequest API Priorität über die webRequest API, da sie eine synchrone Abfangmöglichkeit bietet. Ebenso sind alle über die declarativeNetRequest API entfernten Header nicht für Webanfrage-Erweiterungen sichtbar.
- Die webRequest API ist flexibler als die declarativeNetRequest API, da sie es Erweiterungen erlaubt, eine Anfrage programmatisch zu bewerten.

## Typen

- {{WebExtAPIRef("declarativeNetRequest.MatchedRule")}}
  - : Details einer abgeglichenen Regel.
- {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}}
  - : Die Anfragen- oder Antwort-Header, die für die Anfrage modifiziert werden sollen.
- {{WebExtAPIRef("declarativeNetRequest.Redirect")}}
  - : Details, wie die Umleitung durchgeführt werden soll. Nur gültig für Umleitungsregeln.
- {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}
  - : Der Ressourcentyp einer Anfrage.
- {{WebExtAPIRef("declarativeNetRequest.Rule")}}
  - : Ein Objekt, das Details einer Regel enthält.
- {{WebExtAPIRef("declarativeNetRequest.RuleAction")}}
  - : Ein Objekt zur Definition der Aktion, die ausgeführt wird, wenn eine Regel übereinstimmt.
- {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}
  - : Ein Objekt zur Definition der Bedingung, unter der eine Regel ausgelöst wird.
- {{WebExtAPIRef("declarativeNetRequest.URLTransform")}}
  - : Ein Objekt, das Details einer URL-Transformation für eine Umleitungsaktion enthält.

## Eigenschaften

- {{WebExtAPIRef("declarativeNetRequest.DYNAMIC_RULESET_ID")}}
  - : Regelset-ID für die dynamischen Regeln, die von der Erweiterung hinzugefügt werden.
- {{WebExtAPIRef("declarativeNetRequest.GETMATCHEDRULES_QUOTA_INTERVAL")}}
  - : Das Zeitintervall, innerhalb dessen {{WebExtAPIRef("declarativeNetRequest.MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL")}} {{WebExtAPIRef("declarativeNetRequest.getMatchedRules")}} Aufrufe gemacht werden können.
- {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES")}}
  - : Die Mindestanzahl der statischen Regeln, die einer Erweiterung über ihre aktivierten statischen Regelsets garantiert sind.
- {{WebExtAPIRef("declarativeNetRequest.MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL")}}
  - : Die Anzahl der Male, die {{WebExtAPIRef("declarativeNetRequest.getMatchedRules")}} innerhalb eines Zeitraums von {{WebExtAPIRef("declarativeNetRequest.GETMATCHEDRULES_QUOTA_INTERVAL")}} aufgerufen werden kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES")}}
  - : Die maximale Anzahl der statischen Regeln, die in jedem statischen Regelset deaktiviert werden können.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}} {{deprecated_inline}}
  - : Die maximale Anzahl der dynamischen und session-bezogenen Regeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES")}}
  - : Die maximale Anzahl der dynamischen Regeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_ENABLED_STATIC_RULESETS")}}
  - : Die maximale Anzahl der statischen Regelsets, die eine Erweiterung aktivieren kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_REGEX_RULES")}}
  - : Die maximale Anzahl an regulären Ausdrucksregeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES")}}
  - : Die maximale Anzahl der session-bezogenen Regeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_STATIC_RULESETS")}}
  - : Die maximale Anzahl der statischen Regelsets, die eine Erweiterung im Rahmen des [`declarative_net_request.rule_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) Manifest-Schlüssels spezifizieren kann.
- {{WebExtAPIRef("declarativeNetRequest.SESSION_RULESET_ID")}}
  - : Die Regelset-ID für die session-bezogenen Regeln, die von der Erweiterung hinzugefügt werden.

## Funktionen

- {{WebExtAPIRef("declarativeNetRequest.getAvailableStaticRuleCount()")}}
  - : Gibt die Anzahl der statischen Regeln zurück, die eine Erweiterung aktivieren kann, bevor das globale statische Regel-Limit erreicht wird.
- {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds()")}}
  - : Gibt die IDs der deaktivierten Regeln in einem statischen Regelset zurück.
- {{WebExtAPIRef("declarativeNetRequest.getDynamicRules()")}}
  - : Gibt die Menge der dynamischen Regeln für die Erweiterung zurück.
- {{WebExtAPIRef("declarativeNetRequest.getEnabledRulesets()")}}
  - : Gibt die IDs für die Menge der aktivierten statischen Regelsets zurück.
- {{WebExtAPIRef("declarativeNetRequest.getMatchedRules()")}}
  - : Gibt alle abgeglichenen Regeln für die Erweiterung zurück.
- {{WebExtAPIRef("declarativeNetRequest.getSessionRules()")}}
  - : Gibt die Menge der session-bezogenen Regeln für die Erweiterung zurück.
- {{WebExtAPIRef("declarativeNetRequest.isRegexSupported()")}}
  - : Überprüft, ob ein regulärer Ausdruck als {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}`.regexFilter` Regelbedingung unterstützt wird.
- {{WebExtAPIRef("declarativeNetRequest.setExtensionActionOptions()")}}
  - : Konfiguriert, wie das Aktionszählung für Tabs gehandhabt wird.
- {{WebExtAPIRef("declarativeNetRequest.testMatchOutcome()")}}
  - : Überprüft, ob eine der `declarativeNetRequest` Regeln der Erweiterung eine hypothetische Anfrage abgleichen würde.
- {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules()")}}
  - : Modifiziert die aktive Menge der dynamischen Regeln für die Erweiterung.
- {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets()")}}
  - : Aktualisiert die aktive Menge der statischen Regelsets für die Erweiterung.
- {{WebExtAPIRef("declarativeNetRequest.updateSessionRules()")}}
  - : Modifiziert die Menge der session-bezogenen Regeln für die Erweiterung.
- {{WebExtAPIRef("declarativeNetRequest.updateStaticRules()")}}
  - : Modifiziert den aktivierten Zustand von Regeln in einem statischen Regelset.

## Ereignisse

- {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug")}}
  - : Wird ausgelöst, wenn eine Regel mit einer Anfrage übereinstimmt, während eine Erweiterung mit der "declarativeNetRequestFeedback"-Berechtigung debuggt wird.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
